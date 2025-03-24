
import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 reveal">
      <Container>
        <SectionTitle 
          title="Contact Us"
          subtitle="Ready to achieve extraordinary results? Get in touch with our team."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-bottom">
          <div>
            <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking to boost your digital marketing efforts, develop a custom software solution, or explore blockchain opportunities, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-4">
                    <Mail size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Email Us</h4>
                    <a href="mailto:pranav@11point2.in" className="text-brand-600 hover:text-brand-700 transition-colors">
                      pranav@11point2.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-4">
                    <Phone size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Call Us</h4>
                    <a href="tel:+919819543753" className="text-brand-600 hover:text-brand-700 transition-colors">
                      +91 9819543753
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-4">
                    <Linkedin size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Follow Us</h4>
                    <a 
                      href="https://www.linkedin.com/company/11point2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      11Point2 on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Our Industries</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Travel & Tourism",
                  "Healthcare",
                  "Crypto & Fintech",
                  "EdTech",
                  "E-commerce",
                  "Portfolio Management",
                  "Technology",
                  "Web3"
                ].map((industry, index) => (
                  <div 
                    key={index}
                    className="py-2 px-3 bg-white/60 border border-gray-100 rounded-md text-sm"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal-right">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
