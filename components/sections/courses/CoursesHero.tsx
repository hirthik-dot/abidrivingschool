"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CoursesHero() {
  return (
    <section className="pt-32 pb-16 bg-navy relative border-b border-white/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel centered>Licences &amp; Courses</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find The Right <span className="text-amber">Programme</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From two-wheelers to heavy commercial vehicles, and our brand new simulator training. We have the perfect course for your driving journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
