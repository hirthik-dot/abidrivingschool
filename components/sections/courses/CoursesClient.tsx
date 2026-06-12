"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

const FILTERS = ["All", "Two Wheeler", "Car", "Commercial", "Heavy", "Services", "Simulator"];

export function CoursesClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCourses = COURSES.filter(course => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Two Wheeler") return course.id.includes("mcwg");
    if (activeFilter === "Car") return course.id === "lmv";
    if (activeFilter === "Commercial") return course.id === "lmv-transport";
    if (activeFilter === "Heavy") return course.id === "heavy";
    if (activeFilter === "Services") return ["ll", "renewal"].includes(course.id);
    if (activeFilter === "Simulator") return course.id === "simulator";
    return true;
  });

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Sticky Filter Tabs */}
        <div className="sticky top-[88px] z-40 bg-black-deep/80 backdrop-blur-xl py-4 border-b border-white/10 mb-12 -mx-4 px-4 md:mx-0 md:px-0 flex overflow-x-auto gap-2 no-scrollbar scroll-smooth mask-edges">
          {FILTERS.map(filter => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0",
                  isActive ? "text-black-deep" : "text-white/60 hover:text-white border border-white/20"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-filter"
                    className="absolute inset-0 bg-amber rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto min-h-[60vh]">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <CourseAccordionItem key={course.id} course={course} index={i} />
            ))}
          </AnimatePresence>
          
          {filteredCourses.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20 text-white/50"
            >
              No courses found for this category.
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}

function CourseAccordionItem({ course, index }: { course: typeof COURSES[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "bg-white/5 border rounded-2xl overflow-hidden transition-colors",
        isOpen ? "border-amber/50" : "border-white/10 hover:border-white/20",
        course.isNew && "border-l-4 border-l-amber"
      )}
      id={course.id}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl shrink-0">
            {course.icon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="text-lg md:text-xl font-bold m-0 leading-none">{course.name} <span className="hidden sm:inline-block font-normal text-white/40 ml-2">&mdash; {course.full}</span></h3>
              {course.isNew && <span className="text-[10px] font-bold bg-amber text-black-deep px-2 py-0.5 rounded-full tracking-wider uppercase">New</span>}
              {course.flagship && <span className="text-[10px] font-bold border border-amber/50 text-amber px-2 py-0.5 rounded-full tracking-wider uppercase">Flagship</span>}
            </div>
            <div className="text-sm font-mono text-white/50 tracking-widest uppercase mt-2">
              {course.duration}
            </div>
          </div>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 pt-2 border-t border-white/10 mt-2">
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-3xl">
                {course.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {course.includes.length > 0 && (
                  <div>
                    <h5 className="text-amber text-sm font-mono tracking-widest uppercase mb-4">What's Included</h5>
                    <ul className="flex flex-col gap-3">
                      {course.includes.map((item, i) => (
                        <li key={i} className="flex gap-3 text-white/70">
                          <Check className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {course.documents.length > 0 && (
                  <div>
                    <h5 className="text-amber text-sm font-mono tracking-widest uppercase mb-4">Documents Needed</h5>
                    <ul className="flex flex-col gap-3">
                      {course.documents.map((item, i) => (
                        <li key={i} className="flex gap-3 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
