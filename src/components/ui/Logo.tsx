
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className, size = 'md', showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };
  
  return (
    <div className={cn('flex items-center', className)}>
      <img 
        src="/lovable-uploads/038e12d7-9b37-4f4c-88a5-edb60da5e3af.png"
        alt="11Point2 Logo" 
        className={cn('mr-2', sizeClasses[size])}
      />
      {showText && (
        <span className="font-heading font-bold">
          <span>11</span>
          <span className="text-brand-600">Point</span>
          <span>2</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
