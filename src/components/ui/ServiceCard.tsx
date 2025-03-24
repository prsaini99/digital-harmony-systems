
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0,
  className, 
  ...props 
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card p-6 md:p-8 h-full',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        opacity: 0,
        animation: `fade-in 0.6s ease-out ${delay}ms forwards` 
      }}
      {...props}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brand-100 text-brand-700">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
