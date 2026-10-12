import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageBanner
        title="Terms and Conditions"
        breadcrumb="Terms and Conditions"
      />

      <section className="py-10 sm:py-12 lg:py-16 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 sm:space-y-7">
          
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs sm:text-sm font-semibold text-[#6bb82d] uppercase tracking-wider mb-1">
              Terms & Conditions
            </p>
            <p className="text-gray-500 text-sm">
              Last updated: 2023-02-03
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Introduction</h3>
            <p>
              Welcome to <strong>Sywa For Information Technology Consultants Co. LLC</strong> (“Company”, “we”, “our”, “us”)!
            </p>
            <p className="mt-2">
              These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at <strong>www.sywaconsult.com</strong> (together or individually “Service”) operated by <strong>Sywa For Information Technology Consultants Co. LLC</strong>.
            </p>
            <p className="mt-2">
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
            </p>
            <p className="mt-2">
              Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
            </p>
            <p className="mt-2">
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at <strong>Biz.dev@sywaconsult.com</strong> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Communications</h3>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at <strong>Biz.dev@sywaconsult.com</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Purchases & Contracts</h3>
            <p>
              If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.
            </p>
            <p className="mt-2">
              You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">4. Privacy & Data Protection</h3>
            <p>
              We prioritize the protection of client information, trade secrets, architectural drawings, and engineering specifications. All personal and commercial data collected is handled in accordance with industry best practices and applicable UAE and international regulations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">5. Disclaimer</h3>
            <p>
              The materials on SYWA's website are provided on an 'as is' basis. SYWA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">6. Contact Us</h3>
            <p>
              Please send your feedback, comments, requests for technical support by email: <strong>info@sywaconsult.com</strong> or by visiting Office 501, Al Saud Building, Al Qusais IND 4, Dubai, UAE.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
