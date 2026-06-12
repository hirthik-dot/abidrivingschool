"use client";

import React from "react";

interface MarqueeTickerProps {
  children: React.ReactNode;
}

export function MarqueeTicker({ children }: MarqueeTickerProps) {
  return (
    <div className="w-full bg-black-deep border-y border-white/10 overflow-hidden py-4 relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black-deep to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black-deep to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
        {/* We duplicate the content to ensure seamless loop */}
        <div className="flex shrink-0 items-center gap-8 px-4 text-amber font-mono text-sm tracking-widest uppercase">
          {children}
        </div>
        <div className="flex shrink-0 items-center gap-8 px-4 text-amber font-mono text-sm tracking-widest uppercase" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
