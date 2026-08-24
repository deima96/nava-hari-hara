import Image from "next/image";
import type { ReactNode } from "react";

type ImageWrapperProps = {
  src: string;
  alt: string;
  overlay?: boolean;
  hoverZoom?: boolean;
  fit?: "cover" | "contain";
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
  priority?: boolean;
  quality?: number;
  width?: number;
  height?: number;
};

export default function ImageWrapper({
  src,
  alt,
  overlay = false,
  hoverZoom = false,
  fit = "cover",
  className = "",
  imageClassName = "",
  children,
  priority = false,
  quality,
  width,
  height,
}: ImageWrapperProps) {
  const useIntrinsic = width != null && height != null;
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";
  const hoverClass = hoverZoom
    ? "transition-transform duration-1000 group-hover:scale-105"
    : "";

  return (
    <div
      className={`relative overflow-hidden ${hoverZoom ? "group" : ""} ${
        className || (useIntrinsic ? "" : "size-full")
      }`}
    >
      {useIntrinsic ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={quality}
          className={`h-auto w-full ${objectClass} ${hoverClass} ${imageClassName}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          className={`${objectClass} ${hoverClass} ${imageClassName}`}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      )}
      {children}
    </div>
  );
}
