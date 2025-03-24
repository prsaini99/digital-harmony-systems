
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ValueProposition from '@/components/services/ValueProposition';
import ServiceCategoryCard from '@/components/services/ServiceCategoryCard';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ContactCTA from '@/components/services/ContactCTA';
import { serviceCategories } from '@/data/serviceCategories';

const ServiceDetails = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
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
    
    const revealElements = document.querySelectorAll('.reveal-item');
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <Container>
            <SectionTitle 
              title="Our Services"
              subtitle="Comprehensive solutions tailored to drive your business forward"
            />
            
            {/* Value proposition section */}
            <ValueProposition />
            
            <div className="mt-12 space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <ServiceCategoryCard 
                  key={categoryIndex}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  path={category.path}
                  services={category.services}
                  categoryIndex={categoryIndex}
                />
              ))}
            </div>
            
            {/* Why Choose Us section */}
            <WhyChooseUs />
            
            {/* Contact CTA section */}
            <ContactCTA />
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
