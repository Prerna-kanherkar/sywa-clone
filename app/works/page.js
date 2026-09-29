import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export default function WorksPage() {
  const projects = [
    {
      title: "Sofitel Hamra",
      description: "The resort features 300 keys with views and six restaurants offering global cuisine.",
      image: "/assets/images/services/1.png",
    },
    {
      title: "Sol Cresecnt",
      description: "The project is a luxury residential resort with waterfront villas and service apartments.",
      image: "/assets/images/services/3.png",
    },
    {
      title: "Granada1 Bloom Living",
      description: "Bloom Living Masterplan offers a vibrant, self-sufficient community with Mediterranean Spanish charm.",
      image: "/assets/images/services/2.png",
    },
  ];

  const reviews = [
    {
      name: "Andrew D. Bricker",
      avatar: "/assets/images/testimonials/testi-author1.jpg",
      text: "The SYWA team did a very good job in pulling together the data I needed when I couldn't find the time to do it myself. It has been a pleasure working with the team, and I am pretty sure I will ask SYWA for help again in the future.",
    },
    {
      name: "Simon Joseph",
      avatar: "/assets/images/testimonials/testi-author3.jpg",
      text: "With SYWA we have found a team that can provide services excellently. It's a great team with perfect communication skills that made a difference in our business.",
    },
    {
      name: "Leno Thomas Tom",
      avatar: "/assets/images/testimonials/testi-author4.jpg",
      text: "SYWA has an excellent engineering group. They put together uniform, simplistic solutions for our office.",
    },
    {
      name: "Thomas george",
      avatar: "/assets/images/testimonials/testi-author4.jpg",
      text: "SYWA was referred to us by one of our employees because they had been so.",
    },
    {
      name: "Davis Philips",
      avatar: "/assets/images/testimonials/testi-author4.jpg",
      text: "incredibly professional. They have proven to be extremely trustworthy, valued partners.",
    },
    {
      name: "Rachel Davidson",
      avatar: "/assets/images/testimonials/testi-author4.jpg",
      text: "Good project management and very good services provided.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Banner */}
      <PageBanner
        title="Our Works"
        subtitle="The key to success cannot be discovered. It came about as a result of planning, putting in a lot of effort, and failing to move forward."
        description="You may concentrate on your business while we take care of the Engineering, MEP & Architectural solutions. Check out what we can do for you right now!"
        buttonText="Get A Free Consultation"
        buttonLink="/contact"
      />

      {/* OUR PROJECTS SECTION */}
      <section className="py-20 lg:py-28 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-gray-500 block mb-2">
              Projects and Our Performances
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Projects
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              We are really happy to be a part of all of the projects because they are the foundation of our success. Although we have a long list of projects and we face many kinds of problems, we take great delight in keeping our promises. Each project is a motivational adventure filled with SYWA harmony, satisfaction from accomplishments, and learning. It also serves as a gateway to new networks and increased business chances.
            </p>
          </div>

          {/* 3 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-gray-900 h-[380px]"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-70 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  <span className="text-xs uppercase tracking-widest text-[#6bb82d] font-bold block mb-1">
                    Service
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6bb82d] transition">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR REVIEWS SECTION */}
      <section className="py-20 lg:py-28 bg-[#fbfcfb] relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Header with big "Says" watermark */}
          <div className="relative mb-16">
            <span className="absolute -top-12 left-0 text-7xl sm:text-9xl font-extrabold text-gray-200/50 select-none pointer-events-none -z-10">
              Says
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#6bb82d] block mb-2">
              What Our Clients Says
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Reviews
            </h2>
          </div>

          {/* List of Reviews */}
          <div className="space-y-6">
            {reviews.map((rev, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-green-100">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 italic">
                    "{rev.text}"
                  </p>
                  <h4 className="text-sm font-bold text-gray-900">
                    {rev.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FULL-WIDTH TEAM PHOTO BANNER (Matching our-works.png) */}
      <section className="relative h-[320px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/images/testimonials/testimonial-four.jpg"
          alt="Two women collaborating"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </section>

      <Footer />
    </main>
  );
}
