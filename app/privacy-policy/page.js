import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Sywa Consultancy",
  description: "Privacy Policy and data protection practices for Sywa Consultancy engineering and MEP consulting services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageBanner
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
      />

      <section className="py-10 sm:py-12 lg:py-16 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 sm:space-y-7">
          
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs sm:text-sm font-semibold text-[#6bb82d] uppercase tracking-wider mb-1">
              Data Protection & Privacy
            </p>
            <p className="text-gray-500 text-sm">
              Last updated: October 2026
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              1. Introduction & Overview
            </h2>
            <p>
              Welcome to <strong>SYWA Consultancy</strong> (“Company”, “we”, “our”, “us”). We provide multidisciplinary Engineering Consulting, MEP Design (Mechanical, Electrical, Plumbing), ICT, ELV, AV, Security, Acoustic consulting, Staff Resourcing, and Corporate Technical Training.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how we collect, use, store, protect, and disclose personal and corporate information when you visit our website (<strong>www.sywaconsult.com</strong>), contact our team, engage our engineering consultancy services, or use any related digital solutions.
            </p>
            <p className="mt-3">
              We are dedicated to safeguarding the privacy and confidentiality of our clients, partners, candidates, and website visitors in accordance with applicable United Arab Emirates (UAE) data protection laws and international best practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p>
              We collect information in several ways depending on how you interact with our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Contact & Identity Information:</strong> Name, professional title, company or organization name, business email address, phone number, and physical office location provided when submitting inquiry or consultation forms.
              </li>
              <li>
                <strong>Project & Engineering Documentation:</strong> Project specifications, architectural drawings, tender documentation, MEP requirements, BIM files, and scope of work details shared with us for consultation, quotation, or project execution.
              </li>
              <li>
                <strong>Staff Resourcing & Recruitment Data:</strong> Resumes, employment history, certifications, academic credentials, and identification details submitted by candidates for engineering talent placement.
              </li>
              <li>
                <strong>Technical & Browsing Data:</strong> IP address, browser type and version, device type, operating system, pages visited, time spent on pages, and referring website URLs collected automatically via standard web server logs and cookies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              We use the collected information for specific, legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Delivering high-quality MEP, ICT, ELV, AV, Security, and Acoustic engineering consulting services.
              </li>
              <li>
                Reviewing design drawings, preparing engineering proposals, contracts, project schedules, and feasibility assessments.
              </li>
              <li>
                Responding promptly to inquiries, consultation requests, and customer support communications.
              </li>
              <li>
                Coordinating authority submissions, statutory compliance, and engineering approvals as required by UAE municipal and regulatory authorities.
              </li>
              <li>
                Evaluating candidates for staff resourcing and matching skilled engineering professionals with client project requirements.
              </li>
              <li>
                Improving website performance, security, and user experience.
              </li>
              <li>
                Sending project milestones, administrative notices, and periodic technical insights (with the ability to opt out anytime).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              4. Client Confidentiality & Intellectual Property
            </h2>
            <p>
              In the engineering and architectural sectors, confidentiality is paramount. SYWA Consultancy treats all proprietary engineering designs, schematics, BIM models, cost estimates, and client data as strictly confidential.
            </p>
            <p className="mt-3">
              All project documentation is accessible only by authorized team members directly involved in the project. We readily enter into formal Non-Disclosure Agreements (NDAs) to provide our clients with complete peace of mind.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              5. Information Sharing & Third Parties
            </h2>
            <p>
              SYWA Consultancy does <strong>NOT</strong> sell, rent, lease, or trade personal data or client information to third parties for marketing purposes.
            </p>
            <p className="mt-3">
              We may disclose information only under the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Regulatory & Government Authorities:</strong> When required for statutory submissions, municipal approvals, utility coordination (e.g., DEWA, Civil Defence, Telecom authorities), or compliance with UAE law.
              </li>
              <li>
                <strong>Vetted Service Providers:</strong> Trusted IT hosting, email delivery, and cloud infrastructure partners who operate under strict confidentiality agreements.
              </li>
              <li>
                <strong>Legal Obligations:</strong> If required by court order, law enforcement, or to protect the vital interests, safety, or legal rights of SYWA Consultancy and our clients.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              6. Data Security & Storage
            </h2>
            <p>
              We implement comprehensive physical, organizational, and technical security measures designed to protect your information against unauthorized access, loss, destruction, alteration, or disclosure.
            </p>
            <p className="mt-3">
              Our digital infrastructure utilizes secure protocols, encrypted communications (SSL/TLS), firewalls, access controls, and routine security audits. While no electronic transmission is 100% secure, we continuously update our protocols to maintain industry-standard security.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              7. Data Retention
            </h2>
            <p>
              We retain personal data and project documentation only for as long as necessary to fulfill the purposes for which it was collected, satisfy project warranty and liability obligations, resolve disputes, and comply with UAE legal and regulatory record-keeping requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              8. Your Rights & Choices
            </h2>
            <p>
              Depending on applicable law, you have specific rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Access & Rectification:</strong> Request access to the personal data we hold about you or request corrections to inaccurate information.
              </li>
              <li>
                <strong>Deletion:</strong> Request the deletion of your personal data where it is no longer required for legitimate business or legal purposes.
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing or promotional communications at any time by clicking the unsubscribe link or contacting us directly.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              9. Cookies & Analytics
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to facilitate site navigation, understand website traffic patterns, and improve site functionality. You can manage or disable cookies through your browser settings, although certain features of the website may not function optimally without essential cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our engineering services, technological advancements, or regulatory requirements. Any modifications will be posted on this page with an updated revision date.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              11. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions, inquiries, or requests regarding this Privacy Policy or our data handling practices, please contact our team:
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
