import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer - Sywa Consultancy",
  description: "Official legal disclaimer and professional engineering advisory notices for Sywa Consultancy.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageBanner
        title="Disclaimer"
        breadcrumb="Disclaimer"
      />

      <section className="py-10 sm:py-12 lg:py-16 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 sm:space-y-7">
          
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs sm:text-sm font-semibold text-[#6bb82d] uppercase tracking-wider mb-1">
              Legal & Professional Advisory Notice
            </p>
            <p className="text-gray-500 text-sm">
              Last updated: October 2026
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              1. General Website Information
            </h2>
            <p>
              The information published on this website (<strong>www.sywaconsult.com</strong>) by <strong>SYWA Consultancy</strong> (“Company”, “we”, “our”, “us”) is provided for general informational, educational, and introductory purposes only.
            </p>
            <p className="mt-3">
              While we endeavor to keep all information up to date, accurate, and relevant to modern engineering practices, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of any content, diagrams, project summaries, or technical descriptions contained on the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              2. No Professional Engineering Relationship Formed
            </h2>
            <p>
              Nothing on this website should be construed as formal engineering, architectural, mechanical, electrical, plumbing, or technical advice. Browsing our website, reviewing our portfolio, or submitting an online consultation inquiry does <strong>not</strong> establish an engineer-client or professional advisory relationship between you and SYWA Consultancy.
            </p>
            <p className="mt-3">
              A formal professional relationship and binding engineering scope of work are established solely through a mutually executed formal contract, Letter of Engagement, or signed Consultancy Agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              3. Project-Specific Engineering & Code Compliance
            </h2>
            <p>
              All engineering designs, MEP schematics (Mechanical, Electrical, Plumbing), ICT networks, ELV infrastructure, AV systems, acoustic treatments, and security plans must be customized to individual site conditions, architectural parameters, and client objectives.
            </p>
            <p className="mt-3">
              Building regulations, municipal codes, and statutory requirements (including those set by Dubai Municipality, DEWA, Civil Defence, and international engineering standards like ASHRAE, NFPA, and CIBSE) are subject to continuous evolution. General technical content on this site should not be relied upon as a substitute for site-specific engineering analysis and certified documentation.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              4. External Links & Third-Party Resources
            </h2>
            <p>
              This website may include links to external websites, software platforms (e.g., BIM and CAD vendors), regulatory portals, or social networks. These external links are provided purely for user convenience.
            </p>
            <p className="mt-3">
              SYWA Consultancy has no control over the content, security, accuracy, or privacy policies of any third-party websites. Inclusion of any link does not imply endorsement, affiliation, or verification of the information provided on external platforms.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              5. Intellectual Property & Portfolio Showcases
            </h2>
            <p>
              All project renders, photographs, illustrations, architectural descriptions, branding assets, and technical articles displayed on this site are protected by copyright and intellectual property laws.
            </p>
            <p className="mt-3">
              Featured projects (such as luxury resorts, commercial complexes, and master-planned communities) represent past or ongoing collaborations and demonstrate our technical capabilities. Any unauthorized duplication, distribution, or reproduction of these materials without explicit written consent from SYWA Consultancy is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law in the United Arab Emirates and international jurisdictions, SYWA Consultancy, its partners, directors, engineers, and employees shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                The use of, or inability to use, our website or its contents.
              </li>
              <li>
                Any decisions made or actions taken based on general technical information or project summaries found on this website.
              </li>
              <li>
                Any technical inaccuracies, typographical errors, transmission delays, or server interruptions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              7. Amendments to This Disclaimer
            </h2>
            <p>
              We reserve the right to revise, update, or modify this Disclaimer at any time without prior notice. Any revisions will become effective immediately upon posting to this page.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions regarding this Disclaimer or require certified engineering consulting services for your project, please contact us:
            </p>
            <div className="space-y-1.5 text-sm sm:text-base">
              <p>
                <strong>Company:</strong> Sywa For Information Technology Consultants Co. LLC
              </p>
              <p>
                <strong>Address:</strong> Office 501, Al Saud Building, Al Qusais IND 4, Dubai, United Arab Emirates
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@sywaconsult.com" className="text-[#6bb82d] hover:underline">
                  info@sywaconsult.com
                </a>{" "}
                /{" "}
                <a href="mailto:Biz.dev@sywaconsult.com" className="text-[#6bb82d] hover:underline">
                  Biz.dev@sywaconsult.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+971505786100" className="text-[#6bb82d] hover:underline">
                  +971 50 578 6100
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
