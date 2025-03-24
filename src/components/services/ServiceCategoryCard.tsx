
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardDescription } from '@/components/ui/card';

interface ServiceItemProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  services: ServiceItemProps[];
  categoryIndex: number;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  title,
  description,
  icon,
  path,
  services,
  categoryIndex
}) => {
  return (
    <div className="reveal-item opacity-0 transition-all duration-500">
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600">
            {icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </div>
        
        <div className="md:ml-auto">
          <Link to={path}>
            <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardDescription className="text-lg text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, serviceIndex) => (
          <div 
            key={serviceIndex}
            className="glass-card p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px]"
            style={{ 
              animationDelay: `${serviceIndex * 100}ms`, 
              opacity: 0,
              animation: `fade-in 0.5s ease-out ${serviceIndex * 100}ms forwards` 
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand-600">
                {service.icon}
              </div>
              <h3 className="font-semibold">{service.name}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
            <Link 
              to={path} 
              className="text-brand-600 hover:text-brand-700 flex items-center text-sm font-medium mt-auto"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategoryCard;
