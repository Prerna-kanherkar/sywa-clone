import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { 
  PhoneCall, 
  Server, 
  PhoneForwarded, 
  Sliders, 
  Home, 
  Wifi,
  CheckCircle2
} from "lucide-react";

export default function EngineeringConsultingPage() {
  const ictFeatures = [
    {
      title: "Telecommunication Services",
      desc: "Telcom – Spatial planning, MEP provisions, authority coordination, and approval. SYWA provides Telecom services which include fixed-network services (data retail, Internet retail, voice retail, and wholesale) and mobile services.",
      icon: PhoneCall,
    },
    {
      title: "Passive & Active Network",
      desc: "Servers and IDF room spatial planning, Structured Cabling, Routing & Switching, and Wi-Fi.",
      icon: Server,
    },
    {
      title: "IP Telephony",
      desc: "Voice over IP (VOIP) planning and design to support the communication & workspace.",
      icon: PhoneForwarded,
    },
    {
      title: "Guest Room Management System",
      desc: "The GRMS automation system manages information sent by commands, allowing Lighting, HVAC, Presence, and Tablets to operate.",
      icon: Sliders,
    },
    {
      title: "Home Automation System",
      desc: "The HAS system manages the blinds, security, audio/video, intercom, and other critical building systems.",
      icon: Home,
    },
    {
      title: "Wireless",
      desc: "The wireless LAN network allows portable computing devices and sensors to easily connect to other devices, peripherals, IoT, and the Internet.",
      icon: Wifi,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Banner */}
      <PageBanner
        title="Engineering Consulting"
        breadcrumb="Engineering Consulting"
      />

      {/* 1. MEP ENGINEERING DESIGN CONSULTING */}
      <section className="py-20 lg:py-28 bg-[#fbfcfb] relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about/faq-page.png"
                alt="MEP Engineering"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                MEP Engineering Design Consulting
              </h2>
              <p className="text-sm sm:text-base text-[#6bb82d] font-medium italic mb-6">
                “Engineering efficient spaces through intelligent design.”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Mechanical Engineering & HVAC Design",
                  "Electrical Power & Lighting Design",
                  "Plumbing & Drainage Systems",
                  "Fire Fighting & Fire Protection Systems",
                  "Energy Efficiency & Sustainable Design",
                  "Authority Coordination & Approvals",
                  "MEP Services Coordination & BIM",
                  "Testing, Commissioning & Technical Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#6bb82d] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  MEP systems form the backbone of every successful building, ensuring comfort, safety, functionality, and operational efficiency. Our MEP engineering team provides integrated design solutions tailored to the unique requirements of each development, from concept and feasibility through detailed design, tender documentation, construction support, and commissioning.
                </p>
                <p>
                  We work closely with architects, interior designers, structural engineers, specialist consultants, and contractors to deliver fully coordinated MEP systems that are practical, efficient, compliant, and cost-effective.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. AV CONSULTING */}
      <section className="py-20 lg:py-28 bg-white relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                AV Consulting
              </h2>
              <p className="text-sm sm:text-base text-[#6bb82d] font-medium italic mb-6">
                “Executives across the board routinely seek out SYWA’s insights that go far beyond the technical & deep into the heart of performance maximization.”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Comprehensive UI/UX Assessment",
                  "Deep Contextual Research & Planning",
                  "Wireframing & Prototyping",
                  "Conference & Boardroom Systems",
                  "Auditorium & Live Venue Systems",
                  "Digital Signage & Display Walls",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#6bb82d] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                AV now prioritizes developing and implementing sophisticated multimedia and Integrated systems that are integrated into the environment of a building, that can be used to produce live events for sports, entertainment, and business presentations. Our AV division, as certified designers and engineers, can provide AV consulting services guiding you through the process of identifying your needs.
              </p>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about/faq-page.png"
                alt="AV Consulting"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECURITY CONSULTING */}
      <section className="py-20 lg:py-28 bg-[#fbfcfb] relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about/faq-page.png"
                alt="Security Consulting"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Security Consulting
              </h2>
              <p className="text-sm sm:text-base text-[#6bb82d] font-medium italic mb-6">
                “Designing solutions, building success.”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Access Control System",
                  "Intercom System",
                  "CCTV Surveillance",
                  "Intrusion Detection Systems",
                  "Physical Security Integration",
                  "Vulnerability & Risk Analysis",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#6bb82d] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Security systems, asset protection, situational awareness, and emergency response are all made possible by integrated security systems and services. We offer an unrivalled fusion of cutting-edge technology and professional experience. A security consultant pinpoints vulnerabilities in computer systems, networks, and software programs and works toward solutions to strengthen them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ELV CONSULTING */}
      <section className="py-20 lg:py-28 bg-white relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                ELV Consulting
              </h2>
              <p className="text-sm sm:text-base text-[#6bb82d] font-medium italic mb-6">
                “Innovative engineering for a connected world.”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Fire Alarm System",
                  "Master Clock System",
                  "Disabled Toilet Alarm System",
                  "Parking Management System",
                  "IoT Integration",
                  "People Counting",
                  "Building Management System",
                  "Guest Room Management",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#6bb82d] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                In today's scenario, designing a total ELV plan for the new development is becoming too challenging keeping in mind ever-changing technology with the client's current and future scalability. We at SYWA understand the criticality of the same and hence work as an extended ELV department of clients to understand requirements, document them, plan the same, design on drawing level, coordinate with architect/interior designer, and ensure proper execution.
              </p>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about/faq-page.png"
                alt="ELV Consulting"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6. ACOUSTIC DESIGN CONSULTING */}
      <section className="py-20 lg:py-28 bg-[#fbfcfb] relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about/faq-page.png"
                alt="Acoustic Design Consulting"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Acoustic Design Consulting
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                {[
                  "Building Acoustics",
                  "Architectural Acoustics",
                  "Acoustic Testing",
                  "Room Acoustics",
                  "Environmental Acoustics",
                  "Vibration Acoustics",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#6bb82d] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Acoustics, noise, and vibration affect how people experience the built environment and have an impact on communication, safety, and well-being. With many years of experience and capability, our design team is dedicated to excellence and innovation in acoustic consulting and design. We help clients achieve their aspirations in acoustics by guiding them from concept to completion with detailed planning through design, construction, testing, and commissioning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ICT CONSULTING */}
      <section className="py-20 lg:py-28 bg-white relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              ICT Consulting
            </h2>
            <p className="text-base sm:text-lg text-[#6bb82d] font-medium italic">
              “Engineering innovation for a better tomorrow.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ictFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50/80 p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-green-100/60 text-[#6bb82d] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
