import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";

export default function Consultation() {
  return (
    <section className="py-20 lg:py-24 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131826] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 text-white relative">
            
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-3">
              Need Any Consultations ?
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8">
              We're Ready to Grow Your Business
            </h2>

            <ul className="space-y-4 mb-10 text-gray-300 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Bringing new Technology solutions to the market</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>To be included in the list of best 100 Companies</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-800">
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#6bb82d] hover:bg-[#5aa025] text-white font-medium px-7 py-3.5 rounded text-sm transition shadow-lg group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-medium">Hotline</span>
                  <a href="tel:+971505786100" className="text-sm font-bold text-white hover:text-[#6bb82d] transition">
                    +971505786100
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] lg:h-full min-h-[460px]">
            <Image
              src="/assets/images/about/consultations.jpg"
              alt="Consultation Team"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}