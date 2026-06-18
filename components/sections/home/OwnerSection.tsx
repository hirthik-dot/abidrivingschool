"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export function OwnerSection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel centered>Meet the Founders</SectionLabel>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Founder 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card relative p-8 md:p-10 rounded-3xl overflow-hidden group flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-amber/10 transition-colors duration-500" />
            
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 mb-8 transform transition-transform group-hover:scale-105 duration-500">
                <Image src="/images/Owner.jpeg" alt="Founder 1" fill className="object-cover" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Founder Name 1</h3>
              <div className="text-amber font-medium tracking-wide uppercase text-sm mb-6 pb-4 border-b border-white/10 inline-block px-4">
                Co-Founder & Chief Instructor
              </div>
              
              <p className="text-white/70 leading-relaxed max-w-sm">
                Dummy details for Founder 1. You can update this text in the future with their actual background, experience, and vision for the driving school.
              </p>
            </div>
          </motion.div>

          {/* Founder 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card relative p-8 md:p-10 rounded-3xl overflow-hidden group flex flex-col h-full"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none group-hover:bg-amber/10 transition-colors duration-500" />
            
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber/20 mb-8 transform transition-transform group-hover:scale-105 duration-500">
                <Image src="/images/owner 2.jpeg" alt="Founder 2" fill className="object-cover" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Founder Name 2</h3>
              <div className="text-amber font-medium tracking-wide uppercase text-sm mb-6 pb-4 border-b border-white/10 inline-block px-4">
                Co-Founder & Operations Director
              </div>
              
              <p className="text-white/70 leading-relaxed max-w-sm">
                Dummy details for Founder 2. You can update this text in the future with their actual background, experience, and role in managing the driving school.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
