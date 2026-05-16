'use client';

import { TerminalCard } from './terminal-card';

export function ProfileCard() {
  return (
    <TerminalCard title="Career Summary.sh" variant="primary" className="md:col-span-4">
      <div className="font-mono text-[12px] p-4 space-y-0 flex flex-col flex-1">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-lg border border-emerald-500/30 p-0.5 bg-black/30 overflow-hidden relative">
              <img
                alt="Shounak Bhalerao"
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAVmEXSmhoXud3ziMQjvRjcTFL788cxg5h4GkRVAcmxM6aCeyV8uztvRgZ1Yy_azUjEdXfb5hbjxeGcY9DWNPi2fN_UEwY8HqeJu3Q51fUVYZUNJI8F6hml1MdLWgKBnieEtpZUJTBH5iU7ejcrBd-u0lp9BpOGK96dLsXXVBPqJIXQnJAgksSLmHBSdNnb5y4L_zuZGuhBTx1hj8q3_6-hbPVeyFSjWu8ue1TrlF3bGDHx3xLjqYhHGPtrWRw9UKHy88UiDrabQ8W"
              />
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
            </div>
          </div>
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">&gt;</span>
              <span className="text-emerald-300 font-bold text-[16px]">Shounak Bhalerao</span>
            </div>
            <div className="flex items-center gap-2 ml-5">
              <span className="text-emerald-500/50 text-[9px]">//</span>
              <span className="text-white/50 text-[10px]">SR. CREATIVE TECH // BERLIN</span>
            </div>
            <div className="flex items-center gap-2 ml-5 pt-2">
              <div className="flex items-center gap-2 w-full">
                <a className="flex items-center gap-1.5 text-[10px] font-mono text-white/60 bg-white/5 hover:bg-amber-500/10 hover:text-amber-400 border border-white/10 hover:border-amber-500/30 px-2.5 py-1 rounded transition-all cursor-pointer" href="#">
                  <span className="material-symbols-outlined text-[12px]">hub</span>github
                </a>
                <a className="flex items-center gap-1.5 text-[10px] font-mono text-white/60 bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 px-2.5 py-1 rounded transition-all cursor-pointer" href="#">
                  <span className="material-symbols-outlined text-[12px]">group</span>linkedin
                </a>
                <a className="flex items-center gap-1.5 text-[10px] font-mono text-white/60 bg-white/5 hover:bg-purple-500/10 hover:text-purple-400 border border-white/10 hover:border-purple-500/30 px-2.5 py-1 rounded transition-all cursor-pointer" href="#">
                  <span className="material-symbols-outlined text-[12px]">alternate_email</span>twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-emerald-500/60 w-3">├─</span>
              <span className="text-white/40 group-hover:text-emerald-400 transition-colors text-[11px] w-14">status:</span>
              <span className="flex items-center gap-0 border border-emerald-500/30 rounded px-0 py-0.5 bg-emerald-500/5 overflow-hidden">
                <span className="px-2 py-0.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)] animate-pulse block"></span></span>
                <span className="w-[1px] h-4 bg-emerald-500/30"></span>
                <span className="text-emerald-400/80 text-[12px] font-bold px-2">OPEN_TO_WORK</span>
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-emerald-500/60 w-3">├─</span>
              <span className="text-white/40 group-hover:text-emerald-400 transition-colors text-[11px] w-14">focus:</span>
              <span className="text-white/60 group-hover:text-emerald-300/80 transition-colors text-[12px]">Full Stack · UI Engineering</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-emerald-500/60 w-3">└─</span>
              <span className="text-white/40 group-hover:text-emerald-400 transition-colors text-[11px] w-14">location:</span>
              <span className="text-white/60 group-hover:text-emerald-300/80 transition-colors text-[12px]">Berlin, Germany</span>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-3">
          <button className="w-full bg-primary/5 text-primary py-3 rounded border border-primary/30 font-bold text-[13px] font-mono uppercase tracking-widest hover:bg-primary/10 hover:border-primary/50 transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-[14px]">download</span>
            ./DOWNLOAD_RESUME.SH
          </button>
        </div>
      </div>
    </TerminalCard>
  );
}
