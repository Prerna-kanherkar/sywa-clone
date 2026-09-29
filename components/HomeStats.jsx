"use client";

import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function HomeStats() {
  const stats = [
    {
      percentage: "89%",
      label: "of clients",
      description: "Beliefs have unlocked their potential. They felt confident in using our strategy.",
      icon: Target,
    },
    {
      percentage: "96%",
      label: "of clients",
      description: "Rated accuracy, high quality, account improvement, personal performance, and cost-effectiveness.",
      icon: Users,
    },
    {
      percentage: "100%",
      label: "Client Satisfaction",
      description: "Believe our trainers' expertise in their respective fields and their commitment to clients.",
      icon: Award,
    },
    {
      percentage: "94%",
      label: "of clients",
      description: "Found our guidance to be reliable and transparent, as well as useful in increasing their wealth.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#131826] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
            A full-fledged Engineering Consulting company
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            SYWA offers a suite of Engineering Consulting, design, engineering, outsourcing, and training services to owners, developers, architects, and engineers, as well as a complete consultancy service from concept design to commissioning and project handover. SYWA provides design services regionally and globally.
          </p>
        </div>

        {/* Counter cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-[#1c2235] p-8 rounded-xl border border-gray-800/80 hover:border-[#6bb82d]/50 transition duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#6bb82d]/10 text-[#6bb82d] flex items-center justify-center mb-6 group-hover:bg-[#6bb82d] group-hover:text-white transition">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-extrabold text-[#6bb82d]">
                    {item.percentage}
                  </span>
                  <span className="text-sm text-gray-300 font-medium">
                    {item.label}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
