"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    { title: "RTO Certified Instructors", desc: "Our team consists of highly experienced, patient, and government-certified driving instructors." },
    { title: "Dual-Control Vehicles", desc: "Learn safely with our modified vehicles. Your instructor always has a backup brake and clutch." },
    { title: "Women-Friendly Environment", desc: "We provide a safe, respectful, and highly supportive learning space for all women drivers." },
    { title: "Flexible Batch Timings", desc: "Morning or evening, weekday or weekend—we fit seamlessly into your busy schedule." },
  ];

  return (
    <section className="py-24 bg-surface text-black-deep relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Stats */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-[60px] md:text-[80px] font-black text-amber leading-none mb-2 font-display tracking-tighter">
                <AnimatedCounter target={SITE.stats.students} suffix="+" />
              </span>
              <span className="text-black-deep/60 text-sm font-bold uppercase tracking-widest">Students Trained</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[60px] md:text-[80px] font-black text-amber leading-none mb-2 font-display tracking-tighter">
                <AnimatedCounter target={SITE.stats.passRate} suffix="%" />
              </span>
              <span className="text-black-deep/60 text-sm font-bold uppercase tracking-widest">First Try Pass Rate</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[60px] md:text-[80px] font-black text-amber leading-none mb-2 font-display tracking-tighter">
                <AnimatedCounter target={SITE.stats.years} suffix="+" />
              </span>
              <span className="text-black-deep/60 text-sm font-bold uppercase tracking-widest">Years of Excellence</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[60px] md:text-[80px] font-black text-amber leading-none mb-2 font-display tracking-tighter">
                <AnimatedCounter target={SITE.stats.rating} suffix="★" />
              </span>
              <span className="text-black-deep/60 text-sm font-bold uppercase tracking-widest">Average Rating</span>
            </div>
          </div>

          {/* RIGHT: Features */}
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-black-deep mb-10">More Than Just A <span className="text-amber">Driving School</span></h2>
            
            <div className="flex flex-col">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 py-6 border-b border-black/10 last:border-0"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black-deep">{feature.title}</h4>
                    <p className="text-black-deep/60">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
