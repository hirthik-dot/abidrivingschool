"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MapPin, Phone, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-24 relative bg-black-deep">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: Info */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <SectionLabel>Visit Us</SectionLabel>
            <h2 className="mb-10">We're Located In <br/><span className="text-amber">Sirkali</span></h2>
            
            <div className="flex flex-col gap-8 w-full max-w-md">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Office Address</h4>
                  <p className="text-white/60">{SITE.address}</p>
                  <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-amber text-sm font-semibold hover:underline">
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Phone</h4>
                  <p className="text-white/60 flex flex-col">
                    <a href={`tel:${SITE.phone[0].replace(/ /g, '')}`} className="hover:text-amber transition-colors">{SITE.phone[0]}</a>
                    <a href={`tel:${SITE.phone[1].replace(/ /g, '')}`} className="hover:text-amber transition-colors">{SITE.phone[1]}</a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber shrink-0">
                  <Clock />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Working Hours</h4>
                  <p className="text-white/60">
                    {SITE.hours.split(' – ')[0]} – {SITE.hours.split(' – ')[1]}<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <motion.div 
            className="order-1 lg:order-2 w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden ring-2 ring-amber/20 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <iframe 
              src={SITE.mapsEmbed} 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Abi Driving School Location Map"
              className="absolute inset-0"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
