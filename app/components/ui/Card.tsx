import { LabelCaps, HeadlineMD, BodyMD } from "./Typography";
import Icon from "./Icon";

/* ── Stat Card (Project Overview) ── */
type StatCardProps = {
  icon?: string;
  iconSrc?: string;
  label: string;
  value: string;
};

export function StatCard({ icon, iconSrc, label, value }: StatCardProps) {
  return (
    <div className="border border-primary/10 p-6 sm:p-8 lg:p-10 bg-surface transition-colors hover:border-primary/30">
      {iconSrc ? (
        <span
          className="mb-3 lg:mb-4 block size-7 bg-primary"
          style={{
            mask: `url(${iconSrc}) center / contain no-repeat`,
            WebkitMask: `url(${iconSrc}) center / contain no-repeat`,
          }}
          aria-hidden
        />
      ) : (
        <Icon name={icon!} size="md" className="text-primary mb-3 lg:mb-4" />
      )}
      <LabelCaps className="text-on-surface-variant mb-2 block">
        {label}
      </LabelCaps>
      <HeadlineMD className="text-primary">{value}</HeadlineMD>
    </div>
  );
}

/* ── Amenity Card ── */
type AmenityCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function AmenityCard({ icon, title, description }: AmenityCardProps) {
  return (
    <div className="bg-surface h-full p-4 sm:p-5 lg:p-6 border border-primary/10 hover:border-primary transition-colors cursor-default">
      <Icon name={icon} size="md" className="text-primary mb-2.5 lg:mb-3" />
      <HeadlineMD className="text-on-surface mb-2 lg:mb-2.5 text-[clamp(1rem,1.1vw,1.375rem)] leading-snug">
        {title}
      </HeadlineMD>
      <BodyMD className="text-on-surface-variant text-[0.9rem] leading-relaxed">
        {description}
      </BodyMD>
    </div>
  );
}
