import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export default function StaffResourcingPage() {
  const bimProcess = [
    {
      step: "01",
      title: "BIM Modeling",
      description: "SYWA is helping Architecture, Engineering, and Construction (AEC) professionals move toward more collaborative, automated, and successful working methods.",
      image: "/assets/images/work-process/process1.jpg",
    },
    {
      step: "02",
      title: "Design & Dev",
      description: "We emphasize planning get everythin documente nothing assumption",
      image: "/assets/images/work-process/process2.jpg",
    },
    {
      step: "03",
      title: "Project Testing",
      description: "We emphasize planning get everythin documente nothing assumption",
      image: "/assets/images/work-process/process3.jpg",
    },
    {
      step: "04",
      title: "Project Deliver",
      description: "We emphasize planning get everythin documente nothing assumption",
      image: "/assets/images/work-process/process4.jpg",
    },
  ];

  const supervisionResources = [
    {
      title: "ICT / AV / Security / ELV Leads",
      description: "To provide high-quality sustainable products & services that combine performance with efficiency while establishing a successful relationship with our customers & our suppliers.",
    },
    {
      title: "Site Inspection",
      description: "Site inspections are a set of regular activities to check and verify on-field compliance including Safety Standards, working conditions, and other critical areas of the work site.",
    },
    {
      title: "Submittal Reviews",
      description: "A construction submittal plays a critical role in the overall construction process. They allow designers, engineers, and other items they plan on working with.",
    },
    {
      title: "Snagging & De-Snagging",
      description: "SYWA helps people to check if the defects from the original snagging list have been rectified and if nothing has been further damaged during the repairs.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Banner */}
      <PageBanner
        title="Staff Resourcing"
        breadcrumb="Staff Resourcing"
      />

      {/* INTRO SECTION */}
      <section className="py-20 lg:py-28 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Staff Resourcing
            </h2>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 italic mb-6">
              “Believe you can and you’re halfway there.”
            </h4>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                SYWA Select Workforce Fulfilment Services. We research our client's requirements and provide flexible, scalable staffing solutions. Our cutting-edge, tech-enabled staffing solutions find the right candidates and allow you to efficiently manage your staffing solutions as your staffing agency, thereby improving productivity and reducing employee turnover.
              </p>
              <p>
                Through BIM, SYWA is helping Architecture, Engineering, and Construction (AEC) professionals move towards more collaborative, automated, and successful ways of working.
              </p>
              <p>
                In the era of an always-changing economy where companies are contesting for resources-both tangible and intangible, finding and retaining the right intellectual talent can be a daunting task. People are organizations’ real assets who are a significant part of the winning strategy; crafted and executed to achieve the corporate goals. SYWA, as one of the leading recruitment agencies, is determined to partner with organizations of all sizes and deliver the best-fit permanent talent across industries.
              </p>
            </div>
          </div>

          {/* Authentic image from screenshot */}
          <div className="relative h-[320px] sm:h-[460px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/projects/project-details.jpg"
              alt="Staff Resourcing Workspace"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* BIM RESOURCES PROCESS SECTION */}
      <section className="py-20 lg:py-28 bg-[#fbfcfb] relative z-10 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Section title with Process watermark */}
          <div className="text-center relative mb-16">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-9xl font-extrabold text-gray-200/50 select-none pointer-events-none -z-10">
              Process
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              BIM Resources
            </h3>
            <div className="w-16 h-1 bg-[#6bb82d] mx-auto mt-4 rounded" />
          </div>

          {/* Wavy line graphic in background on desktop */}
          <div className="absolute top-44 left-0 right-0 h-16 pointer-events-none hidden lg:block opacity-60">
            <div className="relative w-full h-full">
              <Image
                src="/assets/images/shapes/work-process-line.png"
                alt="Process Line"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {bimProcess.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute bottom-3 right-3 bg-[#6bb82d] text-white text-xs font-bold px-2.5 py-1 rounded">
                    {step.step}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h5 className="text-base font-bold text-gray-900 mb-2">
                    {step.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SUPERVISION RESOURCES SECTION */}
      <section className="py-20 lg:py-28 bg-white relative z-10 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center relative mb-16">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-9xl font-extrabold text-gray-200/50 select-none pointer-events-none -z-10">
              Pricing
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Supervision Resources
            </h3>
            <div className="w-16 h-1 bg-[#6bb82d] mx-auto mt-4 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {supervisionResources.map((res, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200">
                    {res.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {res.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
