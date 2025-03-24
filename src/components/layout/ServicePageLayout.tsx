
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

interface ServicePageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ 
  title, 
  subtitle, 
  children 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <Container>
            <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
            
            <SectionTitle 
              title={title}
              subtitle={subtitle}
              alignment="left"
              className="mb-12"
            />
            
            {children}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
