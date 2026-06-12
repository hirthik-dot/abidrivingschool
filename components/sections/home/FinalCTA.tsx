"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-amber" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-black-deep text-4xl md:text-6xl lg:text-7xl font-black mb-8">
            Ready to Take the Wheel?
          </h2>
          <p className="text-black-deep/80 text-xl mb-10">
            Join hundreds of confident drivers who started their journey with us. Book your first session today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-black-deep text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
              Start Learning Now <ArrowRight size={20} />
            </Link>
            <Link href="/courses" className="bg-transparent text-black-deep border-2 border-black-deep px-8 py-4 rounded-full font-bold text-lg hover:bg-black-deep/10 transition-colors w-full sm:w-auto">
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
