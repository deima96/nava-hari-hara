import { HeadlineXL, BodyLG, LabelCaps } from "@/app/components/ui/Typography";
import Button from "@/app/components/ui/Button";
import FloatingInput from "@/app/components/ui/FloatingInput";
import FadeIn from "@/app/components/ui/FadeIn";

export default function InquirySection() {
  return (
    <section id="contact" className="py-section-gap px-margin-edge bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={100}>
          <LabelCaps as="h2" className="text-primary mb-6 lg:mb-8 block">
            Book Your Visit
          </LabelCaps>
        </FadeIn>
        <FadeIn delay={200}>
          <HeadlineXL
            className="text-on-surface mb-8 lg:mb-12"
            fontSize="clamp(2rem, 4vw + 0.75rem, 3.5rem)"
          >
            Come experience <br />
            life at nature's pace.
          </HeadlineXL>
        </FadeIn>
        <FadeIn delay={300}>
          <BodyLG className="text-on-surface-variant mb-10 lg:mb-16">
            Walk the land, explore the neighbourhood and discover why Harihara
            offers more than a plot. Book a site visit and experience the
            location before making your decision.
          </BodyLG>
        </FadeIn>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-8 lg:gap-y-12 text-left">
          <FadeIn delay={400}>
            <FloatingInput
              label="FULL NAME"
              type="text"
              name="name"
              id="name"
            />
          </FadeIn>
          <FadeIn delay={500}>
            <FloatingInput
              label="CONTACT NUMBER"
              type="tel"
              name="phone"
              id="phone"
            />
          </FadeIn>
          <FadeIn delay={600} className="md:col-span-2">
            <FloatingInput
              label="EMAIL ADDRESS"
              type="email"
              name="email"
              id="email"
              colSpan="full"
            />
          </FadeIn>

          <FadeIn delay={700} className="md:col-span-2">
            <div className="flex justify-center pt-4 lg:pt-8">
              <Button
                type="submit"
                className="px-10 sm:px-16 py-4 lg:py-5 hover:bg-secondary"
              >
                Book My Site Visit
              </Button>
            </div>
          </FadeIn>
        </form>
      </div>
    </section>
  );
}
