import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import OurWork from "@/components/home/OurWork";
import BrandsTestimonials from "@/components/home/BrandsTestimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhyChooseUs />
        <WhoWeHelp />
        <OurWork />
        <BrandsTestimonials />
      </main>
    </>
  );
}
