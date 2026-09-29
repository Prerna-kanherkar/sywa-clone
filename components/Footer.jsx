"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedInIcon 
} from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#111522] text-white pt-16 pb-6 overflow-hidden z-10">
      
      {/* Background decorative waves / shapes */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 select-none">
        <div className="relative w-96 h-96">
          <Image 
            src="/assets/images/footer/footer-bg-line-shape.png" 
            alt="Decorative line" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none select-none">
        <div className="relative w-72 h-44">
          <Image 
            src="/assets/images/footer/fig_sywa.png" 
            alt="Decorative figure" 
            fill 
            className="object-contain object-bottom-right" 
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Logo Column (3 cols) */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-28 h-20">
                <Image
                  src="/assets/images/Sywa-f.png"
                  alt="Sywa Consultancy"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Follow Us Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-5 tracking-wide">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/sywaconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#1c2235] hover:bg-[#6bb82d] text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/sywaconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#1c2235] hover:bg-[#6bb82d] text-white flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sywaconsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#1c2235] hover:bg-[#6bb82d] text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/sywaconsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#1c2235] hover:bg-[#6bb82d] text-white flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns (6 cols total) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-5 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="hover:text-white transition">
                    Our Works
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-semibold text-white mb-5 tracking-wide">
                Services
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/engineering-consulting" className="hover:text-white transition">
                    Engineering Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/staff-resourcing" className="hover:text-white transition">
                    Staff Resourcing
                  </Link>
                </li>
                <li>
                  <Link href="/training" className="hover:text-white transition">
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-base font-semibold text-white mb-5 tracking-wide">
                Support
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2023 Sywa consultancy. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 bg-[#1c2235] hover:bg-[#6bb82d] text-white rounded transition flex items-center gap-1 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>

    </footer>
  );
}