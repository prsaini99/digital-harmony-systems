
import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ClientCard from '../ui/ClientCard';
import CaseStudy from '../ui/CaseStudy';

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
        <div className="mb-16 space-y-10 reveal-bottom">
          <CaseStudy 
            title="Ease My Trip"
            description="Comprehensive digital marketing campaign to increase bookings and reduce cost per acquisition."
            results={[
              "Reduced CPA from 18% to 12%",
              "Increased revenue by 150%",
              "Improved conversion rates across all channels"
            ]}
            industry="Travel & Tourism"
            image="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1731&q=80"
          />
          
          <CaseStudy 
            title="Fortis Hospitals"
            description="Targeted digital marketing campaign for specialized oncology services."
            results={[
              "Increased oncology footfall by 30%",
              "Enhanced online appointment bookings",
              "Improved digital presence in healthcare space"
            ]}
            industry="Healthcare"
            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80"
          />
          
          <CaseStudy 
            title="QI Blockchain"
            description="Complete blockchain ecosystem development including DEX, NFTs, and wallet solutions."
            results={[
              "Successful launch of decentralized exchange",
              "Secure wallet infrastructure implementation",
              "NFT marketplace development and integration"
            ]}
            industry="Crypto & Fintech"
            image="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
          />
        </div>
        
        {/* Client Categories */}
        <div className="space-y-16">
          {/* Travel Clients */}
          <div className="reveal-bottom">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Travel & Tourism</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <ClientCard 
                name="Ease My Trip"
                industry="Travel"
                results="CPA reduced from 18% to 12%, Revenue up 150%"
                delay={100}
              />
              
              <ClientCard 
                name="Agoda"
                industry="Travel"
                results="Generated 3,000 leads, lowered CPL by over 50%"
                delay={200}
              />
              
              <ClientCard 
                name="Booking.com"
                industry="Travel"
                results="Improved CPA from 12% to 10.5%, Revenue up 25%"
                delay={300}
              />
              
              <ClientCard 
                name="MakeMyTrip"
                industry="Travel"
                results="Successful influencer marketing campaigns"
                delay={400}
              />
            </div>
          </div>
          
          {/* Healthcare Clients */}
          <div className="reveal-bottom">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Healthcare</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <ClientCard 
                name="Fortis Hospitals"
                industry="Healthcare"
                results="Oncology footfall increased by 30%"
                delay={100}
              />
              
              <ClientCard 
                name="Aster Pharmacy"
                industry="Healthcare"
                results="CTR and revenue up by 15%"
                delay={200}
              />
              
              <ClientCard 
                name="Kailash Healthcare"
                industry="Healthcare"
                results="Increased organic traffic (30%), CTR (20%)"
                delay={300}
              />
              
              <ClientCard 
                name="Noble Plus Pharmacy"
                industry="Healthcare"
                results="Boosted revenue (25%), CTR (15%)"
                delay={400}
              />
            </div>
          </div>
          
          {/* Crypto Clients */}
          <div className="reveal-bottom">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Crypto & Fintech</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <ClientCard 
                name="Unilyfe"
                industry="Crypto"
                results="Strategic marketing, PR, and community engagement"
                delay={100}
              />
              
              <ClientCard 
                name="QI Blockchain"
                industry="Blockchain"
                results="Blockchain ecosystem development, DEX, NFTs, and wallets"
                delay={200}
              />
              
              <ClientCard 
                name="Stackbinary"
                industry="Blockchain"
                results="Blockchain consulting, enterprise solutions, DAOs"
                delay={300}
              />
              
              <ClientCard 
                name="Koinbasket"
                industry="Crypto"
                results="Digital marketing and product development"
                delay={400}
              />
            </div>
          </div>
          
          {/* EdTech Clients */}
          <div className="reveal-bottom">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">EdTech</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <ClientCard 
                name="Ekeeda"
                industry="EdTech"
                results="Comprehensive digital marketing solutions"
                delay={100}
              />
              
              <ClientCard 
                name="Tagmango"
                industry="EdTech"
                results="Enhanced user engagement and lead generation"
                delay={200}
              />
              
              <ClientCard 
                name="Rigi"
                industry="EdTech"
                results="Marketing strategy and implementation"
                delay={300}
              />
              
              <ClientCard 
                name="Growthschool"
                industry="EdTech"
                results="Digital marketing and brand building"
                delay={400}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
