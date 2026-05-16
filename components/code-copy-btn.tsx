'use client';

import { useEffect, useRef } from 'react';

export function CodeCopyHandler({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest('[data-copy]');
      if (!btn) return;
      const pre = btn.closest('.group')?.querySelector('pre');
      if (!pre) return;
      const code = pre.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
      });
    };

    el.addEventListener('click', handleClick);
    return () => el.removeEventListener('click', handleClick);
  }, []);

  return <div ref={ref}>{children}</div>;
}
