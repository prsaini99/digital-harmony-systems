
import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateHeading = () => {
      if (headingRef.current) {
        headingRef.current.style.opacity = '1';
        headingRef.current.style.transform = 'translateY(0)';
      }
    };
    
    const animateSubtitle = () => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }
    };
    
    const animateServices = () => {
      if (servicesRef.current) {
        servicesRef.current.style.opacity = '1';
        servicesRef.current.style.transform = 'translateY(0)';
      }
    };
    
    const animateCta = () => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = '1';
        ctaRef.current.style.transform = 'translateY(0)';
      }
    };
    
    setTimeout(animateHeading, 300);
    setTimeout(animateSubtitle, 600);
    setTimeout(animateServices, 900);
    setTimeout(animateCta, 1200);
  }, []);
  
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-hero-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/20 to-teal-50/20 z-0" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="mb-6 opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
          >
            <span className="block mb-2 text-brand-600">11Point2</span>
            Your Results-Driven Partner
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-8 text-muted-foreground opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
          >
            Digital Marketing, Software, Product & Blockchain Development
          </p>
          
          <div 
            ref={servicesRef}
            className="flex flex-wrap justify-center gap-3 mb-10 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-400"
          >
            {['Digital Marketing', 'Software Development', 'Product Development', 'Blockchain & Crypto'].map((service, index) => (
              <span 
                key={index}
                className="inline-block py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full text-sm text-muted-foreground"
              >
                {service}
              </span>
            ))}
          </div>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-600"
          >
            <a 
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-md font-medium transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#services"
              onClick={handleScrollToServices}
              className="px-8 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              Explore Services
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-100 rounded-full opacity-20 blur-3xl animate-float delay-500" />
    </section>
  );
};

export default Hero;
