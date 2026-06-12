"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppFAB() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I'd like to enquire about Abi Driving School")}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <div className="absolute inset-0 rounded-full border border-[#25D366] animate-pulse-ring pointer-events-none" />
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  );
}
