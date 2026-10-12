import Image from "next/image";
import Link from "next/link";
import { 
  Radio, 
  Tv, 
  Cpu, 
  ShieldCheck, 
  Volume2, 
  UserCheck 
} from "lucide-react";

export default function HomeExpertise() {
  const expertiseItems = [
    { title: "ICT Consulting", href: "/engineering-consulting", icon: Radio },
    { title: "AV Consulting", href: "/engineering-consulting", icon: Tv },
    { title: "ELV Consulting", href: "/engineering-consulting", icon: Cpu },
    { title: "Security Consulting", href: "/engineering-consulting", icon: ShieldCheck },
    { title: "Acoustic Design Consulting", href: "/engineering-consulting", icon: Volume2 },
    { title: "Talent Acquisition", href: "/staff-resourcing", icon: UserCheck },
  ];

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#121625] text-white overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: "url('/assets/images/hero/hero-two.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121625] via-[#121625]/90 to-[#121625]/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-10 lg:mb-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Our Expertise
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
              Our high standards have earned us the loyalty of business owners, architects, consultants, and contractors. Our customers can expect the highest quality design, delivery, installation, and maintenance services.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-36 h-36 rounded-full bg-[#6bb82d]/20 border border-[#6bb82d]/40 flex items-center justify-center p-4 animate-pulse">
              <div className="relative w-20 h-20">
                <Image
                  src="/assets/images/hero/hero-circle-icon.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6 Feature Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="bg-[#1c2235]/90 hover:bg-[#6bb82d] p-6 rounded-xl border border-gray-800 hover:border-[#6bb82d] text-center transition duration-300 flex flex-col items-center justify-center group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 group-hover:bg-white text-[#6bb82d] group-hover:text-[#6bb82d] flex items-center justify-center mb-4 transition">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-snug">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
