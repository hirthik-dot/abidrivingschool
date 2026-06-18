"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

const galleryImages = [
  { src: "/images/student in front of school gang pic.jpeg", alt: "Students in front of school" },
  { src: "/images/signals and signs.jpeg", alt: "Signals and Signs" },
  { src: "/images/ad.jpeg", alt: "Advertisement 1" },
  { src: "/images/ad2.jpeg", alt: "Advertisement 2" }
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel centered>Our Gallery</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Glimpses of <span className="text-amber">Abi Driving School.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl"
          >
            Explore our facilities, training sessions, and proud moments.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-square md:aspect-[2/1] lg:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl glass-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].alt} 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 md:p-10">
                <span className="text-white text-xl md:text-3xl font-bold translate-y-0">
                  {galleryImages[currentIndex].alt}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {galleryImages.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-amber" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
