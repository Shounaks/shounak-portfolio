'use client';

import { useState, useEffect } from 'react';
import { TerminalCard } from './terminal-card';
import { ContactSection } from './contact-section';

const testimonials = [
  {
    quote: "Shounak is an exceptional developer who consistently delivers high-quality code and innovative solutions. Highly recommended for complex projects.",
    name: "Sarah J.",
    title: "Lead @ Tech Frontier"
  },
  {
    quote: "Exceptional attention to detail and a true visionary in creating immersive digital experiences. A pleasure to work with on challenging projects.",
    name: "Alex Chen",
    title: "Design Director @ TechFlow"
  },
  {
    quote: "Delivered a frontend solution that exceeded expectations. Highly collaborative and innovative approach to problem-solving.",
    name: "Jordan Martinez",
    title: "CTO @ Digital Studios"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];
  const progress = ((currentIndex + 1) / testimonials.length) * 100;

  return (
    <>
      <div className="md:col-span-6 flex flex-col">
        <TerminalCard title="Testimonials.sh" icon="format_quote" className="flex-1">
          <div className="p-6 md:p-8 flex-1 flex flex-col">
            <div className="flex-1 flex flex-col justify-start min-h-[180px]">
              <div className="flex gap-4 items-start">
                <div className="w-[3px] h-24 bg-white/5 rounded-full overflow-hidden relative flex-shrink-0 mt-1">
                  <div
                    className="absolute bottom-0 left-0 w-full bg-emerald-400/60 transition-all duration-500 ease-out"
                    style={{ height: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">&gt;</span>
                    <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-mono">
                      <span className="text-emerald-400/60">&ldquo;</span>
                      {current.quote}
                      <span className="text-emerald-400/60">&rdquo;</span>
                    </p>
                  </div>
                  <div className="ml-5 mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-emerald-400 text-[14px]">person</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold font-mono text-emerald-300">{current.name}</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{current.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 pb-4">
            <div className="flex gap-1.5 justify-center">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-emerald-400' : 'w-1 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </TerminalCard>
      </div>

      <div className="md:col-span-6 flex flex-col">
        <ContactSection />
      </div>
    </>
  );
}
