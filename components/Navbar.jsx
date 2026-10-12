"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { 
  ChevronDown, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Compass,
  Users,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";

export default function Navbar() {
  const pathname = usePathname();

  // Scroll state for dynamic glassmorphism and sticky navbar
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Navigation & Drawer states
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Appointment Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Engineering Consulting",
    message: ""
  });

  const servicesDropdownRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  // Dynamic scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
        setAppointmentOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scrolling when mobile menu or appointment drawer is active
  useEffect(() => {
    if (appointmentOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [appointmentOpen, mobileMenuOpen]);

  // Dropdown hover helpers with debounce
  const handleMouseEnterServices = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  // Check active navigation link
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    if (path === "/services") {
      return (
        pathname.startsWith("/services") ||
        pathname === "/engineering-consulting" ||
        pathname === "/staff-resourcing" ||
        pathname === "/training" ||
        pathname === "/trainings"
      );
    }
    if (path === "/works") {
      return pathname === "/works" || pathname === "/our-works";
    }
    if (path === "/about") {
      return pathname === "/about" || pathname === "/about-us";
    }
    if (path === "/contact") {
      return pathname === "/contact" || pathname === "/contact-us";
    }
    return pathname === path;
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setAppointmentOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Engineering Consulting",
          message: ""
        });
      }, 2500);
    }, 700);
  };

  return (
    <>
      {/* WRAPPER FOR FIXED / DYNAMIC NAVBAR */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "shadow-2xl shadow-black/40" : ""
        }`}
      >
        {/* 1. TOP GREEN ANNOUNCEMENT BAR (Matching Reference Image) */}
        <div 
          className={`w-full bg-[#6bb82d] text-white overflow-hidden transition-all duration-300 ease-in-out ${
            isScrolled 
              ? "max-h-0 opacity-0 -translate-y-full py-0 pointer-events-none" 
              : "max-h-16 opacity-100 translate-y-0 py-2 sm:py-2.5 px-4"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center text-center text-xs sm:text-sm font-medium">
            <div className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2">
              
              {/* "Hello" Speech Bubble Badge with bottom-left pointer tail */}
              <span className="relative inline-flex items-center justify-center bg-white text-[#6bb82d] font-bold text-[11px] sm:text-xs px-2.5 py-0.5 rounded shadow-xs select-none">
                Hello
                {/* Speech Bubble Tail */}
                <span 
                  className="absolute -bottom-1 left-2.5 w-0 h-0 border-t-[5px] border-t-white border-r-[5px] border-r-transparent border-l-[2px] border-l-transparent" 
                  aria-hidden="true" 
                />
              </span>

              {/* Announcement text */}
              <span className="tracking-wide">
                We're a professional Engineering Consulting & MEP company. Let's work together
              </span>

              {/* Contact Us Link */}
              <Link 
                href="/contact" 
                className="underline underline-offset-2 font-bold hover:text-white/80 transition-colors ml-1 cursor-pointer"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>

        {/* 2. MAIN HEADER BAR */}
        <header 
          className={`w-full transition-all duration-300 ease-in-out ${
            isScrolled 
              ? "bg-[#0c101d]/92 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" 
              : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4 sm:py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* LOGO */}
            <Link 
              href="/" 
              className="flex items-center group relative z-10 transition-transform duration-200 hover:scale-[1.02]"
              aria-label="SYWA Consultancy Home"
            >
              <div className="relative h-11 w-44 sm:h-12 sm:w-52 md:w-56">
                <Image 
                  src="/assets/images/Sywa-5.png" 
                  alt="Sywa Consultancy"
                  fill
                  priority
                  className="object-contain object-left drop-shadow-md"
                />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS (Visible md+) */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10 text-white font-medium text-sm lg:text-[15px] tracking-wide">
              
              {/* Home */}
              <Link 
                href="/" 
                className={`relative py-2 transition-all duration-200 hover:text-white group ${
                  isActive("/") ? "text-[#72c230] font-semibold" : "text-white/90"
                }`}
              >
                <span>Home</span>
                {/* Active Glowing Dot Indicator */}
                {isActive("/") ? (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6bb82d] shadow-[0_0_8px_#6bb82d]" />
                ) : (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                )}
              </Link>

              {/* Services Dropdown */}
              <div 
                ref={servicesDropdownRef}
                className="relative py-2"
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`flex items-center gap-1.5 transition-all duration-200 cursor-pointer hover:text-white group ${
                    isActive("/services") ? "text-[#72c230] font-semibold" : "text-white/90"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesDropdownOpen ? "rotate-180 text-[#6bb82d]" : "text-white/80 group-hover:text-white"
                    }`} 
                  />
                </button>

                {/* Active Indicator */}
                {isActive("/services") ? (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6bb82d] shadow-[0_0_8px_#6bb82d]" />
                ) : (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/40 rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200" />
                )}

                {/* DYNAMIC DROP-DOWN MEGA CARD (Smooth CSS visibility + transition) */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80 sm:w-96 z-50 transition-all duration-200 ${
                    servicesDropdownOpen 
                      ? "opacity-100 visible translate-y-0 pointer-events-auto" 
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-100 overflow-hidden p-2.5">
                    
                    {/* Services Header */}
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center justify-between border-b border-gray-100 mb-1">
                      <span>Our Engineering Capabilities</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#6bb82d]" />
                    </div>

                    <div className="flex flex-col gap-1">
                      
                      {/* 1. Engineering Consulting */}
                      <Link
                        href="/engineering-consulting"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-3.5 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#6bb82d]/10 border border-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center shrink-0 group-hover:bg-[#6bb82d] group-hover:text-white transition-colors duration-200">
                          <Compass className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-[#6bb82d] transition-colors">
                              Engineering Consulting
                            </span>
                            <span className="text-[10px] px-1.5 py-0.2 bg-[#6bb82d]/10 text-[#6bb82d] rounded font-medium border border-[#6bb82d]/30">
                              Core
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 leading-snug mt-0.5">
                            MEP, HVAC, Electrical, Plumbing & Fire Fighting design solutions.
                          </p>
                        </div>
                      </Link>

                      {/* 2. Staff Resourcing */}
                      <Link
                        href="/staff-resourcing"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-3.5 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#6bb82d] transition-colors block">
                            Staff Resourcing
                          </span>
                          <p className="text-xs text-gray-600 leading-snug mt-0.5">
                            Top-tier engineering experts and CAD/BIM professionals on demand.
                          </p>
                        </div>
                      </Link>

                      {/* 3. Training & Development */}
                      <Link
                        href="/training"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-3.5 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#6bb82d] transition-colors block">
                            Training & Development
                          </span>
                          <p className="text-xs text-gray-600 leading-snug mt-0.5">
                            Hands-on MEP engineering and modern BIM certification courses.
                          </p>
                        </div>
                      </Link>

                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="mt-2 pt-2 border-t border-gray-100 px-2 pb-1">
                      <Link
                        href="/works"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center justify-between text-xs text-gray-600 hover:text-[#6bb82d] hover:bg-gray-50 p-1.5 rounded transition-colors group"
                      >
                        <span>Explore projects & portfolio</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#6bb82d]" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

              {/* Our Works */}
              <Link 
                href="/works" 
                className={`relative py-2 transition-all duration-200 hover:text-white group ${
                  isActive("/works") ? "text-[#72c230] font-semibold" : "text-white/90"
                }`}
              >
                <span>Our Works</span>
                {isActive("/works") ? (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6bb82d] shadow-[0_0_8px_#6bb82d]" />
                ) : (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                )}
              </Link>

              {/* About Us */}
              <Link 
                href="/about" 
                className={`relative py-2 transition-all duration-200 hover:text-white group ${
                  isActive("/about") ? "text-[#72c230] font-semibold" : "text-white/90"
                }`}
              >
                <span>About Us</span>
                {isActive("/about") ? (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6bb82d] shadow-[0_0_8px_#6bb82d]" />
                ) : (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                )}
              </Link>

              {/* Contact Us */}
              <Link 
                href="/contact" 
                className={`relative py-2 transition-all duration-200 hover:text-white group ${
                  isActive("/contact") ? "text-[#72c230] font-semibold" : "text-white/90"
                }`}
              >
                <span>Contact Us</span>
                {isActive("/contact") ? (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6bb82d] shadow-[0_0_8px_#6bb82d]" />
                ) : (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                )}
              </Link>

            </nav>

            {/* RIGHT ACTION BUTTONS */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* 9-DOTS GRID BUTTON (Matching Reference Image) */}
              <button
                onClick={() => setAppointmentOpen(true)}
                className="group relative w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6bb82d]/50"
                aria-label="Get Appointment and Quick Information"
                title="Get Appointment & Inquiries"
              >
                {/* 3x3 Grid of 9 Dots with dynamic hover response */}
                <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                  {[...Array(9)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-200 ${
                        i === 4 ? "group-hover:bg-[#6bb82d] group-hover:scale-125" : "group-hover:scale-110"
                      }`} 
                    />
                  ))}
                </div>
              </button>

              {/* MOBILE HAMBURGER TOGGLE (Visible on small screens < md) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white focus:outline-none focus:ring-2 focus:ring-[#6bb82d]/50"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <span 
                  className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "rotate-45 translate-y-2 bg-[#6bb82d]" : ""
                  }`} 
                />
                <span 
                  className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ease-in-out ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`} 
                />
                <span 
                  className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#6bb82d]" : ""
                  }`} 
                />
              </button>

            </div>

          </div>
        </header>
      </div>

      {/* 3. DYNAMIC MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 z-50 transition-opacity backdrop-blur-sm md:hidden"
        />
      )}

      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#101423] text-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col justify-between p-6 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div className="relative h-9 w-36">
              <Image 
                src="/assets/images/Sywa-5.png" 
                alt="Sywa Consultancy"
                fill
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close Mobile Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col text-base font-medium mt-6 divide-y divide-white/5">
            
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3.5 flex items-center justify-between ${
                isActive("/") ? "text-[#72c230] font-semibold" : "text-gray-200"
              }`}
            >
              <span>Home</span>
              {isActive("/") && <span className="w-2 h-2 rounded-full bg-[#6bb82d]" />}
            </Link>

            {/* Mobile Services Accordion */}
            <div className="py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between py-2 text-left cursor-pointer ${
                  isActive("/services") ? "text-[#72c230] font-semibold" : "text-gray-200"
                }`}
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180 text-[#6bb82d]" : "text-gray-400"
                  }`} 
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 space-y-1 bg-white rounded-xl p-2 shadow-lg border border-gray-100">
                  <Link
                    href="/engineering-consulting"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-800 hover:text-[#6bb82d] hover:bg-gray-50 rounded-lg transition"
                  >
                    Engineering Consulting
                  </Link>
                  <Link
                    href="/staff-resourcing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-800 hover:text-[#6bb82d] hover:bg-gray-50 rounded-lg transition"
                  >
                    Staff Resourcing
                  </Link>
                  <Link
                    href="/training"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-800 hover:text-[#6bb82d] hover:bg-gray-50 rounded-lg transition"
                  >
                    Training & Development
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/works" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3.5 flex items-center justify-between ${
                isActive("/works") ? "text-[#72c230] font-semibold" : "text-gray-200"
              }`}
            >
              <span>Our Works</span>
              {isActive("/works") && <span className="w-2 h-2 rounded-full bg-[#6bb82d]" />}
            </Link>

            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3.5 flex items-center justify-between ${
                isActive("/about") ? "text-[#72c230] font-semibold" : "text-gray-200"
              }`}
            >
              <span>About Us</span>
              {isActive("/about") && <span className="w-2 h-2 rounded-full bg-[#6bb82d]" />}
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3.5 flex items-center justify-between ${
                isActive("/contact") ? "text-[#72c230] font-semibold" : "text-gray-200"
              }`}
            >
              <span>Contact Us</span>
              {isActive("/contact") && <span className="w-2 h-2 rounded-full bg-[#6bb82d]" />}
            </Link>

          </div>

          {/* Quick Appointment Button for Mobile */}
          <div className="mt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAppointmentOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#6bb82d] hover:bg-[#5aa025] text-white font-medium py-3 rounded-lg text-sm transition shadow-lg shadow-green-900/20 cursor-pointer"
            >
              <span>Get Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Mobile Contact Quick Details */}
        <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#6bb82d]" />
            <span>+971 4 234 5678 / +91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#6bb82d]" />
            <span>info@sywaconsult.com</span>
          </div>
        </div>

      </div>

      {/* 4. DYNAMIC SLIDE-OVER DRAWER ("Get Appointment" & Quick Connect) */}
      {appointmentOpen && (
        <div 
          onClick={() => setAppointmentOpen(false)}
          className="fixed inset-0 bg-black/70 z-50 transition-opacity backdrop-blur-sm"
        />
      )}

      <aside 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#111625] text-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto p-6 sm:p-8 ${
          appointmentOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Appointment Drawer"
      >
        <div>
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6bb82d] animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-gray-300 font-semibold">
                Quick Consultation
              </span>
            </div>
            <button
              onClick={() => setAppointmentOpen(false)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Heading */}
          <div className="mt-6 mb-6">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Get Appointment
            </h3>
            <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">
              Connect with our MEP engineering consultants for project discussions, estimates, and solutions.
            </p>
          </div>

          {/* Form / Success Screen */}
          {submitted ? (
            <div className="bg-green-950/40 border border-green-500/60 rounded-xl p-6 text-center my-6 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">Appointment Requested!</h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Thank you! Our engineering team will review your requirements and reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#192033] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#192033] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#192033] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Service Interested In
                </label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#192033] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition appearance-none cursor-pointer"
                  >
                    <option value="Engineering Consulting">Engineering Consulting (MEP)</option>
                    <option value="Staff Resourcing">Staff Resourcing</option>
                    <option value="Training & Development">Training & Development</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Project Details / Message
                </label>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#192033] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6bb82d] hover:bg-[#5aa025] text-white font-semibold py-3.5 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-green-900/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick Contact Info Cards */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="flex items-start gap-3 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#6bb82d] shrink-0 mt-0.5" />
              <span>Office 501, Al Saud Building, Al Qusais IND 4, Dubai, UAE</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <Mail className="w-4 h-4 text-[#6bb82d] shrink-0" />
              <a href="mailto:info@sywaconsult.com" className="hover:text-[#6bb82d] transition">
                info@sywaconsult.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <Clock className="w-4 h-4 text-[#6bb82d] shrink-0" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Social Icons at Bottom */}
        <div className="flex items-center justify-center gap-6 pt-6 mt-6 border-t border-white/10 text-gray-400">
          <a 
            href="https://www.linkedin.com/company/sywaconsultancy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#6bb82d] hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
      </aside>
    </>
  );
}