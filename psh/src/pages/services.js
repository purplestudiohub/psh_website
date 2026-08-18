import Image from "next/image";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/home/CtaBand";
import { Eyebrow, Button, CheckIcon } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const SERVICES = [
  {
    id: "social-media",
    label: "Social Media Management",
    tagline: "Build a brand people remember, one post at a time.",
    image: "/assets/skincare2.png",
    features: [
      "Content Strategy — tailored content plans aligned with your brand's objectives and audience.",
      "Social Media Monitoring — track mentions and analyze sentiment in real time.",
      "Community Engagement — reply to comments, messages and UGC to build loyalty.",
      "Analytics & Insights — comprehensive performance metrics and data-driven decisions.",
      "Influencer Collaborations — partner with relevant creators to amplify reach.",
      "Ad Campaign Management — targeted campaigns with optimization and budget control.",
    ],
  },
  {
    id: "influencer",
    label: "Influencer Marketing",
    tagline: "Maximize ROI with effective influencer marketing.",
    image: "/assets/fashion.png",
    features: [
      "Influencer Discovery — identify the right creators for your niche and audience.",
      "Relationship Management — nurture long-term creator partnerships.",
      "Campaign Strategy — end-to-end campaign planning aligned to your goals.",
      "Content Collaboration — co-create content that feels authentic.",
      "Performance Tracking — measure impact and optimize continuously.",
      "Compliance & Disclosure — keep every collaboration transparent and compliant.",
    ],
  },
  {
    id: "ugc",
    label: "User-Generated Content",
    tagline: "Where stories come alive — content that feels real.",
    image: "/assets/ugc.png",
    features: [
      "Social Proof — real content from real people that builds trust.",
      "Authenticity — storytelling that resonates with your community.",
      "Engagement — scroll-stopping videos tailored to your brand.",
      "Cost Effective — high-impact content without heavy production costs.",
    ],
  },
  {
    id: "brand-shoots",
    label: "Brand Shoots",
    tagline: "Capture your brand essence in every frame.",
    image: "/assets/brand-skin.png",
    features: [
      "Customized Brand Storytelling — visuals crafted around your brand voice.",
      "Creative Direction Expertise — art direction that elevates every shoot.",
      "Seamless Project Management — from concept to final delivery, handled.",
      "Photo & Video Shoots — stills and motion for every channel.",
    ],
  },
];

const PROCESS = [
  ["Goal Setting", "Define clear, measurable goals — awareness, leads or engagement."],
  ["Audience Analysis", "Understand your audience's demographics, interests and behavior."],
  ["Content Strategy", "Plan diverse content types that align with your goals and resonate."],
  ["Platform Selection", "Choose the right platforms and optimize profiles for discovery."],
  ["Monitor & Optimize", "Track performance metrics and refine strategy to improve results."],
];

function ServiceBlock({ service, flip, priority }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      <div
        id={service.id}
        className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className={`relative aspect-[4/3] overflow-hidden rounded-xl2 shadow-soft ${flip ? "lg:order-2" : ""}`}>
          <Image src={service.image} alt={service.label} fill priority={priority} className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <Eyebrow>{service.label}</Eyebrow>
          <h3 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            {service.tagline}
          </h3>
          <ul className="mt-6 space-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const processRef = useReveal();
  return (
    <Layout
      title="Services — Purple Studio Hub"
      description="Social media management, influencer marketing, user-generated content and brand shoots — everything your brand needs to grow."
    >
      <PageHero
        eyebrow="Our Services"
        title="Everything your brand needs to grow online"
        subtitle="From strategy-driven social media management to influencer campaigns, authentic UGC and standout brand shoots — we handle it all."
      />

      <section className="space-y-20 bg-white py-20 sm:space-y-28 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {SERVICES.map((s, i) => (
              <ServiceBlock key={s.id} service={s} flip={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Your roadmap to social media success
            </h2>
          </div>
          <div className="reveal mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map(([title, blurb], i) => (
              <div key={title} className="rounded-xl2 border border-white/10 bg-ink-2 p-6">
                <span className="text-2xl font-extrabold text-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-light">{blurb}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Button href="/pricing" variant="primary">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
