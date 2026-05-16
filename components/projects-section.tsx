'use client';

import { useState } from 'react';
import { TerminalCard } from './terminal-card';

interface Project {
  title: string;
  description: string;
  icon: string;
  tech: string;
  link: string;
  details: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce API',
    description: 'High-performance Node.js backend',
    icon: 'code_off',
    tech: 'Node.js, Express, PostgreSQL, Redis, Stripe',
    link: 'github.com/user/ecommerce-api',
    details: 'Full-featured RESTful API handling 10k+ req/s. Implements JWT auth, rate limiting, caching layer with Redis, and Stripe payment integration.',
  },
  {
    title: 'FinTrack Dash',
    description: 'Next.js analytics dashboard',
    icon: 'analytics',
    tech: 'Next.js, TypeScript, D3.js, Prisma, Supabase',
    link: 'github.com/user/fintrack-dash',
    details: 'Real-time financial analytics dashboard with interactive D3.js charts, server-side rendering, and role-based access control.',
  },
];

export function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <TerminalCard title="Projects.sh" icon="folder_open" variant="primary" className="md:col-span-3">
      <div className="font-mono text-[12px] p-4 space-y-0 flex flex-col flex-1 overflow-hidden">
        <div className="border border-white/5 rounded overflow-hidden divide-y divide-white/5 overflow-y-auto flex-1">
          {projects.map((project, index) => (
            <div key={index}>
              <div
                className="p-3 hover:bg-emerald-500/[0.02] transition-colors group cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span className="text-emerald-300/90 font-bold text-[11px] truncate group-hover:text-emerald-200 transition-colors">
                        {project.title}
                      </span>
                      <span className="text-white/20 text-[9px] ml-auto font-mono">[{index + 1}/2]</span>
                      <span className={`text-[10px] transition-transform duration-200 ${expandedIndex === index ? 'rotate-90' : ''}`}>
                        <span className="material-symbols-outlined text-emerald-400/60 text-[12px]">chevron_right</span>
                      </span>
                    </div>
                    <p className="text-white/40 text-[10px] ml-4 mt-0.5 font-mono">
                      <span className="text-emerald-500/50">#</span> {project.description}
                    </p>
                  </div>
                </div>
              </div>
              {expandedIndex === index && (
                <div className="px-3 pb-3 pt-0 border-t border-emerald-500/10 mx-3">
                  <div className="pt-3 space-y-1.5 text-[10px]">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500/60 flex-shrink-0">├─</span>
                      <span className="text-white/40">tech:</span>
                      <span className="text-white/60">{project.tech}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500/60 flex-shrink-0">├─</span>
                      <span className="text-white/40">repo:</span>
                      <span className="text-emerald-400/80 underline underline-offset-2">{project.link}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500/60 flex-shrink-0">└─</span>
                      <span className="text-white/40">desc:</span>
                      <span className="text-white/50 leading-relaxed">{project.details}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
}
