"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { HeadlineXL, BodyMD, LabelCaps } from "@/app/components/ui/Typography";
import Button from "@/app/components/ui/Button";
import FadeIn from "@/app/components/ui/FadeIn";

/* Dynamic import with ssr:false — Leaflet accesses `window` at import time */
const LocationMap = dynamic(() => import("@/app/components/ui/LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-surface-variant">
      <span className="font-label text-label-caps text-on-surface-variant/50 tracking-widest animate-pulse">
        LOADING MAP…
      </span>
    </div>
  ),
});

/* ── Project location (Manchanballe) ── */
const PROJECT_LOCATION: [number, number] = [13.4527675, 77.760294];

/** Google Maps place pin — location only, no directions */
const SITE_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Nava+Manchanbele/@13.4527675,77.760294,17z/data=!4m6!3m5!1s0x3bb1f1b030ad8b87:0xdfe684b096aba3a!8m2!3d13.4528005!4d77.7603371!16s%2Fg%2F11z5q154p7?entry=ttu";

/** Approximate drive time from project (mixed local / highway speeds). */
function formatDriveTime(distanceKm: number): string {
  const speedKmh = distanceKm <= 8 ? 40 : distanceKm <= 20 ? 45 : 55;
  const minutes = Math.max(1, Math.round((distanceKm / speedKmh) * 60));
  return `${minutes} min`;
}

/* ── Connectivity data with real coordinates ── */
const CONNECTIVITY = [
  {
    num: "01",
    title: "KEMPEGOWDA INTERNATIONAL AIRPORT",
    distanceKm: 39,
    coords: [13.1979, 77.7063] as [number, number],
    zoom: 11,
  },
  {
    num: "02",
    title: "NH44 — BENGALURU-HYDERABAD HIGHWAY",
    distanceKm: 3,
    coords: [13.445, 77.73] as [number, number],
    zoom: 14,
  },
  {
    num: "03",
    title: "STRR — SATELLITE TOWN RING ROAD",
    distanceKm: 25,
    coords: [13.28, 77.62] as [number, number],
    zoom: 11,
  },
  {
    num: "04",
    title: "ITIR — TECH & AEROSPACE ZONE",
    distanceKm: 30,
    coords: [13.249, 77.708] as [number, number],
    zoom: 12,
  },
  {
    num: "05",
    title: "SADHGURU SANNIDHI — ISHA CORRIDOR",
    distanceKm: 12.5,
    coords: [13.35, 77.68] as [number, number],
    zoom: 12,
  },
  {
    num: "06",
    title: "CHIKKABALLAPUR TOWN",
    distanceKm: 5,
    coords: [13.4355, 77.7279] as [number, number],
    zoom: 14,
  },
  {
    num: "07",
    title: "CHIKKABALLAPUR RAILWAY STATION",
    distanceKm: 5,
    coords: [13.434, 77.726] as [number, number],
    zoom: 15,
  },
  {
    num: "08",
    title: "SKANDAGIRI TREK POINT",
    distanceKm: 10,
    coords: [13.4664, 77.6896] as [number, number],
    zoom: 13,
  },
];

export default function LocationSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* Determine current map view */
  const mapCenter =
    activeIndex !== null ? CONNECTIVITY[activeIndex].coords : PROJECT_LOCATION;

  const mapZoom = activeIndex !== null ? CONNECTIVITY[activeIndex].zoom : 12;

  /* Build markers array — always show project location, plus active destination */
  const markers = useMemo(() => {
    const m = [
      {
        position: PROJECT_LOCATION,
        label: "Nava Harihara",
        isProject: true,
      },
    ];
    if (activeIndex !== null) {
      m.push({
        position: CONNECTIVITY[activeIndex].coords,
        label: CONNECTIVITY[activeIndex].title,
        isProject: false,
      });
    }
    return m;
  }, [activeIndex]);

  return (
    <section
      id="location"
      className="py-section-gap px-margin-edge bg-background"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-10 lg:mb-20">
          <div className="lg:col-span-6">
            <FadeIn delay={100}>
              <LabelCaps as="h2" className="text-primary mb-6 lg:mb-8 block">
                02 — LOCATION
              </LabelCaps>
            </FadeIn>
            <FadeIn delay={200}>
              <HeadlineXL
                className="text-on-surface"
                fontSize="clamp(2rem, 4vw + 0.75rem, 3.5rem)"
                fontWeight={300}
              >
                Close to everything
                <br className="hidden lg:block" /> that matters.{" "}
              </HeadlineXL>
            </FadeIn>
            <FadeIn delay={300}>
              <BodyMD className="text-on-surface-variant max-w-md">
                Harihara sits beside one of North Bengaluru&apos;s fastest
                evolving spiritual and infrastructure corridors, balancing
                everyday connectivity with a slower way of living.
              </BodyMD>
            </FadeIn>
          </div>
          {/* <div className="lg:col-span-6 flex items-end mt-4 lg:mt-0"></div> */}
        </div>

        {/* Map + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Interactive Map */}
          <FadeIn
            delay={400}
            className="lg:col-span-7 overflow-hidden border border-primary/10 h-[300px] sm:h-[400px] lg:h-[600px] bg-surface-variant"
          >
            <LocationMap center={mapCenter} zoom={mapZoom} markers={markers} />
          </FadeIn>

          {/* Connectivity details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 lg:gap-0">
            <div className="space-y-0 max-h-[500px] lg:max-h-none overflow-y-auto lg:overflow-visible">
              {CONNECTIVITY.map((item, i) => (
                <FadeIn key={item.num} delay={400 + i * 100}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    className={`w-full flex items-start gap-3 lg:gap-5 text-left py-3 lg:py-4 px-3 lg:px-4 rounded-lg transition-all duration-200 cursor-pointer group ${
                      activeIndex === i
                        ? "bg-primary/8 ring-1 ring-primary/20"
                        : "hover:bg-primary/5"
                    }`}
                  >
                    <span
                      className={`font-display text-headline-md shrink-0 transition-colors ${
                        activeIndex === i
                          ? "text-primary"
                          : "text-primary/30 group-hover:text-primary"
                      }`}
                    >
                      {item.num}
                    </span>
                    <div className="min-w-0">
                      <LabelCaps
                        as="h4"
                        className={`block font-bold transition-colors ${
                          activeIndex === i ? "text-primary" : "text-on-surface"
                        }`}
                      >
                        {item.title}
                      </LabelCaps>
                      <BodyMD className="text-on-surface-variant">
                        {formatDriveTime(item.distanceKm)}
                      </BodyMD>
                    </div>
                  </button>
                  {i < CONNECTIVITY.length - 1 && (
                    <div className="w-full h-px bg-on-surface/10 mx-3 lg:mx-4" />
                  )}
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={600} className="mt-14">
              <Button
                variant="outline"
                className="w-full text-center py-4 mt-6"
                href={SITE_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site on Map →
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
