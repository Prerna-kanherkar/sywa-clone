import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function HomeInnovation() {
  const values = [
    {
      title: "HONESTY AND INTEGRITY",
      description: "We consider this to be the most crucial aspect of our organization and demand that all of our employees uphold the highest ethical standards in whatever they do..",
      icon: CheckCircle2,
    },
    {
      title: "GROWTH ASSISTANCE",
      description: "SYWA strives for perfection. Constantly striving to deliver incredible performance and amazing results for our clients.",
      icon: TrendingUp,
    },
    {
      title: "AIMING TO PROVIDE EXCELLENT SERVICE",
      description: "SYWA takes a service-oriented approach to leadership, which enables us to anticipate and respond to the needs of our clients by providing them with excellent trading ideas and tools to properly manage risk.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Intro */}
          <div className="lg:col-span-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-2 sm:mb-3">
              Best Consultants
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              We integrate innovation into everything we do
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              Approaching every project with a high-performance design strategy
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6bb82d] hover:bg-[#5aa025] text-white font-medium px-7 py-3.5 rounded text-sm transition shadow-md group"
            >
              <span>Book an appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT: Value Cards */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i}
                  className="p-5 sm:p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-lg transition duration-300 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100/60 text-[#6bb82d] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
