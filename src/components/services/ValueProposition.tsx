
import React from 'react';
import { Target, Zap, Shield, Clock, User, Code } from 'lucide-react';
import ServiceFeature from '@/components/ui/ServiceFeature';

const ValueProposition: React.FC = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center reveal-item opacity-0">
        Our Approach to Delivering Value
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <ServiceFeature
          title="Results-Driven Approach"
          description="We focus on delivering measurable results and ROI for all our client engagements, using data-driven strategies to maximize impact."
          icon={Target}
          className="reveal-item opacity-0"
        />
        <ServiceFeature
          title="Innovative Solutions"
          description="Cutting-edge technologies and creative strategies that keep you ahead of competitors and position your business for long-term success."
          icon={Zap}
          className="reveal-item opacity-0"
        />
        <ServiceFeature
          title="Expert Team"
          description="Specialists with extensive experience across multiple industries and technologies, bringing valuable insights to every project."
          icon={Shield}
          className="reveal-item opacity-0"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceFeature
          title="Fast Delivery"
          description="Efficient project management and agile methodologies ensure timely delivery of high-quality solutions that meet deadlines."
          icon={Clock}
          className="reveal-item opacity-0"
        />
        <ServiceFeature
          title="Client-Centric Focus"
          description="We prioritize your business needs and goals, creating customized solutions that align with your vision and objectives."
          icon={User}
          className="reveal-item opacity-0"
        />
        <ServiceFeature
          title="Scalable Technology"
          description="Our solutions are built to scale with your business, adapting to changing requirements and growing user demands."
          icon={Code}
          className="reveal-item opacity-0"
        />
      </div>
    </div>
  );
};

export default ValueProposition;
