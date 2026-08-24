import { LabelCaps } from "@/app/components/ui/Typography";
import FadeIn from "@/app/components/ui/FadeIn";
import ImageWrapper from "@/app/components/ui/ImageWrapper";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      className="py-section-gap px-margin-edge bg-background architectural-grid"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-left">
        <FadeIn delay={100}>
          <LabelCaps as="h2" className="text-primary mb-6 lg:mb-8 block">
            03 — Master Plan
          </LabelCaps>
        </FadeIn>

        <FadeIn delay={300} duration="slow" className="w-full">
          <div className="relative w-full bg-surface p-4 sm:p-8 lg:p-12">
            {/* Blueprint label */}
            {/* <div className="absolute top-3 left-3 z-10 sm:top-6 sm:left-6 lg:top-8 lg:left-8 font-label text-[8px] sm:text-[10px] text-primary/40 uppercase tracking-widest">
              Blueprint Rev 2.0 / 2024
            </div> */}

            {/* Blueprint image */}
            <div className="w-full border border-dashed border-primary/20">
              {/* Previous master plan: src="/map.jpg" */}
              <ImageWrapper
                src="/masterplanimg.png"
                alt="Manchanballe Phase 1 master plan with numbered plots, 30/40/50 foot roads, park and landscaped avenues"
                width={2722}
                height={2828}
                fit="contain"
                className="w-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
