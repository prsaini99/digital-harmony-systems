
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const revealElements = document.querySelectorAll('.reveal');
      const revealBottomElements = document.querySelectorAll('.reveal-bottom');
      const revealLeftElements = document.querySelectorAll('.reveal-left');
      const revealRightElements = document.querySelectorAll('.reveal-right');
      
      const revealAll = (elements: NodeListOf<Element>) => {
        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
          }
        });
      };
      
      revealAll(revealElements);
      revealAll(revealBottomElements);
      revealAll(revealLeftElements);
      revealAll(revealRightElements);
    };
    
    // Run once on initial load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
