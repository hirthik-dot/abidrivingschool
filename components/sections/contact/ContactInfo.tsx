"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col h-full"
    >
      <h2 className="mb-4 text-3xl font-bold">Contact Details</h2>
      <p className="text-white/60 mb-10">
        Our support team is available during working hours to assist you with any queries.
      </p>

      <div className="flex flex-col gap-8 mb-10 flex-1">
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0">
            <MapPin />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">Our Location</h4>
            <p className="text-white/60 mb-2">{SITE.address}</p>
            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="text-amber text-sm font-semibold hover:underline">
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0">
            <Phone />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">Phone Numbers</h4>
            <div className="flex flex-col text-white/60 gap-1">
              <a href={`tel:${SITE.phone[0].replace(/ /g, '')}`} className="hover:text-amber transition-colors">{SITE.phone[0]}</a>
              <a href={`tel:${SITE.phone[1].replace(/ /g, '')}`} className="hover:text-amber transition-colors">{SITE.phone[1]}</a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0">
            <Mail />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">Email</h4>
            <a href={`mailto:${SITE.email}`} className="text-white/60 hover:text-amber transition-colors">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0">
            <Clock />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">Working Hours</h4>
            <p className="text-white/60">
              {SITE.hours.split(' – ')[0]} – {SITE.hours.split(' – ')[1]}<br/>
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-64 rounded-2xl overflow-hidden ring-1 ring-white/10 relative">
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
      </div>
    </motion.div>
  );
}
