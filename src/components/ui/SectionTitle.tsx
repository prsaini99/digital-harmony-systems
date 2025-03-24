
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className,
  ...props 
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  return (
    <div 
      className={cn(
        'max-w-3xl mb-12',
        alignmentClasses[alignment],
        className
      )}
      {...props}
    >
      <div className="inline-block mb-4">
        <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider bg-brand-100 text-brand-700 uppercase rounded-full animate-fade-in">
          11Point2
        </span>
      </div>
      <h2 className="mb-4 animate-fade-in">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground animate-fade-in">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
