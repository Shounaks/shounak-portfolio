'use client';

import { TerminalCard } from './terminal-card';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'frontend', icon: 'javascript' },
  { name: 'React', level: 90, category: 'frontend', icon: 'code' },
  { name: 'Next.js', level: 85, category: 'frontend', icon: 'web' },
  { name: 'Tailwind', level: 88, category: 'frontend', icon: 'palette' },
  { name: 'Node.js', level: 85, category: 'backend', icon: 'terminal' },
  { name: 'Python', level: 75, category: 'backend', icon: 'vital_signs' },
  { name: 'GraphQL', level: 80, category: 'backend', icon: 'data_exploration' },
  { name: 'PostgreSQL', level: 78, category: 'backend', icon: 'database' },
  { name: 'Docker', level: 72, category: 'devops', icon: 'deployed_code' },
  { name: 'AWS', level: 68, category: 'devops', icon: 'cloud' },
  { name: 'CI/CD', level: 76, category: 'devops', icon: 'sync' },
  { name: 'Figma', level: 70, category: 'design', icon: 'design_services' },
];

const categories = ['frontend', 'backend', 'devops', 'design'] as const;

const categoryColors: Record<string, { text: string; border: string; bar: string }> = {
  frontend: { text: 'text-amber-400', border: 'border-amber-500/30', bar: 'from-amber-500/60 to-amber-400/80' },
  backend: { text: 'text-cyan-400', border: 'border-cyan-500/30', bar: 'from-cyan-500/60 to-cyan-400/80' },
  devops: { text: 'text-purple-400', border: 'border-purple-500/30', bar: 'from-purple-500/60 to-purple-400/80' },
  design: { text: 'text-pink-400', border: 'border-pink-500/30', bar: 'from-pink-500/60 to-pink-400/80' },
};

export function SkillsSection() {
  return (
    <TerminalCard title="Skills.sh" icon="category" className="md:col-span-4">
      <div className="font-mono text-[12px] p-4 space-y-0 flex flex-col flex-1 overflow-hidden">
        <div className="overflow-y-auto flex-1 max-h-[340px]">
          <div className="space-y-4">
            {categories.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              const color = categoryColors[cat];
              return (
                <div key={cat}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`${color.text}/60`}>[</span>
                    <span className={`text-[10px] uppercase tracking-widest ${color.text}/80 font-bold`}>{cat}</span>
                    <span className={`${color.text}/60`}>]</span>
                  </div>
                  <div className="space-y-1.5">
                    {catSkills.map((skill) => {
                      return (
                        <div key={skill.name} className="flex items-center gap-1.5 pl-2 group/skill cursor-default hover:bg-white/[0.02] transition-colors rounded">
                          <span className={`${color.text} text-[10px]`}>&gt;</span>
                          <span className={`material-symbols-outlined ${color.text}/40 group-hover/skill:${color.text} text-[12px] transition-all duration-200`}>{skill.icon}</span>
                          <span className="text-white/50 group-hover/skill:text-white/90 text-[10px] w-16 flex-shrink-0 transition-colors duration-200">{skill.name}</span>
                          <span className={`${color.text}/30 group-hover/skill:${color.text} text-[9px] transition-all duration-200`}>{String(skill.level).padStart(2, '0')}%</span>
                          <div className="flex-1 h-2 bg-white/5 rounded overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${color.bar} rounded transition-all duration-500 opacity-60 group-hover/skill:opacity-100`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TerminalCard>
  );
}
