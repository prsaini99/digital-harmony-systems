
import React from 'react';
import CaseStudy from './CaseStudy';

const CaseStudiesSection = () => {
  return (
    <div className="mb-16 space-y-10 reveal-bottom">
      <CaseStudy 
        company="Ease My Trip"
        industry="Travel & Tourism"
        challenge="High cost per acquisition and need for increased booking volume"
        solution="Comprehensive digital marketing campaign with optimized targeting and conversion tracking"
        results={[
          "Reduced CPA from 18% to 12%",
          "Increased revenue by 150%",
          "Improved conversion rates across all channels"
        ]}
      />
      
      <CaseStudy 
        company="Fortis Hospitals"
        industry="Healthcare"
        challenge="Need to increase visibility and patient acquisition for oncology services"
        solution="Targeted digital marketing campaign with specialized healthcare advertising strategies"
        results={[
          "Increased oncology footfall by 30%",
          "Enhanced online appointment bookings",
          "Improved digital presence in healthcare space"
        ]}
      />
      
      <CaseStudy 
        company="QI Blockchain"
        industry="Crypto & Fintech"
        challenge="Need for comprehensive blockchain ecosystem development"
        solution="End-to-end blockchain solution development including DEX, NFTs, and wallet integration"
        results={[
          "Successful launch of decentralized exchange",
          "Secure wallet infrastructure implementation",
          "NFT marketplace development and integration"
        ]}
      />
    </div>
  );
};

export default CaseStudiesSection;
