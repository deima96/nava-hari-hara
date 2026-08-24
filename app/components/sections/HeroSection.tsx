import ImageWrapper from "@/app/components/ui/ImageWrapper";
import FadeIn from "@/app/components/ui/FadeIn";
import HeroTypo from "@/app/components/sections/HeroTypo";

export default function HeroSection() {
  return (
    <header id="overview" className="relative overflow-hidden bg-primary">
      <FadeIn delay={700} duration="slow" className="w-full">
        {/* Previous hero image: src="/hero.png" */}
        <ImageWrapper
          src="/hero-banner.png"
          alt="Aerial view of Nava Manchanballe premium plotted development with terracotta-roof homes, paver roads and landscaped greenery"
          hoverZoom
          priority
          className="w-full min-h-[620px] h-[100svh] max-h-[960px] lg:h-screen"
        >
          <div className="absolute inset-0 bg-[#832626]/20" aria-hidden />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(to right, rgb(131 38 38 / 0.55), rgb(131 38 38 / 0.28) 45%, transparent 72%)",
            }}
          />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(to top, rgb(131 38 38 / 0.4), transparent 55%, rgb(131 38 38 / 0.14))",
            }}
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-margin-edge pt-24 pb-12 sm:pt-28 sm:pb-16">
            <div className="w-full max-w-screen-2xl mx-auto flex justify-center">
              {/* Previous hero copy: LabelCaps + DisplayText + BodyLG taglines */}
              <div className="w-full max-w-[min(100%,20rem)] sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <HeroTypo />
              </div>
            </div>
          </div>
        </ImageWrapper>
      </FadeIn>
    </header>
  );
}
