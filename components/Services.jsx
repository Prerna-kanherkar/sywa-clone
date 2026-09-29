import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, GraduationCap } from "lucide-react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Engineering Consulting",
      href: "/engineering-consulting",
      image: "/assets/images/services/service-three1.jpg",
      icon: Cpu,
    },
    {
      number: "02",
      title: "Staff Resourcing",
      href: "/staff-resourcing",
      image: "/assets/images/services/service-three2.jpg",
      icon: Layers,
    },
    {
      number: "03",
      title: "Training services",
      href: "/training",
      image: "/assets/images/services/service-three3.jpg",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#fbfcfb] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Among the services offered are
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Our multidisciplinary knowledge, combined with a single point of contact, ensures an efficient and cost-effective solution.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.number} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content Box */}
                <div className="relative bg-[#6bb82d] text-white p-8 flex-1 flex flex-col justify-between overflow-hidden">
                  
                  {/* Big Watermark Number */}
                  <span className="absolute -right-2 -top-2 text-7xl font-extrabold text-white/15 select-none pointer-events-none">
                    {service.number}
                  </span>

                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-6">
                      {service.title}
                    </h3>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition group/link underline underline-offset-4"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}