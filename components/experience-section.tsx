'use client';

import { useState } from 'react';
import { TerminalCard } from './terminal-card';

interface ExperienceItem {
  years: string;
  title: string;
  company: string;
  isCurrent?: boolean;
  tech: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    years: '2023-PRESENT',
    title: 'FULL STACK ENGINEER',
    company: '@ Tech Frontier',
    isCurrent: true,
    tech: 'React, Node.js, TypeScript, GraphQL, AWS, PostgreSQL',
    highlights: [
      'Architected microservices handling 50k+ daily requests',
      'Led migration from REST to GraphQL, reducing payload size by 60%',
      'Mentored 3 junior developers through code reviews and pair programming',
    ],
  },
  {
    years: '2021-2023',
    title: 'SOFTWARE DEVELOPER',
    company: '@ Cloud Systems',
    tech: 'Python, Django, Docker, GCP, Redis',
    highlights: [
      'Built real-time data pipeline processing 1M+ events/day',
      'Reduced cloud infrastructure costs by 35% via resource optimization',
      'Implemented CI/CD pipelines cutting deployment time by 80%',
    ],
  },
  {
    years: '2019-2021',
    title: 'JUNIOR DEV',
    company: '@ Startup Hub',
    tech: 'Ruby on Rails, JavaScript, MySQL, Heroku',
    highlights: [
      'Shipped 10+ features for SaaS platform with 5k active users',
      'Improved test coverage from 45% to 85%',
      'Automated recurring deployment tasks saving 10 hrs/week',
    ],
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <TerminalCard title="Work Experience.sh" icon="history_edu" variant="secondary" className="md:col-span-5">
      <div className="font-mono text-[12px] p-6 space-y-0 flex flex-col flex-1 overflow-hidden">
        <div className="border border-white/5 rounded overflow-hidden divide-y divide-white/5 overflow-y-auto flex-1 max-h-[360px]">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div
                className={`relative p-4 cursor-pointer transition-colors ${
                  exp.isCurrent ? 'bg-secondary/[0.03]' : 'hover:bg-emerald-500/[0.02]'
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    exp.isCurrent
                      ? 'bg-secondary shadow-[0_0_10px_rgba(233,195,73,0.5)]'
                      : 'bg-white/20'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`${exp.isCurrent ? 'text-secondary' : 'text-emerald-400'}`}>&gt;</span>
                      <span className={`text-[11px] font-bold ${exp.isCurrent ? 'text-secondary' : 'text-white/80'}`}>
                        {exp.title}
                      </span>
                      {exp.isCurrent && (
                        <span className="text-[9px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded border border-secondary/30 uppercase tracking-wider">
                          ACTIVE
                        </span>
                      )}
                      <span className={`text-[10px] ml-auto transition-transform duration-200 ${expandedIndex === index ? 'rotate-90' : ''}`}>
                        <span className="material-symbols-outlined text-emerald-400/60 text-[12px]">chevron_right</span>
                      </span>
                    </div>
                    <p className="text-on-surface-variant/90 text-[11px] ml-5">{exp.company}</p>
                    <p className="text-white/40 text-[9px] ml-5 mt-0.5 font-mono">
                      <span className={`${exp.isCurrent ? 'text-secondary/60' : 'text-emerald-500/60'}`}>//</span> {exp.years}
                    </p>
                  </div>
                </div>
              </div>
              {expandedIndex === index && (
                <div className={`px-3 pb-4 pt-0 border-t ${exp.isCurrent ? 'border-secondary/10' : 'border-emerald-500/10'} mx-3`}>
                  <div className="pt-3 space-y-1.5 text-[10px]">
                    <div className="flex items-start gap-2">
                      <span className={`flex-shrink-0 ${exp.isCurrent ? 'text-secondary/60' : 'text-emerald-500/60'}`}>├─</span>
                      <span className="text-white/40">stack:</span>
                      <span className="text-white/60">{exp.tech}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className={`flex-shrink-0 ${exp.isCurrent ? 'text-secondary/60' : 'text-emerald-500/60'}`}>└─</span>
                      <span className="text-white/40">key_results:</span>
                    </div>
                    <div className="ml-5 pl-2 flex flex-col gap-0.5">
                      {exp.highlights.map((h, i) => (
                        <span key={i} className="text-white/50 leading-relaxed block text-[10px]">
                          {i === exp.highlights.length - 1 ? '└─' : '├─'} {h}
                        </span>
                      ))}
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
