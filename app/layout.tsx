import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Serif, Space_Grotesk, Manrope } from "next/font/google";
import LenisProvider from "@/app/components/layout/LenisProvider";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nava Manchanballe | Premium Plotted Development, North Bengaluru",
  description:
    "135 premium villa plots across 14 acres in Manchanballe, North Bengaluru. E-Khata & CUDA approved, RERA compliant. Book your site visit today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${spaceGrotesk.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
