
import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import CaseStudiesSection from '../ui/CaseStudiesSection';
import ClientsSection from './ClientsSection';

const Clients = () => {
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
    <section id="clients" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 reveal">
      <Container>
        <SectionTitle 
          title="Our Clients"
          subtitle="We've partnered with leading companies across various industries to deliver exceptional results."
        />
        
        {/* Case Studies */}
        <CaseStudiesSection />
        
        {/* Client Categories */}
        <ClientsSection />
      </Container>
    </section>
  );
};

export default Clients;
