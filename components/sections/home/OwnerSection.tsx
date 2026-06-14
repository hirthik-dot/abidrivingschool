"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export function OwnerSection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel centered>Meet the Founder</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Guided By <span className="text-amber">Experience.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl"
          >
            Driving excellence through years of hands-on experience and a passion for safe roads.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Owner Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex gap-4 w-full h-full justify-center items-center"
          >
             <div className="flex flex-col gap-4 w-1/2 mt-12">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 aspect-[4/5] transform -rotate-3 transition-transform hover:rotate-0 duration-300">
                   <Image src="/images/Owner.jpeg" alt="Owner" fill className="object-cover" />
                </div>
             </div>
             <div className="flex flex-col gap-4 w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber/20 aspect-[4/5] transform rotate-3 transition-transform hover:rotate-0 duration-300">
                   <Image src="/images/owner 2.jpeg" alt="Owner" fill className="object-cover" />
                </div>
             </div>
          </motion.div>

          {/* Visiting Card / Logo Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="glass-card relative p-8 md:p-10 rounded-3xl overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8">Our Identity</h3>
              
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-amber/40 transition-colors duration-500 bg-white/5">
                <Image src="/images/Logo.jpeg" alt="Abi Driving School Logo" fill className="object-contain p-4" />
              </div>
              
              <div className="mt-8 space-y-4">
                <p className="text-white/70 leading-relaxed">
                  The foundation of Abi Driving School is built on trust, patience, and a commitment to creating safer roads. Our goal is to ensure every student leaves with the utmost confidence behind the wheel.
                </p>
                <div className="inline-block border-b-2 border-amber pb-1 text-amber font-semibold tracking-wide uppercase text-sm mt-4">
                  - The Founder
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
