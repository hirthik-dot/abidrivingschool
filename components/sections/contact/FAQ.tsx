"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ as FAQ_DATA } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section className="py-24 bg-surface text-black-deep border-t border-black/5">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-16">
          <SectionLabel centered>FAQ</SectionLabel>
          <h2>Frequently Asked <span className="text-amber">Questions</span></h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="text-lg font-bold text-black-deep m-0 pr-4">{index + 1}. {question}</h3>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
            isOpen ? "bg-amber text-black-deep" : "bg-black/5 text-black-deep/60"
          )}
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
            <div className="px-6 pb-6 pt-2">
              <p className="text-black-deep/70 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
