"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import Button from "@/app/components/ui/Button";
import Icon from "@/app/components/ui/Icon";

const LOGO_DARK = "/logo/LOGO-1.svg";

type NavbarProps = {
  onNavClick?: () => void;
};

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  // { label: "Master Plan", href: "#master-plan" },
  { label: "Plots", href: "#plots" },
  { label: "Amenities", href: "#amenities" },
];

const SCROLL_RANGE = 80;

function mixColor(from: string, to: string, progress: number) {
  return `color-mix(in srgb, ${from} ${(1 - progress) * 100}%, ${to} ${progress * 100}%)`;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const updateProgress = (scroll: number) => {
      setScrollProgress(Math.min(scroll / SCROLL_RANGE, 1));
    };

    updateProgress(lenis.scroll);

    const onScroll = ({ scroll }: { scroll: number }) => {
      updateProgress(scroll);
    };

    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [lenis]);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", drawerOpen);
    if (!lenis) return;
    if (drawerOpen) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [drawerOpen, lenis]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const linkColor = mixColor("#ffffff", "#5F845E", scrollProgress);
  const iconColor = mixColor("#ffffff", "#5F845E", scrollProgress);

  const navStyle = {
    backgroundColor: `rgba(254, 250, 250, ${scrollProgress * 0.95})`,
    backdropFilter:
      scrollProgress > 0.02 ? `blur(${scrollProgress * 12}px)` : "none",
    borderBottomWidth: scrollProgress > 0.01 ? "1px" : "0",
    borderBottomColor: `rgba(131, 38, 38, ${scrollProgress * 0.12})`,
    boxShadow:
      scrollProgress > 0.5
        ? `0 1px 3px rgba(131, 38, 38, ${(scrollProgress - 0.5) * 0.15})`
        : "none",
  } as const;

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[10000] transition-[box-shadow] duration-150"
        style={navStyle}
      >
        <div className="flex justify-between items-center w-full px-margin-edge py-unit max-w-screen-2xl mx-auto">
          <div className="hidden md:flex items-center gap-gutter">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-label text-label-caps tracking-[0.15em] uppercase transition-colors duration-150 hover:opacity-80"
                style={{ color: linkColor }}
                onClick={onNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex font-label text-label-caps tracking-widest px-6 py-3 lg:px-8 lg:py-4 cursor-pointer transition-colors duration-150 hover:opacity-80"
              style={{
                backgroundColor: `rgba(95, 132, 94, ${scrollProgress})`,
                color: "#ffffff",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: mixColor(
                  "rgba(255,255,255,0.85)",
                  "#5F845E",
                  scrollProgress,
                ),
              }}
            >
              Book Site Visit
            </a>

            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 transition-colors duration-150 cursor-pointer hover:opacity-80"
              style={{ color: iconColor }}
              aria-label="Open menu"
            >
              <Icon name="menu" size="md" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[10001] transition-opacity duration-300 md:hidden ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
          onClick={closeDrawer}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[min(85vw,360px)] bg-surface shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-on-surface/10">
            <Image
              src={LOGO_DARK}
              alt="Nava Manchanballe"
              width={164}
              height={40}
              className="h-8 w-auto"
            />
            <button
              onClick={closeDrawer}
              className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <Icon name="close" size="md" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-6 py-8 gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  closeDrawer();
                  onNavClick?.();
                }}
                className="flex items-center gap-4 py-4 px-4 text-on-surface-variant font-label text-label-caps tracking-[0.15em] uppercase hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-6 pb-8">
            <Button
              className="w-full text-center"
              href="#contact"
              onClick={closeDrawer}
            >
              Book Site Visit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
