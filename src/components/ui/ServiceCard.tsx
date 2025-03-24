
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  linkTo?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0,
  linkTo,
  className, 
  ...props 
}: ServiceCardProps) => {
  const content = (
    <>
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brand-100 text-brand-600">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {linkTo && (
        <div className="mt-4 text-brand-600 hover:text-brand-700 flex items-center text-sm font-medium">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      )}
    </>
  );
  
  return linkTo ? (
    <Link
      to={linkTo}
      className={cn(
        'glass-card p-6 md:p-8 h-full block transition-all duration-300 hover:translate-y-[-5px]',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        opacity: 0,
        animation: `fade-in 0.6s ease-out ${delay}ms forwards` 
      }}
    >
      {content}
    </Link>
  ) : (
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
      {content}
    </div>
  );
};

export default ServiceCard;
