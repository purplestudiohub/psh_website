import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import OurWork from "@/components/home/OurWork";
import BrandsTestimonials from "@/components/home/BrandsTestimonials";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <Layout
      title="Purple Studio Hub — Social Media Management That Drives Real Growth"
      description="We help brands and personal brands build a powerful online presence with strategy-driven content, high-quality reels, and stunning Instagram feeds."
      path="/"
    >
      <Hero />
      <StatsBar />
      <WhyChooseUs />
      <WhoWeHelp />
      <OurWork />
      <BrandsTestimonials />
      <CtaBand />
    </Layout>
  );
}
