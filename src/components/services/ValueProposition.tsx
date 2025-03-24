
import React from 'react';
import { Target, Zap, Shield } from 'lucide-react';
import ServiceFeature from '@/components/ui/ServiceFeature';

const ValueProposition: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <ServiceFeature
        title="Results-Driven Approach"
        description="We focus on delivering measurable results and ROI for all our client engagements."
        icon={Target}
        className="reveal-item opacity-0"
      />
      <ServiceFeature
        title="Innovative Solutions"
        description="Cutting-edge technologies and creative strategies that keep you ahead of competitors."
        icon={Zap}
        className="reveal-item opacity-0"
      />
      <ServiceFeature
        title="Expert Team"
        description="Specialists with extensive experience across multiple industries and technologies."
        icon={Shield}
        className="reveal-item opacity-0"
      />
    </div>
  );
};

export default ValueProposition;
