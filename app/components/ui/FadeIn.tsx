"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: "fast" | "normal" | "slow" | "very-slow";
};

const DIRECTION_OFFSET = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
} as const;

const DURATION_SECONDS = {
  fast: 0.5,
  normal: 0.7,
  slow: 1,
  "very-slow": 1.2,
} as const;

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = "normal",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...DIRECTION_OFFSET[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: DURATION_SECONDS[duration],
        delay: delay / 1000,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
