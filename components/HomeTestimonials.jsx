"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function HomeTestimonials() {
  const testimonials = [
    {
      title: "Excellent Works",
      text: "Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume dolorem queauy antium totam aperiam eaque quaey veritatis vitaec.",
      name: "Andrew D. Bricker",
      designation: "CEO & Founder",
      rating: 5,
    },
    {
      title: "Superb Quality",
      text: "On the other hand denounce righteous indignations and dislike men who beguiled and demoralized by the charms of pleasure moment blinded foresee.",
      name: "Jose T. McMichael",
      designation: "Senior Manager",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#fbfcfb] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[450px] lg:h-[500px] w-full">
              <Image
                src="/assets/images/testimonials/testimonials-three.png"
                alt="Testimonials"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT: Slider Content */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-3">
              Our Testimonials
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
              What Our Clients Say About Solutions
            </h2>

            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 relative">
              <Quote className="w-12 h-12 text-[#6bb82d]/20 absolute right-6 top-6" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 italic">
                "{current.text}"
              </p>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {current.name}
                  </h4>
                  <span className="text-xs font-medium text-gray-500">
                    {current.designation}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#6bb82d] hover:bg-[#6bb82d] hover:text-white flex items-center justify-center text-gray-600 transition cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#6bb82d] hover:bg-[#6bb82d] hover:text-white flex items-center justify-center text-gray-600 transition cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
