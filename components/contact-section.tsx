import { TerminalCard } from './terminal-card';

export function ContactSection() {
  return (
    <TerminalCard title="Contact.sh" icon="terminal" variant="primary" className="flex-1">
      <div className="p-8 pb-20 font-mono flex flex-col justify-center flex-1 relative">
        <div className="space-y-1 text-[12px] font-mono">
          <p className="text-emerald-500/80">
            <span className="text-emerald-400">&gt;</span> BYPASSING_FIREWALL... [SUCCESS]
          </p>
          <p className="text-emerald-500/80">
            <span className="text-emerald-400">&gt;</span> ESTABLISHING_SSL_TUNNEL... [STABLE]
          </p>
          <p className="text-red-500/80">
            <span className="text-red-400">&gt;</span> TARGET_NODE:{' '}
            <a href="mailto:hello@aether.design" className="text-red-300 hover:underline underline-offset-4">
              hello@aether.design
            </a>
          </p>
          <p className="text-emerald-500/80">
            <span className="text-emerald-400">&gt;</span> ENCRYPTION: SHA-256
          </p>
        </div>
        
        {/* Pinned Bottom Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
          <button className="w-full bg-red-500/5 text-red-500 py-3 rounded border border-red-500/30 font-bold text-[13px] font-mono uppercase tracking-widest hover:bg-red-500/10 hover:border-red-500/50 transition-all backdrop-blur-sm cursor-pointer">
            ./RUN_CONTACT_MODULE.SH
          </button>
        </div>
      </div>
    </TerminalCard>
  );
}
