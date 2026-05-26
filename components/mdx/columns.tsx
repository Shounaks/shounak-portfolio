import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ColumnsProps {
  children: ReactNode;
  className?: string;
  first?: 'left' | 'center' | 'right';
  second?: 'left' | 'center' | 'right';
}

const alignments = ['left', 'center', 'right'] as const;

export function Columns({ children, className, first, second }: ColumnsProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose',
        first === 'center' && '[&>:nth-child(1)]:text-center',
        first === 'right' && '[&>:nth-child(1)]:text-right',
        second === 'center' && '[&>:nth-child(2)]:text-center',
        second === 'right' && '[&>:nth-child(2)]:text-right',
        className,
      )}
    >
      {children}
    </div>
  );
}
