"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({ children, className, centered = false }: SectionLabelProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/30 bg-amber/10 text-amber text-sm font-mono uppercase tracking-widest mb-6",
        centered && "mx-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
