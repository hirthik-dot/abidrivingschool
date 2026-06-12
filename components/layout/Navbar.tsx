"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled ? "py-4 backdrop-blur-xl bg-black-deep/70 border-b border-white/10 shadow-lg" : "py-6 bg-transparent"
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative z-[60] flex items-center text-2xl font-display font-bold tracking-tight" onClick={() => setIsOpen(false)}>
            <span>ABI</span><span className="text-amber">.</span>
            <span className="ml-2 font-light text-white/80">Driving School</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "relative font-medium transition-colors hover:text-amber",
                    isActive ? "text-amber" : "text-white/80"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-amber"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${SITE.phone[0].replace(/ /g, '')}`} className="font-medium text-white hover:text-amber transition-colors">
              {SITE.phone[0]}
            </a>
            <Link href="/contact" className="btn-primary">
              Enroll Now →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              className="w-6 h-[2px] bg-white block transition-transform"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-6 h-[2px] bg-white block transition-opacity"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
              className="w-6 h-[2px] bg-white block transition-transform"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
            className="fixed inset-0 z-[55] bg-black-deep/98 backdrop-blur-2xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8 text-3xl font-display font-semibold">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block",
                      pathname === link.href ? "text-amber" : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8 mt-8 border-t border-white/10 flex flex-col gap-4"
              >
                <span className="text-lg text-white/50">Call Us</span>
                <a href={`tel:${SITE.phone[0].replace(/ /g, '')}`} className="text-2xl text-white">
                  {SITE.phone[0]}
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary mt-4 w-full">
                  Enroll Now →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
