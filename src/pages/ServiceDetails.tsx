
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
              className="mb-16"
            />
            
            {/* Hero banner for services */}
            <div className="glass-card p-8 mb-16 reveal-item opacity-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Strategic Solutions for Modern Businesses</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    At 11Point2, we provide comprehensive digital services that help businesses 
                    adapt and thrive in today's competitive landscape. From digital marketing 
                    to custom software development, we deliver solutions that drive measurable 
                    results.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our expert teams combine deep industry knowledge with cutting-edge 
                    technology to create strategies that align with your business goals 
                    and deliver long-term value.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-brand-100 to-brand-50 p-8 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center">1</div>
                      <p className="font-medium">Consultation & Strategy Development</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center">2</div>
                      <p className="font-medium">Solution Design & Implementation</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center">3</div>
                      <p className="font-medium">Optimization & Measurement</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center">4</div>
                      <p className="font-medium">Continuous Support & Improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
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
