import { LabelCaps } from "@/app/components/ui/Typography";
import { AmenityCard } from "@/app/components/ui/Card";
import ImageWrapper from "@/app/components/ui/ImageWrapper";
import FadeIn from "@/app/components/ui/FadeIn";

const AMENITIES = [
  {
    icon: "add_road",
    title: "Wide RCC Internal Roads",
    description:
      "Wide 30-foot RCC roads ensure smooth access, lasting durability and an organised neighbourhood from day one.",
  },
  {
    icon: "construction",
    title: "Underground Utilities",
    description:
      "Underground electrical cabling and drainage networks create a clean, clutter-free environment while preparing the community for the future.",
  },
  // {
  //   icon: "videocam",
  //   title: "CCTV Surveillance",
  //   description:
  //     "Strategically placed CCTV cameras across the community for enhanced security and round-the-clock monitoring.",
  // },
  // {
  //   icon: "directions_walk",
  //   title: "Landscaped Footpaths",
  //   description:
  //     "Well-planned pedestrian pathways complemented by curated plantations, creating a greener and more walkable environment.",
  // },
  // {
  //   icon: "potted_plant",
  //   title: "Individual Planter Box",
  //   description:
  //     "Dedicated planter boxes provided for every plot, encouraging personalized landscaping and a vibrant streetscape.",
  // },
  // {
  //   icon: "electrical_services",
  //   title: "Underground Power",
  //   description:
  //     "Underground electricity lines and organised feeder boxes throughout. No overhead wires. No clutter. A clean skyline — because the details matter as much as the land.",
  // },

  {
    icon: "water",
    title: "Water Infrastructure",
    description:
      "Overhead water tank, a 50,000-litre underground sump and reliable internal distribution ensure uninterrupted water supply every day.",
  },
  {
    icon: "eco",
    title: "Sustainable Living",
    description:
      "Rainwater harvesting and a sewage treatment plant help conserve resources while supporting a healthier and environmentally responsible community.",
  },
  {
    icon: "park",
    title: "Security & Green Spaces",
    description:
      "Solar-powered CCTV surveillance, landscaped gardens, avenue plantations and dedicated parks create a secure and refreshing place to live.",
  },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="py-section-gap px-margin-edge bg-surface-container-low"
    >
      <div className="max-w-screen-2xl mx-auto">
        <FadeIn delay={100}>
          <LabelCaps
            as="h2"
            className="text-primary mb-10 lg:mb-16 text-left block"
          >
            04 — THE AMENITIES
          </LabelCaps>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <FadeIn
            delay={200}
            direction="left"
            duration="slow"
            className="lg:col-span-7"
          >
            <div className="overflow-hidden border border-primary/5">
              <ImageWrapper
                src="/nava.png"
                alt="Luxury clubhouse spa interior with arched windows, natural light, limestone flooring and minimalist wooden furniture"
                width={1024}
                height={1536}
                fit="contain"
                className="w-full"
              />
            </div>
          </FadeIn>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 lg:gap-4 lg:-ml-16 relative z-10 mt-6 lg:mt-0">
            {AMENITIES.map((amenity, i) => {
              const isLast = i === AMENITIES.length - 1;
              return (
                <FadeIn
                  key={amenity.title}
                  delay={300 + i * 100}
                  direction="right"
                  className={isLast ? "col-span-2" : undefined}
                >
                  <AmenityCard
                    icon={amenity.icon}
                    title={amenity.title}
                    description={amenity.description}
                  />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
