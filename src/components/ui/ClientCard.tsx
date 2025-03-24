
import React from 'react';
import { cn } from '@/lib/utils';

interface ClientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  logo?: string;
  industry: string;
  results?: string;
  className?: string;
  delay?: number;
}

const ClientCard = ({ 
  name, 
  logo, 
  industry, 
  results,
  delay = 0,
  className, 
  ...props 
}: ClientCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card p-5 h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px]',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${delay}ms forwards` 
      }}
      {...props}
    >
      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {industry}
        </span>
      </div>
      <h4 className="mb-2">{name}</h4>
      {results && (
        <p className="mt-auto pt-3 text-sm text-muted-foreground">
          {results}
        </p>
      )}
    </div>
  );
};

export default ClientCard;
