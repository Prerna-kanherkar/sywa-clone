import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function TrainingPage() {
  const trainingTopics = [
    "Sales performance",
    "Service experience",
    "Creativity and Innovation",
    "Employee team building",
    "Soft skills training",
    "Train the trainer program",
    "Technical skills training",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Banner */}
      <PageBanner
        title="Training"
        breadcrumb="Training"
      />

      {/* TRAINING DETAILS SECTION */}
      <section className="py-20 lg:py-32 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Image with blue/purple dot-matrix accent */}
            <div className="lg:col-span-6 relative">
              
              {/* Dot matrix graphic element (visible in screenshot Training.png) */}
              <div 
                className="absolute -left-6 -bottom-6 w-32 h-44 z-0 pointer-events-none opacity-80"
                style={{
                  backgroundImage: "radial-gradient(#6366f1 2px, transparent 2px)",
                  backgroundSize: "12px 12px",
                }}
              />

              <div className="relative h-[360px] sm:h-[460px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/assets/images/about/why-choose1.jpg"
                  alt="Training Workshop"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* RIGHT: Content & Green Checkmarks */}
            <div className="lg:col-span-6">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Training
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                SYWA designs customized corporate training programs that align with your organization's business objectives and address individual learning needs.
              </p>

              {/* Green checkmark items */}
              <div className="space-y-4">
                {trainingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#6bb82d] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
