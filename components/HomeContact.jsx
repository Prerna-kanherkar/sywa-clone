"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 lg:py-32 bg-[#121625] text-white overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{
          backgroundImage: "url('/assets/images/background/contact-form-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121625]/95 to-[#121625]/85" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Contact Form Card */}
          <div className="lg:col-span-7 bg-white text-gray-900 rounded-2xl p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#6bb82d] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6bb82d] focus:ring-1 focus:ring-[#6bb82d] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6bb82d] hover:bg-[#5aa025] text-white font-medium py-4 rounded-lg text-sm transition shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Contact Information */}
          <div className="lg:col-span-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-3">
              Let's Talk
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-10">
              Get in touch to discuss your next project
            </h2>

            <div className="space-y-8">
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase text-gray-400 font-semibold block mb-1">
                    Location
                  </span>
                  <p className="text-sm sm:text-base text-gray-200 leading-snug">
                    Office 501, Al Saud Building, Al Qusais IND 4, Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase text-gray-400 font-semibold block mb-1">
                    Email Us
                  </span>
                  <a 
                    href="mailto:info@sywaconsult.com"
                    className="text-sm sm:text-base text-gray-200 hover:text-[#6bb82d] transition leading-snug block"
                  >
                    info@sywaconsult.com
                  </a>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6bb82d]/20 text-[#6bb82d] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase text-gray-400 font-semibold block mb-1">
                    Hotline
                  </span>
                  <a 
                    href="tel:+971505786100"
                    className="text-sm sm:text-base font-bold text-gray-200 hover:text-[#6bb82d] transition leading-snug block"
                  >
                    +971505786100
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
