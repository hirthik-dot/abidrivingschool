"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight, CloudRain, Sun, Moon, AlertTriangle, ShieldCheck, Trophy } from "lucide-react";

export function SimulatorSection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel centered>Sirkali's 1st Real Driving Simulator</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Practice Before You<br/>
            <span className="text-amber">Hit The Road.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl"
          >
            Experience real-world driving scenarios in our state-of-the-art driving simulator — before ever sitting behind a real wheel.
          </motion.p>
        </div>

        {/* Simulator Setup Centerpiece */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto mb-20 flex flex-col items-center"
        >
          {/* Monitors */}
          <div className="flex justify-center items-end gap-2 mb-4 w-full">
            <div className="w-1/4 aspect-video bg-gray-900 rounded-lg border-2 border-gray-800 shadow-xl transform rotate-12 translate-y-8 hidden md:block" />
            <div className="w-full md:w-1/2 aspect-video bg-[#0a0a14] rounded-xl border-2 border-amber/30 shadow-2xl shadow-amber/10 flex flex-col relative overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
              {/* Screen Content */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="h-[40%] bg-gradient-to-t from-gray-800 to-transparent flex justify-center perspective-[1000px]">
                  {/* Road */}
                  <div className="w-32 h-full bg-gray-900 border-x-4 border-amber/20 flex flex-col justify-around items-center" style={{transform: "rotateX(60deg) scaleY(2)", transformOrigin: "bottom"}}>
                    <div className="w-2 h-[20%] bg-white/60"></div>
                    <div className="w-2 h-[20%] bg-white/60"></div>
                    <div className="w-2 h-[20%] bg-white/60"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                 <div className="text-[10px] md:text-xs text-amber font-mono">SPEED</div>
                 <div className="text-xl md:text-2xl font-bold font-mono text-white">45 <span className="text-[10px] text-white/50">KM/H</span></div>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest hidden md:inline-block">Recording</span>
              </div>
            </div>
            <div className="w-1/4 aspect-video bg-gray-900 rounded-lg border-2 border-gray-800 shadow-xl transform -rotate-12 translate-y-8 hidden md:block" />
          </div>

          {/* Dashboard & Steering */}
          <div className="w-[80%] md:w-[60%] h-12 md:h-16 bg-gradient-to-b from-gray-800 to-gray-950 rounded-t-3xl border-t border-gray-700 relative z-20 flex justify-center shadow-2xl">
            {/* Steering Wheel */}
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-[10px] md:border-[12px] border-gray-900 bg-gray-800 flex items-center justify-center -mt-12 md:-mt-20 shadow-2xl relative transform transition-transform hover:-rotate-12 duration-500 ease-out">
              <div className="w-full h-3 md:h-4 bg-gray-900 absolute" />
              <div className="w-4 md:w-6 h-12 md:h-16 bg-gray-900 absolute" />
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-950 flex items-center justify-center z-10 border border-gray-700">
                <span className="text-[8px] md:text-[10px] text-amber/80 font-bold uppercase tracking-wider">Abi</span>
              </div>
            </div>
          </div>

          {/* Racing Seat */}
          <div className="w-32 md:w-48 h-32 md:h-48 bg-gradient-to-b from-red-900 to-black rounded-t-[2rem] md:rounded-t-[3rem] border-t-4 border-red-600 -mt-2 z-30 relative shadow-2xl flex flex-col items-center pt-4 md:pt-6">
            <div className="w-16 md:w-24 h-6 md:h-8 bg-black/40 rounded-full mb-3 md:mb-4" />
            <div className="w-full flex justify-between px-3 md:px-4">
               <div className="w-6 md:w-8 h-20 md:h-32 bg-black/30 rounded-full" />
               <div className="w-6 md:w-8 h-20 md:h-32 bg-black/30 rounded-full" />
            </div>
          </div>
          
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-16 bg-black/80 blur-2xl rounded-[100%]" />
        </motion.div>

        {/* Feature Grid & Stats */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Risk Training</h3>
              <p className="text-white/60">Make mistakes safely before stepping onto real roads. Perfect for nervous beginners to build fundamental confidence.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card"
            >
              <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber mb-4">
                <CloudRain size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">All Weather Conditions</h3>
              <p className="text-white/60">Practice driving in heavy rain, thick fog, and pitch-black night conditions—scenarios you can't guarantee in real life.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card"
            >
              <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber mb-4">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Road Scenarios</h3>
              <p className="text-white/60">Navigate complex city intersections, highway merging, roundabouts, and tricky parallel parking maneuvers virtually.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card"
            >
              <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber mb-4">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Confidence Fast</h3>
              <p className="text-white/60">Simulator-trained students consistently pass their RTO tests faster and show better on-road spatial awareness.</p>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-amber text-black-deep rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
              <div>
                <div className="text-3xl font-black font-display">10+</div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Simulator Stations</div>
              </div>
              <div>
                <div className="text-3xl font-black font-display">1,000+</div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Hours Logged</div>
              </div>
              <div>
                <div className="text-3xl font-black font-display">100%</div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Real Scenarios</div>
              </div>
            </div>
            
            <Link href="/courses#simulator" className="bg-black-deep text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-colors w-full md:w-auto text-center whitespace-nowrap">
              Book a Session &rarr;
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
