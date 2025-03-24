
import React from 'react';
import Container from '../ui/Container';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center text-2xl font-heading font-bold mb-4">
              <img 
                src="/lovable-uploads/038e12d7-9b37-4f4c-88a5-edb60da5e3af.png" 
                alt="11Point2 Logo" 
                className="h-8 mr-2"
              />
              <span>
                <span>11</span>
                <span className="text-brand-600">Point</span>
                <span>2</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-4">
              Your Results-Driven Partner in Digital Marketing, Software, Product & Blockchain Development
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/11point2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-600 hover:bg-brand-50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Product Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Blockchain & Crypto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Travel & Tourism
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Crypto & Fintech
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  EdTech
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-0.5 text-brand-600" />
                <a href="mailto:pranav@11point2.in" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  pranav@11point2.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-0.5 text-brand-600" />
                <a href="tel:+919819543753" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  +91 9819543753
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 11Point2. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
