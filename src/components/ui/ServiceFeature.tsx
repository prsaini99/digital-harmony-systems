
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className 
}) => {
  return (
    <div className={cn("glass-card p-6 md:p-8", className)}>
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-600 mr-4">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceFeature;
