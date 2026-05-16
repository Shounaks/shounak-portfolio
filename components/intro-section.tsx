'use client';

import { TerminalCard } from './terminal-card';

export function IntroSection() {
  return (
    <TerminalCard title="executive_summary.exe" icon="terminal" className="md:col-span-8">
      <div className="flex flex-col h-full relative overflow-hidden group p-8 justify-center min-h-[300px]">
        <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-30 transition-all duration-500 transform translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
          <span
            className="material-symbols-outlined text-[160px] group-hover:text-[#d4af37] transition-colors duration-500"
            style={{ fontVariationSettings: "'wght' 100" }}
          >
            deployed_code
          </span>
        </div>
        <h1 className="font-display-lg leading-tight text-[28px] mb-4 md:text-[42px] relative z-10">
          Architecting the <span className="text-primary italic">future</span> of digital interaction.
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed text-[16px] relative z-10">
          Visionary interface designer and frontend engineer specializing in{' '}
          <span className="text-secondary">immersive glassmorphic environments</span> and high-fidelity user
          experiences that push technical boundaries.
        </p>
      </div>
    </TerminalCard>
  );
}
