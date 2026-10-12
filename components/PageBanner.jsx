import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function PageBanner({
  title,
  breadcrumb,
  subtitle,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="relative bg-[#121625] pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 overflow-hidden text-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: "url('/assets/images/background/banner.jpg')",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#121625]/90" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
          {title}
        </h1>

        {/* Subtitle if present (e.g. on Our Works) */}
        {subtitle && (
          <h4 className="text-base sm:text-lg md:text-xl font-medium text-gray-200 mt-3 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </h4>
        )}

        {/* Description if present */}
        {description && (
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* Button if present */}
        {buttonText && (
          <div className="mt-6">
            <Link
              href={buttonLink || "/contact"}
              className="inline-flex items-center gap-2 bg-[#6bb82d] hover:bg-[#5aa025] text-white font-medium px-7 py-3.5 rounded text-sm transition shadow-lg"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Breadcrumb (if not hidden) */}
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mt-4 sm:mt-5 font-medium">
            <Link href="/" className="hover:text-[#6bb82d] transition">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-white font-semibold">{breadcrumb}</span>
          </nav>
        )}

      </div>
    </section>
  );
}
