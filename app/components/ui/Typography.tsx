import { type ElementType, type HTMLAttributes, type CSSProperties, type ReactNode } from "react";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

type DisplayTextProps = TypographyProps & {
  fontSize?: string;
  fontWeight?: string | number;
};

/* ── Display Large ── */
export function DisplayText({
  as: Tag = "h1",
  children,
  className = "",
  fontSize,
  fontWeight,
  style,
  ...rest
}: DisplayTextProps) {
  const customStyle: CSSProperties = {
    ...style,
    ...(fontSize ? { fontSize } : {}),
    ...(fontWeight ? { fontWeight } : {}),
  };

  return (
    <Tag
      className={`font-display text-display-lg leading-[1.1] tracking-tight font-light ${className}`}
      style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Headline XL ── */
export function HeadlineXL({
  as: Tag = "h2",
  children,
  className = "",
  fontSize,
  fontWeight,
  style,
  ...rest
}: DisplayTextProps) {
  const customStyle: CSSProperties = {
    ...style,
    ...(fontSize ? { fontSize } : {}),
    ...(fontWeight ? { fontWeight } : {}),
  };

  return (
    <Tag
      className={`font-display text-headline-xl leading-[1.2] ${className}`}
      style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Headline MD ── */
export function HeadlineMD({
  as: Tag = "h3",
  children,
  className = "",
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`font-display text-headline-md leading-[1.3] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Body Large ── */
export function BodyLG({
  as: Tag = "p",
  children,
  className = "",
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`font-body text-body-lg leading-[1.7] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Body Medium ── */
export function BodyMD({
  as: Tag = "p",
  children,
  className = "",
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`font-body text-body-md leading-[1.6] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Label Caps ── */
export function LabelCaps({
  as: Tag = "span",
  children,
  className = "",
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`font-label text-label-caps leading-[1.2] tracking-[0.15em] uppercase ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
