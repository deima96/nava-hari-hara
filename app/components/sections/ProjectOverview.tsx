import { DisplayText, BodyLG, LabelCaps } from "@/app/components/ui/Typography";
import { StatCard } from "@/app/components/ui/Card";
import FadeIn from "@/app/components/ui/FadeIn";

const STATS = [
  {
    iconSrc: "/svg/map.svg",
    label: "TOTAL AREA",
    value: "10 ACRES",
  },
  {
    iconSrc: "/svg/Land-Plot--Streamline-Lucide.svg",
    label: "TOTAL PLOTS",
    value: "57 PLOTS",
  },
];

export default function ProjectOverview() {
  return (
    <section className="py-section-gap px-margin-edge bg-surface-container-low architectural-grid">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
        {/* Text column */}
        <div className="lg:col-span-5 mb-8 lg:mb-0">
          <FadeIn delay={100}>
            <LabelCaps as="h2" className="text-primary mb-8 lg:mb-12 block">
              01 — PROJECT OVERVIEW
            </LabelCaps>
          </FadeIn>
          <FadeIn delay={200}>
            <DisplayText
              as="h2"
              className="text-on-surface leading-tight mb-6 lg:mb-8"
              fontSize="clamp(2rem, 4vw + 0.75rem, 3.5rem)"
              fontWeight={300}
            >
              A spiritual address.
              <br /> A secure investment.
            </DisplayText>
          </FadeIn>
          <FadeIn delay={300}>
            <BodyLG className="text-on-surface-variant mb-6">
              Nava Harihara is a premium plotted development nestled near the
              Isha Foundation in North Bengaluru&apos;s emerging growth
              corridor. Designed for those who value peace without giving up
              future potential, it brings together nature, thoughtful planning
              and long-term appreciation.
            </BodyLG>
          </FadeIn>
          {/* <FadeIn delay={400}>
            <BodyLG className="text-on-surface-variant">
              E-Khata and CUDA approved, RERA compliant, with 100% clear title
              and bank loans available from nationalised banks.
            </BodyLG>
          </FadeIn> */}
        </div>

        {/* Stats grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={400 + i * 150} className="h-full">
              <StatCard
                iconSrc={stat.iconSrc}
                label={stat.label}
                value={stat.value}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
