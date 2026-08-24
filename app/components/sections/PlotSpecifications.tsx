"use client";

import { useState } from "react";
import Image from "next/image";
import { HeadlineXL, BodyLG, LabelCaps } from "@/app/components/ui/Typography";
import FadeIn from "@/app/components/ui/FadeIn";
import BrochureModal from "../ui/BrochureModal";

export default function PlotSpecifications() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = "/Nava-Manchanballe.pdf";
    link.download = "Nava-Manchanballe.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setOpen(false);
  };

  const specifications = [
    { label: "Plot Specifications", value: "30×40 ft, 30×50 ft & 30×60 ft" },
    { label: "Total Plots", value: "57 Units" },
    { label: "Phase 1 Release", value: "Now Open" },
    { label: "Launch Price", value: "₹4,500 per sq ft" },
    { label: "E-Khata", value: "Approved" },
    { label: "CUDA", value: "Approved" },
    { label: "Title", value: "100% Clear" },
    {
      label: "Bank Loans",
      value: "Available from nationalised banks",
    },
  ];

  return (
    <section
      id="plots"
      className="py-section-gap px-margin-edge bg-background architectural-grid"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-left">
        <FadeIn delay={100}>
          <LabelCaps as="h2" className="text-primary mb-6 lg:mb-8 block">
            05 — The Plots
          </LabelCaps>
        </FadeIn>

        <FadeIn delay={200}>
          <HeadlineXL
            className="text-on-surface mb-10 text-left max-w-2xl"
            fontSize="clamp(2rem, 4vw + 0.75rem, 3.5rem)"
            fontWeight={300}
          >
            Choose your plot. <br className="hidden sm:block" />
            Build at your pace.
          </HeadlineXL>
        </FadeIn>

        <FadeIn delay={300}>
          <BodyLG className="text-on-surface-variant text-left max-w-2xl mb-10 lg:mb-20">
            57 premium villa plots in three thoughtfully planned sizes: 30×40
            ft, 30×50 ft and 30×60 ft. Whether you build immediately or invest
            for the future, every plot offers flexibility, clear ownership and
            long-term value.
            {/* <br />
            <br />
            Build on it. Hold it. Pass it on.
            <br />
            Every plot is yours to decide. */}
          </BodyLG>
        </FadeIn>

        <FadeIn delay={400} duration="slow" className="w-full">
          <div className="relative w-full border border-primary/10 bg-surface p-4 sm:p-8 lg:p-12">
            {/* Blueprint image */}
            <div className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] overflow-hidden border border-dashed border-primary/20">
              {/* Previous plots background: src="/map.jpg" */}
              <Image
                src="/gallery-new/five.JPG"
                alt="Aerial view of plotted land development with grid layout and surrounding farmland"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-surface/70" aria-hidden />

              {/* Overlay */}
              <div className="absolute inset-0 z-10 flex items-start justify-center overflow-y-auto p-4 md:items-center">
                <div className="w-full max-w-3xl bg-surface/88 backdrop-blur-md border border-primary/30 px-4 py-6 sm:px-10 sm:py-10 lg:px-14 lg:py-12 my-6 md:my-0">
                  <LabelCaps className="text-primary mb-8 block text-center">
                    Plot Specifications
                  </LabelCaps>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                    {specifications.map((item, index) => (
                      <FadeIn key={item.label} delay={500 + index * 75}>
                        <div className="border-b border-primary/10 pb-3">
                          <LabelCaps className="text-on-surface-variant mb-2 block text-[10px]">
                            {item.label}
                          </LabelCaps>

                          <p className="text-on-surface text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                            {item.value}
                          </p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>

                  <FadeIn delay={700} className="flex justify-center mt-10">
                    <button
                      onClick={() => setOpen(true)}
                      className="font-label text-label-caps text-primary hover:tracking-widest transition-all cursor-pointer"
                    >
                      DOWNLOAD BROCHURE — PDF
                    </button>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      {open && (
        <BrochureModal
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </section>
  );
}
