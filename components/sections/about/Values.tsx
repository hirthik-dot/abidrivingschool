"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart, Target, Users, ShieldCheck } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Warm & Welcoming",
      desc: "We create a stress-free, encouraging environment. Anxiety is left at the door.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Focused",
      desc: "We train you for real-world driving, ensuring you pass your RTO test with ease.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women-Friendly",
      desc: "Respectful, patient instructors providing a safe learning space for all women.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Fair & Transparent",
      desc: "No hidden fees or surprise charges. Just honest, high-quality driver education.",
    }
  ];

  return (
    <section className="py-24 bg-navy relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <SectionLabel centered>Our Principles</SectionLabel>
          <h2>What We Stand For</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((v, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center text-amber mb-6">
                {v.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{v.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certification Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto bg-amber text-black-deep rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_60px_rgba(245,166,35,0.15)]"
        >
          <div className="w-24 h-24 shrink-0 rounded-full bg-black-deep/10 flex items-center justify-center">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-3 text-black-deep">RTO Certified Driving School</h3>
            <p className="text-black-deep/80 text-lg">
              Fully licensed and approved by the Tamil Nadu Government. We adhere to the highest state standards for driver education and road safety.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
