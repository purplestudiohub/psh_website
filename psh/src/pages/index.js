import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
      </main>
    </>
  );
}
