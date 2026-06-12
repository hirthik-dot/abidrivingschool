"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

export function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
  }, [inView, motionValue, target]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // format numbers with 1 decimal place if it's less than 10 (like rating)
        const formatted = target < 10 
          ? Intl.NumberFormat("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(latest)
          : Math.floor(latest).toString();
        ref.current.textContent = formatted + suffix;
      }
    });
  }, [springValue, suffix, target]);

  return <span ref={ref} />;
}
