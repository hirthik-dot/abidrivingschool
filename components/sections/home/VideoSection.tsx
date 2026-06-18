"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync state if video pauses/plays externally or ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative aspect-video bg-black/80 group flex items-center justify-center"
        >
          {/* We use object-contain and scale(1.65) to perfectly fit the rotated sideways video without cropping the edges */}
          <video 
            ref={videoRef}
            src="/images/video.mp4" 
            autoPlay 
            loop 
            muted={isMuted}
            playsInline
            style={{ transform: "rotate(-90deg) scale(1.65)" }}
            className="w-full h-full object-contain pointer-events-none"
          />
          
          {/* Custom Controls Overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 cursor-pointer" onClick={togglePlay}>
            <button 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber/90 text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl backdrop-blur-md"
            >
              {isPlaying ? <Pause className="w-8 h-8 md:w-10 md:h-10" /> : <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 md:ml-2" />}
            </button>
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button 
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-amber hover:text-black transition-colors backdrop-blur-sm border border-white/10"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
