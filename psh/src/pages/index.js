import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import OurWork from "@/components/home/OurWork";
import BrandsTestimonials from "@/components/home/BrandsTestimonials";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Purple Studio Hub — Social Media Management That Drives Real Growth
        </title>
        <meta
          name="description"
          content="We help brands and personal brands build a powerful online presence with strategy-driven content, high-quality reels, and stunning Instagram feeds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhyChooseUs />
        <WhoWeHelp />
        <OurWork />
        <BrandsTestimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
