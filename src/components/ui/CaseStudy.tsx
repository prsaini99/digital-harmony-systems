
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './badge';

interface CaseStudyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'results'> {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  delay?: number;
}

const CaseStudy = ({
  company,
  industry,
  challenge,
  solution,
  results,
  delay = 0,
  className,
  ...props
}: CaseStudyProps) => {
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
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Badge variant="outline" className="bg-brand-50 text-brand-700 border-brand-200">
            {industry}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">{company}</h3>
        
        <div className="space-y-4 flex-grow">
          <div>
            <h4 className="text-base font-medium mb-1">Challenge</h4>
            <p className="text-sm text-muted-foreground">{challenge}</p>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-1">Solution</h4>
            <p className="text-sm text-muted-foreground">{solution}</p>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-1">Results</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
