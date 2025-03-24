
import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 reveal">
      <Container>
        <SectionTitle 
          title="About 11Point2"
          subtitle="We combine creativity, advanced technology, and data-driven strategies to deliver real, measurable results."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-bottom">
          <div>
            <div className="glass-card p-6 md:p-8 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
              
              <ul className="space-y-4">
                {[
                  "Full-stack Digital Marketing",
                  "Advanced Software & Product Development",
                  "Specialized Blockchain & Web3 Solutions",
                  "AR/VR Immersive Experiences",
                  "Strategic Data Analytics",
                  "Market Research & Positioning"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} className="mr-3 mt-0.5 text-brand-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-100 rounded-full opacity-20 blur-3xl z-0" />
            </div>
            
            <div className="mt-8 p-6 md:p-8 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-6">
                We believe in a collaborative, transparent approach that focuses on understanding your business goals and delivering measurable results. Our process is data-driven and agile, allowing us to adapt quickly to changing market conditions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Data-Driven",
                  "Innovative",
                  "Transparent",
                  "Collaborative",
                  "Results-Focused",
                  "Agile"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="text-center py-2 px-3 bg-white rounded-md border border-gray-100 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative reveal-right">
            <div className="aspect-video bg-gradient-to-br from-brand-100 to-teal-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Results that Speak</h3>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-brand-700 mb-2">150%</div>
                      <p className="text-sm text-muted-foreground">Avg. Revenue Increase</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-brand-700 mb-2">30%</div>
                      <p className="text-sm text-muted-foreground">Lower Acquisition Cost</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-brand-700 mb-2">50+</div>
                      <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-brand-700 mb-2">200+</div>
                      <p className="text-sm text-muted-foreground">Completed Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 absolute -bottom-12 -right-6 md:right-6 max-w-xs z-10 border border-white/20 shadow-xl">
              <p className="italic text-muted-foreground">
                "11Point2 has been instrumental in our digital transformation journey. Their expertise in digital marketing and blockchain technology has helped us achieve remarkable results."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="font-medium text-brand-700">AC</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Alex Chen</p>
                  <p className="text-sm text-muted-foreground">CEO, TechVentures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
