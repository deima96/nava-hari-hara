"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import ProjectOverview from "@/app/components/sections/ProjectOverview";
import LocationSection from "@/app/components/sections/LocationSection";
import AmenitiesSection from "@/app/components/sections/AmenitiesSection";
import MasterPlanSection from "@/app/components/sections/MasterPlanSection";
import GallerySection from "@/app/components/sections/GallerySection";
import InquirySection from "@/app/components/sections/InquirySection";
import PlotSpecifications from "@/app/components/sections/PlotSpecifications";
import FloatingContactButtons from "@/app/components/ui/FloatingContactButtons";
import BrochureModal from "./components/ui/BrochureModal";

type GalleryMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpen(false);
  };

  return (
    <>
      <BrochureModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />
      <Navbar onNavClick={() => setOpenGallery(false)} />
      <main>
        <HeroSection />
        <ProjectOverview />
        <LocationSection />
        <MasterPlanSection />
        <AmenitiesSection />
        <PlotSpecifications />
        <GallerySection
          openGallery={openGallery}
          setOpenGallery={setOpenGallery}
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
        />
        <InquirySection />
        <FloatingContactButtons />
      </main>
      <Footer />
    </>
  );
}
