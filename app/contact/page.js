import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const contactBoxes = [
    {
      title: "Locations",
      icon: MapPin,
      lines: ["Office 501, Al Saud Building,", "Al Qusais IND 4, Dubai, UAE"],
    },
    {
      title: "Email Us",
      icon: Mail,
      links: [
        { label: "info@sywaconsult.com", href: "mailto:info@sywaconsult.com" },
        { label: "www.sywaconsult.com", href: "https://www.sywaconsult.com" },
      ],
    },
    {
      title: "Call Us",
      icon: Phone,
      lines: ["Mobile : "],
      links: [{ label: "+971505786100", href: "tel:+971505786100" }],
    },
    {
      title: "Working Hour",
      icon: Clock,
      lines: ["Monday _ Friday,", "08:00am - 06:00pm"],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Banner */}
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />

      {/* CONTACT INFO BOXES */}
      <section className="py-20 lg:py-28 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-2">
              Need any Helps
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Contact Informations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactBoxes.map((box, index) => {
              const Icon = box.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-[#6bb82d] mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {box.title}
                  </h3>

                  <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-1">
                    {box.lines &&
                      box.lines.map((l, i) => <p key={i}>{l}</p>)}
                    {box.links &&
                      box.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className="block text-gray-600 hover:text-[#6bb82d] transition"
                        >
                          {link.label}
                        </a>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GOOGLE MAPS EMBED */}
      <section className="w-full h-[400px] sm:h-[450px] relative bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5098292075522!2d55.39928007593197!3d25.287069528053586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c20aa27a001%3A0xd835bc3fec242f49!2sAl%20Saud%20Building%20-%20Muhaisnah%204!5e0!3m2!1sen!2sin!4v1713769388391!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sywa Consultancy Location"
        />
      </section>

      {/* CONTACT FORM SECTION */}
      <HomeContact />

      <Footer />
    </main>
  );
}
