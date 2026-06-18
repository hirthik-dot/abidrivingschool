"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    desc: "Abi Driving School opens its doors in sirkali with just two cars and a vision for better, safer driver education.",
  },
  {
    year: "2012",
    title: "First 100 Students",
    desc: "We celebrated our 100th successfully licensed student, establishing our reputation for high-quality, patient training.",
  },
  {
    year: "2015",
    title: "Expanding Horizons",
    desc: "Introduced our Heavy Vehicle training program and comprehensive two-wheeler courses to meet growing local demand.",
  },
  {
    year: "2020",
    title: "Reaching Milestones",
    desc: "Crossed 500+ students trained with an incredible 95% first-attempt pass rate despite challenging global conditions.",
  },
  {
    year: "Today",
    title: "Leading the Way",
    desc: "Recognized as the premier RTO-certified school, introducing modern simulator training to revolutionize the learning experience.",
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-surface text-black-deep overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-black-deep mb-20">Our Journey</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/10 md:-translate-x-1/2" />

          {milestones.map((m, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 last:mb-0"
              >
                
                {/* Desktop Left */}
                <div className={`hidden md:block w-[45%] text-right ${!isEven ? 'md:order-3 md:text-left' : ''}`}>
                  {!isEven ? (
                    <div>
                      <h3 className="text-2xl font-bold text-black-deep mb-2">{m.title}</h3>
                      <p className="text-black-deep/70">{m.desc}</p>
                    </div>
                  ) : (
                    <div className="text-4xl font-black font-display text-amber">{m.year}</div>
                  )}
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-amber rounded-full -translate-x-1/2 border-4 border-surface shadow-[0_0_0_4px_rgba(245,166,35,0.2)] md:order-2 z-10" />

                {/* Desktop Right / Mobile Content */}
                <div className={`w-full pl-20 md:pl-0 md:w-[45%] ${!isEven ? 'md:order-1 md:text-right' : 'md:order-3'}`}>
                  {/* Mobile Year Tag */}
                  <div className="md:hidden text-2xl font-black font-display text-amber mb-2">{m.year}</div>
                  
                  {isEven ? (
                    <div>
                      <h3 className="text-2xl font-bold text-black-deep mb-2">{m.title}</h3>
                      <p className="text-black-deep/70">{m.desc}</p>
                    </div>
                  ) : (
                    <div className="hidden md:block text-4xl font-black font-display text-amber">{m.year}</div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
