import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none opacity-20 hidden md:block">
        <div className="relative w-80 h-80">
          <Image 
            src="/assets/images/background/about-bg-shape.png" 
            alt="Decorative background shape" 
            fill 
            className="object-contain object-left-bottom" 
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] lg:h-[520px]">
              <Image
                src="/assets/images/about/about-three.jpg"
                alt="About Sywa Consultancy"
                fill
                className="object-cover"
              />
            </div>
            {/* Subtle decorative curved border / glow */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#6bb82d]/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2.5px] text-[#6bb82d] block mb-3">
              ABOUT COMPANY
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Sywa Consultancy is not only a design consultancy but also offers reliable business solutions.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              SYWA is a global consulting firm that works with leaders to address critical challenges and capitalize on opportunities. Today, we collaborate closely with clients to embrace a transformational approach that benefits all stakeholders, enabling organizations to grow, build long-term competitive advantage, and drive positive societal impact.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#6bb82d] hover:bg-[#5aa025] text-white font-medium px-7 py-3.5 rounded text-sm transition shadow-md group"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}