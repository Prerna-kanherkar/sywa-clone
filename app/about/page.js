"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { 
  Compass, 
  Eye, 
  ShieldCheck, 
  Lightbulb, 
  FileCheck, 
  Layers, 
  Cpu, 
  FileText,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whySywa = [
    {
      title: "Our Purpose",
      description: "Engage people's minds to unlock the potential of those who advance in the world. Every day, we look for the best talent to help us grow. We grow together with our clients, maintaining a strong culture anchored in clear and frequently communicated values.",
      icon: Compass,
    },
    {
      title: "Our Vision",
      description: "To help create a positive, persisting transformation in the world, we get the right things done in an efficient way and help clients improve decision effectiveness and system performance enabling optimum future state.",
      icon: Eye,
    },
    {
      title: "Our Values",
      description: "Integrity as an expression of courage and accountability, we deliver results enabling sustainable advantage—value delivered in the form of positive and lasting change.",
      icon: ShieldCheck,
    },
    {
      title: "Our Culture",
      description: "We are the trendsetters not followers, capitalizing on new ideas adapting to the evolving market conditions, and turning ideas into action.",
      icon: Lightbulb,
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Concept",
      description: "The concept Design was produced in line with the requirements of the initial Project Brief.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Developed Design",
      description: "Project strategies are prepared in concept details, allowing each strategy to be verified and the Information includes adequate details for costing.",
      icon: Layers,
    },
    {
      number: "03",
      title: "Technical Design",
      description: "Design and specifications shall describe all major design components and how they fit together, as well as any performance requirements are detailed.",
      icon: Cpu,
    },
    {
      number: "04",
      title: "Tender and Construction Documentation",
      description: "Tender query response with necessary design updates to obtain the authority approvals, and support the contractor and client to appoint a Contractor / System Integrator.",
      icon: FileText,
    },
  ];

  const faqs = [
    {
      q: "What is an ICT consultant?",
      a: "An ICT Consultant can advise on the design, structure, and efficiency of ICT systems in organizations or specific projects. They produce business needs assessments and develop information systems solutions that meet the objectives of the organization or project.",
    },
    {
      q: "Do you offer service and support contracts?",
      a: "Yes! We provide service contracts for your AV systems and healthcare systems that are customized to your needs.",
    },
    {
      q: "Where do you provide service and support?",
      a: "We are headquartered in DUBAI and provide full service and support to UTC +4. We also provide services in many major cities. Contact us for the specific pricing and availability in your city.",
    },
    {
      q: "What is meant by ELV systems?",
      a: "Supply, Installation, Testing, and Commissioning of ELV systems includes the following but is not limited to: Fire Detection and Fire Alarm System, CCTV Surveillance & Security System, and Access Control System.",
    },
    {
      q: "What all services SYWA offers?",
      a: "We offer Engineering Consulting (ICT, ELV, AV Securities, Acoustic consulting), Staffing (talent acquisition, BIM resources, and design & site supervision resources), and Training services.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Banner */}
      <PageBanner 
        title="About Us" 
        breadcrumb="About Us" 
      />

      {/* WHO WE ARE SECTION */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT: Composite Images + Experience Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full max-w-lg mx-auto">
                
                {/* Main image */}
                <div className="relative h-[360px] sm:h-[420px] w-[82%] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/images/about/about-five1.jpg"
                    alt="Engineering Team with tablet"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary overlapping image */}
                <div className="absolute right-0 bottom-0 w-[58%] h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/assets/images/about/about-five2.jpg"
                    alt="Engineer working with plans"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Experience Green Badge */}
                <div className="absolute right-8 top-12 sm:top-20 bg-[#6bb82d] text-white p-5 sm:p-7 rounded-xl shadow-xl z-20 max-w-[200px]">
                  <span className="text-3xl sm:text-4xl font-extrabold block leading-none mb-1.5">
                    25
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold leading-tight">
                    Years Of Experience In Engineering & MEP Solutions
                  </h4>
                </div>

              </div>
            </div>

            {/* RIGHT: Text Content */}
            <div className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-2 sm:mb-3">
                WHO WE ARE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5 sm:mb-6">
                Engineering Solutions That Fit Your Needs!
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  SYWA is a global consulting firm that collaborates with leaders to tackle critical challenges and capture their greatest opportunities. Today, we work closely with clients to embrace a transformational approach aimed at benefiting all stakeholders. Empowering organizations to grow, build sustainable competitive advantage and drive positive societal impact.
                </p>
                <p>
                  Engage the heart and minds of your people to unlock the potential of those who advance to the world. We search for the best talent to improve every day.
                </p>
                <p>
                  We get the right things done in an efficient way and help clients improve decision effectiveness and system performance enabling optimum future state.
                </p>
                <p>
                  SYWA adheres to leading international and industry best practice ICT, AV, Security, and ELV Design standards, as well as other leading conventional design approaches, with the utmost reliability and rated technologies appropriate for each specific area of development.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY SYWA (DARK NAVY SECTION) */}
      <section className="py-10 sm:py-12 lg:py-16 bg-[#131826] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Why Sywa
            </h2>
            <div className="w-16 h-1 bg-[#6bb82d] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySywa.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1c2235] p-6 sm:p-7 rounded-xl border border-gray-800/80 hover:border-[#6bb82d]/60 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-[#6bb82d]/10 text-[#6bb82d] flex items-center justify-center mb-4 sm:mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR WORKFLOW SECTION */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Our Workflow
            </h2>
            <div className="w-16 h-1 bg-[#6bb82d] rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-6 sm:p-7 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-xl transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-green-100/60 text-[#6bb82d] flex items-center justify-center mb-4 sm:mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#6bb82d] tracking-widest uppercase mb-1 block">
                      Step {step.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-10 sm:py-12 lg:py-16 bg-[#fbfcfb] relative z-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-1.5">
              Faqs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs transition"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-[#6bb82d] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#6bb82d] ml-4 shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
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
