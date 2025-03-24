
import React from 'react';
import ClientCategory from '../ui/ClientCategory';

// Travel clients data
const travelClients = [
  {
    name: "Ease My Trip",
    industry: "Travel",
    results: "CPA reduced from 18% to 12%, Revenue up 150%"
  },
  {
    name: "Agoda",
    industry: "Travel",
    results: "Generated 3,000 leads, lowered CPL by over 50%"
  },
  {
    name: "Booking.com",
    industry: "Travel",
    results: "Improved CPA from 12% to 10.5%, Revenue up 25%"
  },
  {
    name: "MakeMyTrip",
    industry: "Travel",
    results: "Successful influencer marketing campaigns"
  }
];

// Healthcare clients data
const healthcareClients = [
  {
    name: "Fortis Hospitals",
    industry: "Healthcare",
    results: "Oncology footfall increased by 30%"
  },
  {
    name: "Aster Pharmacy",
    industry: "Healthcare",
    results: "CTR and revenue up by 15%"
  },
  {
    name: "Kailash Healthcare",
    industry: "Healthcare",
    results: "Increased organic traffic (30%), CTR (20%)"
  },
  {
    name: "Noble Plus Pharmacy",
    industry: "Healthcare",
    results: "Boosted revenue (25%), CTR (15%)"
  }
];

// Crypto clients data
const cryptoClients = [
  {
    name: "Unilyfe",
    industry: "Crypto",
    results: "Strategic marketing, PR, and community engagement"
  },
  {
    name: "QI Blockchain",
    industry: "Blockchain",
    results: "Blockchain ecosystem development, DEX, NFTs, and wallets"
  },
  {
    name: "Stackbinary",
    industry: "Blockchain",
    results: "Blockchain consulting, enterprise solutions, DAOs"
  },
  {
    name: "Koinbasket",
    industry: "Crypto",
    results: "Digital marketing and product development"
  },
  {
    name: "bitbatua",
    industry: "Crypto",
    results: "Crypto exchange marketing and user acquisition"
  },
  {
    name: "Floxypay",
    industry: "Fintech",
    results: "Payment solutions and blockchain integration"
  },
  {
    name: "Lbank",
    industry: "Crypto",
    results: "Exchange marketing and community development"
  },
  {
    name: "OkX Exchange",
    industry: "Crypto",
    results: "Strategic marketing campaigns for user growth"
  },
  {
    name: "Mexc Global Exchange",
    industry: "Crypto",
    results: "Comprehensive marketing and brand building"
  },
  {
    name: "LegalPay",
    industry: "Fintech",
    results: "Legal tech solutions and blockchain integration"
  },
  {
    name: "Curd Network",
    industry: "Blockchain",
    results: "Blockchain infrastructure development"
  }
];

// EdTech clients data
const edtechClients = [
  {
    name: "Ekeeda",
    industry: "EdTech",
    results: "Comprehensive digital marketing solutions"
  },
  {
    name: "Tagmango",
    industry: "EdTech",
    results: "Enhanced user engagement and lead generation"
  },
  {
    name: "Rigi",
    industry: "EdTech",
    results: "Marketing strategy and implementation"
  },
  {
    name: "Growthschool",
    industry: "EdTech",
    results: "Digital marketing and brand building"
  }
];

const ClientsSection = () => {
  return (
    <div className="space-y-16">
      <ClientCategory title="Travel & Tourism" clients={travelClients} />
      <ClientCategory title="Healthcare" clients={healthcareClients} />
      <ClientCategory title="Crypto & Fintech" clients={cryptoClients} />
      <ClientCategory title="EdTech" clients={edtechClients} />
    </div>
  );
};

export default ClientsSection;
