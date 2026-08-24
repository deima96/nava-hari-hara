import Image from "next/image";
import FadeIn from "@/app/components/ui/FadeIn";

function TypoDivider() {
  return (
    <div
      className="flex justify-center py-[clamp(0.625rem,2vw,1rem)]"
      aria-hidden="true"
    >
      <span className="block h-[clamp(1.125rem,2.8vw,1.625rem)] w-px bg-white" />
    </div>
  );
}

export default function HeroTypo() {
  return (
    <div
      className="font-display text-center text-white"
      aria-label="Premium plotted development in Manchanballe, North Bengaluru — North Bengaluru's best-positioned plot. 135 premium villa plots across 6.25 acres."
    >
      <FadeIn delay={100} duration="slow">
        <Image
          src="/logo/LOGO-whites.svg"
          alt="Nava Manchanballe"
          width={200}
          height={49}
          priority
          className="mx-auto mb-[clamp(0.75rem,2vw,1.25rem)] h-[clamp(2rem,5vw,3rem)] w-auto"
        />
      </FadeIn>

      <FadeIn delay={200} duration="slow">
        <p className="text-[clamp(0.5rem,1.15vw,1rem)] font-normal uppercase leading-[1.35] tracking-[0.22em]">
          Premium plotted development
          <span className="px-[0.35em] opacity-90" aria-hidden="true">
            ·
          </span>
          Harihara, North Bengaluru
        </p>
      </FadeIn>

      <TypoDivider />

      <h1 className="leading-[0.92] tracking-[-0.01em]">
        <FadeIn delay={300} duration="slow">
          <span className="block text-[clamp(1.75rem,5.25vw,3.8rem)] font-light uppercase">
            Life
          </span>
        </FadeIn>
        <FadeIn delay={400} duration="slow">
          <span className="my-[0.04em] block text-[clamp(2.25rem,7vw,4rem)] font-bold uppercase leading-[0.88]">
            At
          </span>
        </FadeIn>
        <FadeIn delay={500} duration="slow">
          <span className="block text-[clamp(1.75rem,5.25vw,3.8rem)] font-light uppercase">
            Nature&apos;s
          </span>
        </FadeIn>
        <FadeIn delay={600} duration="slow">
          <span className="block text-[clamp(1.75rem,5.25vw,3.8rem)] font-light uppercase">
            Pace.
          </span>
        </FadeIn>
      </h1>

      <TypoDivider />

      <FadeIn delay={700} duration="slow">
        <p className="text-[clamp(0.5rem,1.15vw,1rem)] font-normal uppercase leading-[1.45] tracking-[0.16em]">
          <span className="block">
            157 premium villa plots across 10 acres.
          </span>
          <span className="mt-[0.35em] block">
            Future expansion planned across the remaining 10 acres.
          </span>
        </p>
      </FadeIn>
    </div>
  );
}
