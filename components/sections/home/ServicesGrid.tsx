"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { COURSES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ServicesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionLabel>Our Courses</SectionLabel>
            <h2>Find The Right <span className="text-amber">Programme</span></h2>
            <p className="text-white/60 text-lg mt-4">
              From two-wheelers to heavy commercial vehicles, our RTO-certified courses are designed to make you a confident and safe driver.
            </p>
          </div>
          <Link href="/courses" className="btn-outline shrink-0">
            View All Courses
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {COURSES.map((course, idx) => {
            // Determine bento grid classes based on layout spec
            let bentoClass = "";
            if (course.id === "mcwog") bentoClass = "lg:row-span-2"; // Two Wheeler - TALL
            else if (course.id === "heavy") bentoClass = "lg:col-span-2"; // Heavy Vehicle - WIDE
            else if (course.id === "simulator") bentoClass = "lg:col-span-2"; // Simulator - WIDE

            return (
              <motion.div key={course.id} variants={fadeUp} className={bentoClass}>
                <Link href={`/courses#${course.id}`} className="block h-full">
                  <div className={cn(
                    "group relative h-full bg-[#0a0a0f] border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500",
                    "hover:border-amber/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(245,166,35,0.1)]"
                  )}>
                    {/* Hover Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl shadow-inner border border-white/5">
                          {course.icon}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1 rounded-full">
                            {course.duration}
                          </span>
                          {course.isNew && (
                            <span className="text-xs font-mono uppercase tracking-widest text-black-deep bg-amber px-3 py-1 rounded-full font-bold">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-amber transition-colors">
                          {course.full}
                        </h3>
                        <p className="text-white/60 text-sm line-clamp-2 mb-6">
                          {course.description}
                        </p>
                        
                        <div className="flex items-center text-amber font-semibold text-sm tracking-wide uppercase">
                          <span className="relative">
                            Explore
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber transition-all duration-300 group-hover:w-full" />
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
