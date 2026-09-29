import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Consultation from "@/components/Consultation";
import HomeStats from "@/components/HomeStats";
import HomeInnovation from "@/components/HomeInnovation";
import HomeExpertise from "@/components/HomeExpertise";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Consultation />
      <HomeStats />
      <HomeInnovation />
      <HomeExpertise />
      <HomeTestimonials />
      <HomeContact />
      <Footer />
    </main>
  );
}