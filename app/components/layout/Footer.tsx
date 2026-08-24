import Image from "next/image";
import { LabelCaps, BodyMD } from "@/app/components/ui/Typography";
import FadeIn from "@/app/components/ui/FadeIn";

const LOGO_DARK = "/logo/LOGO-1.svg";

const EXPLORE_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Plots", href: "#plots" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_ICONS = [
  { icon: "public", href: "/" },
  { icon: "photo_camera", href: "/" },
  { icon: "mail", href: "/" },
];

export default function Footer() {
  return (
    <footer className="w-full py-section-gap px-margin-edge bg-surface-container-low border-t border-on-surface/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-gutter max-w-screen-2xl mx-auto">
        {/* Brand */}
        <FadeIn
          delay={100}
          className="sm:col-span-2 lg:col-span-4 mb-10 lg:mb-0"
        >
          <a
            href="/"
            className="inline-block mb-6 lg:mb-8"
            aria-label="Nava Manchanballe"
          >
            <Image
              src={LOGO_DARK}
              alt="Nava Manchanballe"
              width={164}
              height={40}
              className="h-9 w-auto sm:h-10"
            />
          </a>
          <BodyMD className="text-on-surface-variant max-w-xs">
            Crafting legendary landscapes and architectural sanctuaries for the
            discerning few.
          </BodyMD>
        </FadeIn>

        {/* Explore */}
        <FadeIn delay={200} className="lg:col-span-2">
          <LabelCaps as="h4" className="text-primary mb-6 lg:mb-8 block">
            EXPLORE
          </LabelCaps>
          <ul className="space-y-3 lg:space-y-4">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-label text-label-caps tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Contact */}
        <FadeIn
          delay={300}
          className="sm:col-span-2 lg:col-span-4 mt-6 lg:mt-0"
        >
          <LabelCaps as="h4" className="text-primary mb-6 lg:mb-8 block">
            CONTACT
          </LabelCaps>
          <BodyMD className="text-on-surface-variant mb-2">
            702, 5th D Cross Rd, Balachandra Layout, Chelekare, Kalyan Nagar,
            Bengaluru, Karnataka 560113
          </BodyMD>
          <BodyMD className="text-on-surface-variant mb-6 lg:mb-8">
            +91 7330740709 | nava@xsquared.in
          </BodyMD>
          {/* <div className="flex space-x-6">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div> */}
        </FadeIn>

        {/* Bottom bar */}
        <FadeIn
          delay={400}
          className="col-span-full pt-section-gap border-t border-on-surface/5 mt-10 lg:mt-16 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8"
        >
          <p className="font-label text-[10px] text-on-surface-variant/60 tracking-widest uppercase text-center md:text-left">
            © 2026 Nava Harihara. All rights reserved. RERA No.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
