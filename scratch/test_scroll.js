const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Launching Chrome with remote debugging...');
  const chromeProcess = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--window-size=1280,900',
    '--disable-gpu',
    'about:blank'
  ]);

  chromeProcess.on('error', err => console.error('Chrome process error:', err));

  // Wait for Chrome to initialize
  await sleep(2000);

  console.log('Getting debugging targets...');
  const targets = await fetchJson('http://127.0.0.1:9222/json');
  console.log('Found targets:', targets.length);

  const target = targets[0];
  const wsUrl = target.webSocketDebuggerUrl;
  console.log('Connecting to WebSocket:', wsUrl);

  const ws = new WebSocket(wsUrl);

  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(resolve => ws.onopen = resolve);
  console.log('WebSocket connected!');

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('Navigating to http://localhost:3000/works ...');
  await send('Page.navigate', { url: 'http://localhost:3000/works' });
  await sleep(3000); // Wait for page and Next.js hydration

  async function takeScreenshot(filename) {
    const result = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(result.data, 'base64');
    const outPath = path.join('c:\\Users\\prern\\OneDrive\\Desktop\\sywa-clone\\screenshots', filename);
    fs.writeFileSync(outPath, buffer);
    console.log(`Saved screenshot: ${outPath} (${buffer.length} bytes)`);
  }

  async function evaluate(expression) {
    const res = await send('Runtime.evaluate', { expression, returnByValue: true });
    return res.result ? res.result.value : null;
  }

  // 1. Initial position of reviews section
  console.log('Step 1: Scrolling to Reviews section start (aligned with first review)...');
  await evaluate(`
    const header = document.querySelector('h2');
    // Find "Our Reviews" heading
    const allH2 = Array.from(document.querySelectorAll('h2'));
    const revH2 = allH2.find(h => h.textContent.includes('Our Reviews'));
    if (revH2) {
      // scroll so revH2 is near top, accounting for fixed navbar (~80px)
      const rect = revH2.getBoundingClientRect();
      window.scrollTo(0, window.scrollY + rect.top - 100);
    }
  `);
  await sleep(1000);

  const scrollInfo1 = await evaluate(`
    (() => {
      const allH2 = Array.from(document.querySelectorAll('h2'));
      const revH2 = allH2.find(h => h.textContent.includes('Our Reviews'));
      const firstCard = document.querySelector('.space-y-4 > div, .space-y-5 > div');
      const photo = document.querySelector('.lg\\:sticky');
      return {
        scrollY: window.scrollY,
        firstCardRect: firstCard ? firstCard.getBoundingClientRect() : null,
        photoRect: photo ? photo.getBoundingClientRect() : null
      };
    })()
  `);
  console.log('Step 1 info:', JSON.stringify(scrollInfo1, null, 2));
  await takeScreenshot('review_scroll_step1_top.png');

  // 2. Scroll down 350px (middle reviews: review 2, 3)
  console.log('Step 2: Scrolling down 350px...');
  await evaluate(`window.scrollBy(0, 350);`);
  await sleep(1000);
  const scrollInfo2 = await evaluate(`
    (() => {
      const photo = document.querySelector('.lg\\:sticky');
      return {
        scrollY: window.scrollY,
        photoRect: photo ? photo.getBoundingClientRect() : null
      };
    })()
  `);
  console.log('Step 2 info (should be sticky at top):', JSON.stringify(scrollInfo2, null, 2));
  await takeScreenshot('review_scroll_step2_mid.png');

  // 3. Scroll down another 400px (last reviews: review 5, 6)
  console.log('Step 3: Scrolling down another 400px (towards last review)...');
  await evaluate(`window.scrollBy(0, 400);`);
  await sleep(1000);
  const scrollInfo3 = await evaluate(`
    (() => {
      const cards = document.querySelectorAll('.space-y-4 > div, .space-y-5 > div');
      const lastCard = cards[cards.length - 1];
      const photo = document.querySelector('.lg\\:sticky');
      return {
        scrollY: window.scrollY,
        lastCardRect: lastCard ? lastCard.getBoundingClientRect() : null,
        photoRect: photo ? photo.getBoundingClientRect() : null
      };
    })()
  `);
  console.log('Step 3 info:', JSON.stringify(scrollInfo3, null, 2));
  await takeScreenshot('review_scroll_step3_last.png');

  // 4. Scroll to footer to verify photo stops at bottom of reviews section
  console.log('Step 4: Scrolling to footer...');
  await evaluate(`
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'start' });
  `);
  await sleep(1000);
  const scrollInfo4 = await evaluate(`
    (() => {
      const footer = document.querySelector('footer');
      const photo = document.querySelector('.lg\\:sticky');
      return {
        scrollY: window.scrollY,
        footerRect: footer ? footer.getBoundingClientRect() : null,
        photoRect: photo ? photo.getBoundingClientRect() : null
      };
    })()
  `);
  console.log('Step 4 info (photo above footer):', JSON.stringify(scrollInfo4, null, 2));
  await takeScreenshot('review_scroll_step4_footer.png');

  // Mobile viewport test (375x812)
  console.log('Step 5: Testing mobile viewport (375x812)...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true
  });
  await evaluate(`
    const allH2 = Array.from(document.querySelectorAll('h2'));
    const revH2 = allH2.find(h => h.textContent.includes('Our Reviews'));
    if (revH2) revH2.scrollIntoView();
  `);
  await sleep(1000);
  await takeScreenshot('review_mobile_reviews.png');

  await evaluate(`window.scrollBy(0, 1000);`);
  await sleep(500);
  await takeScreenshot('review_mobile_photo.png');

  ws.close();
  chromeProcess.kill();
  console.log('All scroll tests complete!');
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
