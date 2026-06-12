"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 bg-black-deep relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel centered>Our Story</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pioneering Safe Driving<br/>In <span className="text-amber">Kallakurichi</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Since 2010, we've been on a mission to transform nervous beginners into confident, responsible drivers who navigate modern roads with ease.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
