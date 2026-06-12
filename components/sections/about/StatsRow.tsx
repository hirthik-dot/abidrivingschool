"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SITE } from "@/lib/constants";

export function StatsRow() {
  return (
    <section className="py-12 bg-black-deep border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-black text-amber font-display mb-2">
              <AnimatedCounter target={SITE.stats.students} suffix="+" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">Students Trained</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-black text-amber font-display mb-2">
              <AnimatedCounter target={SITE.stats.passRate} suffix="%" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">Pass Rate</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-black text-amber font-display mb-2">
              <AnimatedCounter target={SITE.stats.years} suffix="+" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">Years Exellence</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-black text-amber font-display mb-2">
              <AnimatedCounter target={SITE.stats.rating} suffix="★" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">Avg Rating</span>
          </div>

        </div>
      </div>
    </section>
  );
}
