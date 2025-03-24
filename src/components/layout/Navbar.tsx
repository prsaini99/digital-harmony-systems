
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <Container className="flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-heading font-bold"
        >
          <span className="text-brand-600">11</span>
          <span>Point</span>
          <span className="text-brand-600">2</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            onClick={(e) => handleNavLinkClick(e, 'services')}
            className="text-sm font-medium hover:text-brand-600 transition-colors"
          >
            Services
          </a>
          <a 
            href="#clients" 
            onClick={(e) => handleNavLinkClick(e, 'clients')}
            className="text-sm font-medium hover:text-brand-600 transition-colors"
          >
            Clients
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavLinkClick(e, 'about')}
            className="text-sm font-medium hover:text-brand-600 transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className="bg-brand-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-brand-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
        
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 pb-6 px-4 md:hidden flex flex-col transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-6">
          <a 
            href="#services" 
            onClick={(e) => handleNavLinkClick(e, 'services')}
            className="text-lg font-medium hover:text-brand-600 transition-colors"
          >
            Services
          </a>
          <a 
            href="#clients" 
            onClick={(e) => handleNavLinkClick(e, 'clients')}
            className="text-lg font-medium hover:text-brand-600 transition-colors"
          >
            Clients
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavLinkClick(e, 'about')}
            className="text-lg font-medium hover:text-brand-600 transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className="bg-brand-600 text-white py-3 px-5 rounded-md text-lg font-medium hover:bg-brand-700 transition-colors text-center mt-4"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
