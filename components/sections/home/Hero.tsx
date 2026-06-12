"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Star, Shield, Calendar, Car } from "lucide-react";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden flex flex-col justify-between">
      {/* Background Noise & Blob */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-float opacity-50 pointer-events-none md:opacity-100" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs md:text-sm font-mono uppercase tracking-widest">
                <Star className="w-4 h-4 fill-amber" /> Trusted · Tamil Nadu
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[52px] md:text-[72px] lg:text-[96px] leading-[1.1] font-bold">
              Drive With{" "}
              <span className="relative inline-block text-amber">
                Confidence
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full overflow-visible" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M 5 15 Q 100 0 200 10 T 395 10" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              sirkali's premier driving school. Master the road with expert instructors, dual-control vehicles, and state-of-the-art simulator training.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg">
                Enroll Now &rarr;
              </Link>
              <Link href="/courses" className="btn-outline w-full sm:w-auto text-lg">
                View Courses
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8 pt-8 border-t border-white/10 w-full max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber"><Shield size={20} /></div>
                <div className="flex flex-col"><span className="text-xl font-bold">500+</span><span className="text-xs text-white/50 uppercase tracking-wide">Students</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber"><Star size={20} /></div>
                <div className="flex flex-col"><span className="text-xl font-bold">95%</span><span className="text-xs text-white/50 uppercase tracking-wide">Pass Rate</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber"><Calendar size={20} /></div>
                <div className="flex flex-col"><span className="text-xl font-bold">Est. 2010</span><span className="text-xs text-white/50 uppercase tracking-wide">Foundation</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (Desktop Only Visuals) */}
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px]">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <Car className="w-64 h-64 text-amber/20" strokeWidth={1} />
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div 
              className="absolute top-20 right-0 glass-card p-4 rounded-xl rotate-6 animate-float"
              style={{ animationDelay: "0s" }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">✓</div>
                <div className="text-sm font-medium">Dual-Control Cars</div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-32 left-10 glass-card p-4 rounded-xl -rotate-6 animate-float"
              style={{ animationDelay: "1s" }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center text-amber"><Star size={16} /></div>
                <div className="text-sm font-medium">Simulator Trained</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-16 w-full relative z-20">
        <MarqueeTicker>
          <span>MCWG</span>
          <span>◆</span>
          <span>MCWOG</span>
          <span>◆</span>
          <span>LMV</span>
          <span>◆</span>
          <span>HEAVY VEHICLE</span>
          <span>◆</span>
          <span className="text-white">SIMULATOR TRAINING</span>
          <span>◆</span>
          <span>RTO CERTIFIED</span>
          <span>◆</span>
        </MarqueeTicker>
      </div>
    </section>
  );
}
