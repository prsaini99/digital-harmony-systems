
import React from 'react';
import { ArrowRight, Rocket, Lightbulb, BarChart3, Smartphone, Users, LineChart, Target, RefreshCw } from 'lucide-react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductDevelopmentPage = () => {
  return (
    <ServicePageLayout
      title="Product Development"
      subtitle="End-to-end product development services that transform ideas into market-ready digital products with impact."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <ServiceFeature
          title="Ideation & Product Strategy"
          description="Collaborative workshops and strategic planning to define your product vision, goals, and roadmap for success."
          icon={Lightbulb}
        />
        
        <ServiceFeature
          title="Market Research & Analysis"
          description="Comprehensive market analysis, competitor research, and user insights to validate product concepts and identify opportunities."
          icon={BarChart3}
        />
        
        <ServiceFeature
          title="UI/UX Design"
          description="User-centered design process creating intuitive interfaces and engaging user experiences that drive product adoption."
          icon={Smartphone}
        />
        
        <ServiceFeature
          title="MVP Development"
          description="Rapid development of Minimum Viable Products to validate core concepts, gather user feedback, and iterate efficiently."
          icon={Rocket}
        />
        
        <ServiceFeature
          title="User Testing & Validation"
          description="Structured user testing programs to gather actionable insights and validate design decisions before full implementation."
          icon={Users}
        />
        
        <ServiceFeature
          title="Product-Market Fit Analysis"
          description="Data-driven assessment of product-market fit with recommendations for optimizing features and positioning."
          icon={Target}
        />
        
        <ServiceFeature
          title="Growth & Scaling Strategies"
          description="Strategic planning for product growth, user acquisition, and scaling infrastructure to support expansion."
          icon={LineChart}
        />
        
        <ServiceFeature
          title="Continuous Improvement"
          description="Ongoing optimization through analytics, user feedback, and iterative development to enhance product performance."
          icon={RefreshCw}
        />
      </div>
      
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6">Our Product Development Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="font-semibold mb-4 text-lg">Discover</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Stakeholder interviews</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Market & competitor analysis</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>User research & personas</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Opportunity identification</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Product vision workshop</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="font-semibold mb-4 text-lg">Design & Validate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>User journey mapping</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Wireframing & prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Visual design system</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Usability testing</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Concept validation</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="font-semibold mb-4 text-lg">Build & Scale</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>MVP development</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Iterative improvement</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Analytics implementation</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Feature expansion</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 mr-2"></span>
                <span>Growth strategy execution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose Us for Product Development?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 mt-0.5">✓</div>
                <p className="text-muted-foreground"><span className="font-medium text-foreground">Cross-functional expertise</span> – Our team brings together product, design, and development expertise for holistic product creation.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 mt-0.5">✓</div>
                <p className="text-muted-foreground"><span className="font-medium text-foreground">User-centered approach</span> – We put users at the center of the development process to ensure products that delight.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 mt-0.5">✓</div>
                <p className="text-muted-foreground"><span className="font-medium text-foreground">Speed to market</span> – Our agile processes enable rapid development, testing, and iteration cycles.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 mt-0.5">✓</div>
                <p className="text-muted-foreground"><span className="font-medium text-foreground">Data-driven decisions</span> – We leverage analytics to validate assumptions and refine product direction.</p>
              </li>
            </ul>
          </div>
          <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
            <h4 className="text-lg font-semibold mb-4">Product Development Timeline</h4>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-24 text-sm font-medium">Weeks 1-2</div>
                <div className="flex-1 text-sm">Discovery & Strategy</div>
              </div>
              <div className="flex">
                <div className="w-24 text-sm font-medium">Weeks 3-4</div>
                <div className="flex-1 text-sm">Design & Prototyping</div>
              </div>
              <div className="flex">
                <div className="w-24 text-sm font-medium">Weeks 5-8</div>
                <div className="flex-1 text-sm">MVP Development</div>
              </div>
              <div className="flex">
                <div className="w-24 text-sm font-medium">Weeks 9-10</div>
                <div className="flex-1 text-sm">Testing & Validation</div>
              </div>
              <div className="flex">
                <div className="w-24 text-sm font-medium">Week 11+</div>
                <div className="flex-1 text-sm">Launch & Iteration</div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">*Timeline varies based on product complexity and scope</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to Bring Your Product Idea to Life?</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let our experienced product team help you transform your vision into a successful digital product that resonates with users and achieves your business objectives.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
            Start Your Product Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </ServicePageLayout>
  );
};

export default ProductDevelopmentPage;
