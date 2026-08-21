import Image from "next/image";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/home/CtaBand";
import { Eyebrow } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const VALUES = [
  {
    title: "Tailored Brilliance",
    blurb:
      "We craft bespoke strategies as unique as your brand, blending creativity and strategy to ensure you shine like the star you are.",
  },
  {
    title: "Authentic Allure",
    blurb:
      "From content to collaborations, we celebrate the real you. Authenticity is our secret sauce, and it's what makes your audience fall head over heels for your brand.",
  },
  {
    title: "Joyful Partnerships",
    blurb:
      "We're not just business partners; we're cheerleaders for your success. Together we'll navigate the digital world with laughter, joy, and a whole lot of high-fives.",
  },
  {
    title: "Data-Driven Delights",
    blurb:
      "Behind every great campaign is a mountain of data. We geek out on analytics to deliver results that make your heart skip a beat and your bottom line soar.",
  },
  {
    title: "Community Connection",
    blurb:
      "Your tribe is our tribe. We foster meaningful connections that turn followers into fans and fans into fiercely loyal brand advocates.",
  },
  {
    title: "Unwavering Support",
    blurb:
      "We've got your back, always. Whether it's a late-night brainstorm or a celebratory dance party, we're in your corner every step of the way.",
  },
];

const STATS = [
  ["120+", "Brands Managed"],
  ["5+", "Years Experience"],
  ["5000+", "Creatives Delivered"],
  ["Millions", "Organic Views"],
];

export default function About() {
  const storyRef = useReveal();
  const valuesRef = useReveal();
  const statsRef = useReveal();
  return (
    <Layout
      title="About Us — Purple Studio Hub"
      description="Crafting brand success stories from vision to victory with passion and perseverance."
    >
      <PageHero
        eyebrow="About Us"
        title="Crafting Brand Success Stories from Vision to Victory"
        subtitle="Our dedicated team guides brands through every stage of their journey, infusing each step with passion and unwavering perseverance to achieve unparalleled success."
      />

      {/* Story */}
      <section ref={storyRef} className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="reveal relative order-2 aspect-[4/3] overflow-hidden rounded-xl2 shadow-soft lg:order-1">
            <Image src="/assets/about-us-2.png" alt="The Purple Studio Hub team at work" fill priority className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Fostering brands through influencer marketing &amp; social media strategies
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Welcome to Purple Studio Hub — our exploration of effective social
              media marketing strategies and influencer collaborations. We
              specialize in crafting bespoke social media strategies, empowering
              influencers, and generating authentic user content.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We boost retail and online brands across Beauty, Fashion,
              Lifestyle, Skincare &amp; Fitness by enabling goal-oriented
              campaigns that enhance brand visibility and deliver effective reach
              to your target audience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Success isn't just about reaching your goals; it's about the pathway
              you take to get there. Our core philosophy emphasizes the quality of
              every step we take toward realizing your ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="bg-purple-soft/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>What We Value</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              The principles behind every brand we grow
            </h2>
          </div>
          <div className="reveal mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div key={v.title} className="rounded-xl2 bg-white p-7 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-white py-16">
        <div className="reveal mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="text-3xl font-extrabold text-purple sm:text-4xl">{n}</p>
              <p className="mt-1 text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
