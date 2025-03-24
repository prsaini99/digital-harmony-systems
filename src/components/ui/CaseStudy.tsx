
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface CaseStudyProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  results: string[];
  industry: string;
  image?: string;
  className?: string;
}

const CaseStudy = ({ 
  title, 
  description, 
  results, 
  industry,
  image,
  className, 
  ...props 
}: CaseStudyProps) => {
  return (
    <div 
      className={cn(
        'relative overflow-hidden glass-card flex flex-col md:flex-row gap-6 p-6',
        className
      )}
      {...props}
    >
      <div className="md:w-1/2 lg:w-3/5 flex flex-col">
        <div className="mb-4">
          <span className="inline-block py-1 px-2 text-xs font-medium bg-brand-100 text-brand-700 rounded-full">
            {industry}
          </span>
        </div>
        <h3 className="mb-3">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        
        <div className="mt-auto">
          <h4 className="text-base font-medium mb-2">Key Results:</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight size={16} className="mr-1 mt-1 text-brand-500 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {image && (
        <div className="md:w-1/2 lg:w-2/5">
          <div className="h-full w-full rounded-lg overflow-hidden bg-muted">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
