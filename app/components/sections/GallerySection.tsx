"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LabelCaps, HeadlineMD } from "@/app/components/ui/Typography";
import ImageWrapper from "@/app/components/ui/ImageWrapper";
import FadeIn from "@/app/components/ui/FadeIn";
import { useLenis } from "lenis/react";

type GalleryMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

const GALLERY_NEW = "/gallery-new";

const GALLERY_IMAGES = {
  main: {
    src: `${GALLERY_NEW}/one.JPG`,
    alt: "Nava Manchanballe plotted development overview",
  },

  secondary: [
    {
      src: `${GALLERY_NEW}/two.JPG`,
      alt: "Community roads and landscaping at Nava Manchanballe",
    },
    {
      src: `${GALLERY_NEW}/three.JPG`,
      alt: "Premium villa plots and streetscape",
    },
  ],

  fullCollection: [
    {
      type: "image",
      src: `${GALLERY_NEW}/one.JPG`,
      alt: "Nava Manchanballe plotted development overview",
    },
    {
      type: "image",
      src: `${GALLERY_NEW}/two.JPG`,
      alt: "Community roads and landscaping at Nava Manchanballe",
    },
    {
      type: "image",
      src: `${GALLERY_NEW}/three.JPG`,
      alt: "Premium villa plots and streetscape",
    },
    {
      type: "image",
      src: `${GALLERY_NEW}/four.JPG`,
      alt: "Development infrastructure and layout",
    },
    {
      type: "image",
      src: `${GALLERY_NEW}/five.JPG`,
      alt: "Landscaped avenues within the community",
    },
    {
      type: "image",
      src: `${GALLERY_NEW}/six.JPG`,
      alt: "Plot frontage and neighbourhood planning",
    },
    {
      type: "image",
      src: `${GALLERY_NEW}/seven.JPG`,
      alt: "Aerial perspective of Nava Manchanballe",
    },
  ] as GalleryMedia[],
};

type GallerySectionProps = {
  openGallery: boolean;
  setOpenGallery: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMedia: GalleryMedia | null;
  setSelectedMedia: React.Dispatch<React.SetStateAction<GalleryMedia | null>>;
};

export default function GallerySection({
  openGallery,
  setOpenGallery,
  selectedMedia,
  setSelectedMedia,
}: GallerySectionProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (openGallery || selectedMedia) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.start();
    };
  }, [openGallery, selectedMedia, lenis]);

  return (
    <>
      <section className="py-section-gap px-margin-edge bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <FadeIn delay={100}>
            <div className="flex justify-between items-baseline mb-10 lg:mb-16">
              <LabelCaps as="h2" className="text-primary block">
                06 — GALLERY
              </LabelCaps>

              <button
                onClick={() => setOpenGallery(true)}
                className="font-label text-label-caps tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                VIEW FULL COLLECTION
              </button>
            </div>
          </FadeIn>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter h-auto lg:h-[800px]">
            {/* Main image */}
            <FadeIn
              delay={200}
              duration="slow"
              className="lg:col-span-8 h-[250px] sm:h-[400px] lg:h-full"
            >
              <div
                className="relative h-full min-h-[250px] cursor-pointer sm:min-h-[400px] lg:min-h-0"
                onClick={() =>
                  setSelectedMedia({
                    type: "image",
                    src: GALLERY_IMAGES.main.src,
                    alt: GALLERY_IMAGES.main.alt,
                  })
                }
              >
                <ImageWrapper
                  src={GALLERY_IMAGES.main.src}
                  alt={GALLERY_IMAGES.main.alt}
                  hoverZoom
                  className="w-full h-full"
                />
              </div>
            </FadeIn>

            {/* Side images */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-gutter h-[200px] sm:h-[250px] lg:h-full lg:min-h-0">
              {GALLERY_IMAGES.secondary.map((img, i) => (
                <FadeIn
                  key={img.src}
                  delay={350 + i * 150}
                  direction="right"
                  className="h-full lg:min-h-0"
                >
                  <div
                    className="relative h-full min-h-[100px] sm:min-h-[125px] lg:min-h-0 cursor-pointer overflow-hidden"
                    onClick={() =>
                      setSelectedMedia({
                        type: "image",
                        src: img.src,
                        alt: img.alt,
                      })
                    }
                  >
                    <ImageWrapper
                      src={img.src}
                      alt={img.alt}
                      hoverZoom
                      className="w-full h-full"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery Modal */}
      {openGallery && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[1000] bg-background/95 backdrop-blur-md overflow-y-auto overscroll-contain mt-10 lg:mt-16"
          onClick={() => setOpenGallery(false)}
        >
          <div
            className="min-h-screen px-6 py-10 lg:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <LabelCaps className="text-primary mb-3 block">
                  FULL COLLECTION
                </LabelCaps>

                <HeadlineMD className="text-on-surface">
                  Architecture. Spaces. Details.
                </HeadlineMD>
              </div>

              <button
                onClick={() => setOpenGallery(false)}
                className="text-on-surface-variant hover:text-primary transition-colors text-sm tracking-[0.15em] uppercase"
              >
                Close
              </button>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_IMAGES.fullCollection.map((item) => (
                <div
                  key={item.src}
                  onClick={() => setSelectedMedia(item)}
                  className="group relative h-[300px] w-full cursor-pointer overflow-hidden border border-primary/10 bg-surface"
                >
                  <ImageWrapper
                    src={item.src}
                    alt={item.alt}
                    hoverZoom
                    className="h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[10002] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white uppercase tracking-[0.2em] text-xs hover:text-primary transition-colors z-10"
          >
            Close
          </button>

          <div
            className="max-w-[1400px] w-full max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <video
                controls
                autoPlay
                className="max-w-full max-h-[92vh] object-contain"
              >
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full max-w-[1400px] h-[92vh]">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
