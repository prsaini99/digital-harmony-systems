
import React from 'react';
import { ArrowRight, Bitcoin, Code, Layers, ShieldCheck, Database, GanttChart, Sparkles } from 'lucide-react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const clients = [
  {
    name: "Unilyfe",
    service: "Strategic marketing, PR, and community engagement"
  },
  {
    name: "QI Blockchain",
    service: "Blockchain ecosystem development, DEX, NFTs, and wallets"
  },
  {
    name: "Koinbasket",
    service: "Digital marketing and product development"
  },
  {
    name: "bitbatua",
    service: "Crypto exchange marketing and user acquisition"
  },
  {
    name: "Lbank",
    service: "Exchange marketing and community development"
  },
  {
    name: "OkX Exchange",
    service: "Strategic marketing campaigns for user growth"
  }
];

const BlockchainCryptoPage = () => {
  return (
    <ServicePageLayout
      title="Blockchain & Crypto Solutions"
      subtitle="Cutting-edge blockchain development, smart contracts, DApps, and comprehensive crypto solutions for businesses of all sizes."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <ServiceFeature
          title="Smart Contract Development"
          description="Custom smart contract creation, testing, and deployment with rigorous security auditing and optimization for various blockchain platforms."
          icon={Code}
        />
        
        <ServiceFeature
          title="Crypto Exchange & Wallet Development"
          description="Secure, scalable cryptocurrency exchange platforms and wallet solutions with robust security features and intuitive user interfaces."
          icon={Bitcoin}
        />
        
        <ServiceFeature
          title="DApp Development"
          description="Full-stack decentralized application development from concept to deployment with frontend and backend integration."
          icon={Layers}
        />
        
        <ServiceFeature
          title="DAO Implementation"
          description="Decentralized Autonomous Organization structure development with governance mechanisms, voting systems, and treasury management."
          icon={GanttChart}
        />
        
        <ServiceFeature
          title="Tokenization Solutions"
          description="Asset tokenization platforms, NFT marketplaces, and token economic models designed for long-term sustainability."
          icon={Sparkles}
        />
        
        <ServiceFeature
          title="Blockchain for Enterprise"
          description="Custom blockchain implementations for supply chain, logistics, healthcare, finance, and other industry-specific solutions."
          icon={Database}
        />
        
        <ServiceFeature
          title="Security Auditing"
          description="Comprehensive security assessment and vulnerability testing for blockchain applications and smart contracts."
          icon={ShieldCheck}
        />
      </div>
      
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6">Technologies We Work With</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Ethereum", "Solana", "Polygon", "Binance Smart Chain", 
            "Avalanche", "Polkadot", "Cardano", "Cosmos",
            "IPFS", "Web3.js", "Ethers.js", "Hardhat",
            "Truffle", "Solidity", "Rust", "The Graph"
          ].map((tech, index) => (
            <div 
              key={index} 
              className="py-3 px-4 bg-brand-50 border border-brand-100 rounded-md text-center text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-6">Our Crypto Clients</h3>
      <Carousel className="mb-16">
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{client.name}</h4>
                  <p className="text-muted-foreground text-sm">{client.service}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to Build on Blockchain?</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're looking to develop smart contracts, create a DApp, or implement blockchain in your business, our team has the expertise to help.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
            Start Your Blockchain Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </ServicePageLayout>
  );
};

export default BlockchainCryptoPage;
