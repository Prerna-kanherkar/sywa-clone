"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Wrench, 
  Share2, 
  Users 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcfb]">
      
      {/* HERO BANNER */}
      <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center pt-28 pb-20 sm:pt-30 sm:pb-24 lg:pt-32 lg:pb-28">
        
        {/* Background photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/slider/slider-bg.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Angular green polygon accent in bottom right (as visible in screenshot) */}
        <div 
          className="absolute -right-20 bottom-0 w-[55%] h-[75%] bg-[#6bb82d]/75 pointer-events-none hidden md:block"
          style={{
            clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-6 sm:pt-8">
          <div className="max-w-2xl text-white">
            
            <span className="text-xl sm:text-2xl md:text-3xl font-normal block mb-2 tracking-tight text-gray-100">
              We help you get to the
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
              Right Engineering Design
            </h1>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#6bb82d] hover:bg-[#5aa025] text-white font-medium px-8 py-3.5 rounded text-sm transition shadow-lg shadow-black/30 group"
              >
                <span>Let's Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* FEATURE CARDS OVERLAPPING HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-14 sm:-mt-16 lg:-mt-20 pb-8 sm:pb-10 lg:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 1. Trusted Partner */}
          <div className="bg-white rounded-lg p-6 sm:p-7 shadow-xl hover:shadow-2xl transition border border-gray-100/80 mt-0 lg:mt-4">
            <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200/60 flex items-center justify-center text-[#6bb82d] mb-4">
              <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Trusted Partner
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              SYWA is a trustworthy company committed to providing the best technology services.
            </p>
          </div>

          {/* 2. Technical Support */}
          <div className="bg-white rounded-lg p-6 sm:p-7 shadow-xl hover:shadow-2xl transition border border-gray-100/80 mt-0">
            <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200/60 flex items-center justify-center text-[#6bb82d] mb-4">
              <Wrench className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Technical Support
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              SYWA Supports technology by solving issues and keeping it running smoothly.
            </p>
          </div>

          {/* 3. Engineering Consulting */}
          <div className="bg-white rounded-lg p-6 sm:p-7 shadow-xl hover:shadow-2xl transition border border-gray-100/80 mt-0 lg:mt-6">
            <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200/60 flex items-center justify-center text-[#6bb82d] mb-4">
              <Share2 className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Engineering Consulting
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Latest innovations and optimizing technology infrastructure, we help you leverage the latest advancements.
            </p>
          </div>

          {/* 4. Staff Resourcing */}
          <div className="bg-white rounded-lg p-6 sm:p-7 shadow-xl hover:shadow-2xl transition border border-gray-100/80 mt-0 lg:mt-3">
            <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200/60 flex items-center justify-center text-[#6bb82d] mb-4">
              <Users className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Staff Resourcing
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              offering top-notch staff resourcing services that match your business needs with skilled professionals.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}