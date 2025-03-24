
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { GlobeLock, Code, Award, ActivitySquare, Smartphone, Bitcoin, Rocket, BarChart, Search, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 reveal">
      <Container>
        <SectionTitle 
          title="Our Services"
          subtitle="We combine creativity, advanced technology, and data-driven strategies to deliver real, measurable results."
        />
        
        {/* Digital Marketing Services */}
        <div className="mb-16 reveal-bottom">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 pb-2 border-b border-gray-100 flex items-center">
            Digital Marketing
            <Link to="/services" className="ml-auto text-base font-medium text-brand-600 hover:text-brand-700 flex items-center">
              View all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Google Ads Specialization"
              description="Strategic Google Ads campaigns optimized for maximum ROI and conversions."
              icon={Search}
              delay={100}
            />
            
            <ServiceCard 
              title="SEO & SEM"
              description="Comprehensive search engine optimization and marketing strategies to improve visibility."
              icon={GlobeLock}
              delay={200}
            />
            
            <ServiceCard 
              title="Programmatic Advertising"
              description="Advanced automated ad buying with Amazon DSP and Google ADex for precise targeting."
              icon={BarChart}
              delay={300}
            />
            
            <ServiceCard 
              title="Social Media Marketing"
              description="Strategic social media campaigns across platforms to increase brand awareness and engagement."
              icon={Users}
              delay={400}
            />
            
            <ServiceCard 
              title="Influencer Marketing"
              description="Connecting brands with the right influencers to amplify their message and reach."
              icon={Award}
              delay={500}
            />
            
            <ServiceCard 
              title="Lead Generation & Scoring"
              description="Comprehensive lead generation strategies with advanced scoring for quality prospects."
              icon={ActivitySquare}
              delay={600}
            />
          </div>
        </div>
        
        {/* Software & Tech Solutions */}
        <div className="mb-16 reveal-bottom">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 pb-2 border-b border-gray-100 flex items-center">
            Software & Tech Solutions
            <Link to="/services" className="ml-auto text-base font-medium text-brand-600 hover:text-brand-700 flex items-center">
              View all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Blockchain & Crypto"
              description="Custom blockchain solutions including smart contracts, DApps, and crypto exchange development."
              icon={Bitcoin}
              delay={100}
            />
            
            <ServiceCard 
              title="AR/VR Development"
              description="Immersive augmented and virtual reality experiences for travel, navigation, and marketing."
              icon={Smartphone}
              delay={200}
            />
            
            <ServiceCard 
              title="Custom Software"
              description="Tailored software solutions built with cutting-edge technologies to meet specific business needs."
              icon={Code}
              delay={300}
            />
          </div>
        </div>
        
        {/* Product Development */}
        <div className="reveal-bottom">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 pb-2 border-b border-gray-100 flex items-center">
            Product Development
            <Link to="/services" className="ml-auto text-base font-medium text-brand-600 hover:text-brand-700 flex items-center">
              View all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Complete Product Lifecycle"
              description="End-to-end product development from concept and strategy to MVP and scaling."
              icon={Rocket}
              delay={100}
            />
            
            <ServiceCard 
              title="UI/UX Design"
              description="User-centered design focused on creating intuitive, engaging digital experiences."
              icon={Smartphone}
              delay={200}
            />
            
            <ServiceCard 
              title="Market Fit Analysis"
              description="Comprehensive market research and analysis to ensure product-market fit and success."
              icon={ActivitySquare}
              delay={300}
            />
          </div>
        </div>
        
        <div className="mt-16 text-center reveal-bottom">
          <Link to="/services">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Explore All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Services;
