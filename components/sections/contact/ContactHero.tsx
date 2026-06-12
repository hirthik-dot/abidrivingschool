"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-navy relative border-b border-white/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel centered>Get In Touch</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We'd Love To <span className="text-amber">Hear From You</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Have questions about our courses, simulator sessions, fees, or timings? Reach out to us via phone, WhatsApp, or drop us a message below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
