"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="text-center mb-16">
          <SectionLabel centered>Student Success</SectionLabel>
          <h2>Don't Just Take <span className="text-amber">Our Word For It</span></h2>
        </div>

        {/* Masonry Layout for Desktop, Flex Scroll for Mobile */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid glass-card relative"
            >
              <div className="absolute top-6 right-6 text-6xl text-amber/20 font-serif leading-none select-none pointer-events-none">"</div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? "fill-amber text-amber" : "text-white/20"}`} 
                  />
                ))}
              </div>
              
              <p className="text-white/80 text-lg mb-8 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber to-amber-dark flex items-center justify-center text-black-deep font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-base m-0">{testimonial.name}</h4>
                  <p className="text-xs text-white/50 uppercase tracking-widest mt-1">via {testimonial.source} ★</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
