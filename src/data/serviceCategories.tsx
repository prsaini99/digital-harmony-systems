
import React from 'react';
import { 
  Search, Code, Bitcoin, Rocket, GlobeLock, BarChart, 
  Users, Award, MessageSquare, Target, FileCode, Smartphone, 
  Database, Cpu, Lightbulb, Figma, TrendingUp, BarChartHorizontal
} from 'lucide-react';

export interface ServiceItemType {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceCategoryType {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  services: ServiceItemType[];
}

export const serviceCategories: ServiceCategoryType[] = [
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to increase visibility, engagement, and conversions.",
    icon: <Search size={32} />,
    path: "/services/digital-marketing",
    services: [
      {
        name: "Google Ads & PPC Strategies",
        description: "Comprehensive breakdown of Google Ads & PPC strategies for maximum ROI.",
        icon: <Search size={24} />
      },
      {
        name: "SEO & SEM Implementation",
        description: "Detailed SEO & SEM implementation to improve organic rankings and visibility.",
        icon: <GlobeLock size={24} />
      },
      {
        name: "Programmatic Advertising",
        description: "Advanced programmatic advertising techniques with Amazon DSP and Google ADex.",
        icon: <BarChart size={24} />
      },
      {
        name: "Social Media Campaigns",
        description: "Strategic social media campaigns and strategies across all major platforms.",
        icon: <Users size={24} />
      },
      {
        name: "Influencer Collaboration",
        description: "Effective influencer collaboration management and campaign execution.",
        icon: <Award size={24} />
      },
      {
        name: "Reputation Management",
        description: "Online reputation management and crisis communication strategies.",
        icon: <MessageSquare size={24} />
      },
      {
        name: "Lead Generation",
        description: "Effective lead generation & conversion processes to drive business growth.",
        icon: <Target size={24} />
      }
    ]
  },
  {
    title: "Blockchain & Crypto Solutions",
    description: "Comprehensive blockchain and cryptocurrency solutions for the modern digital economy.",
    icon: <Bitcoin size={32} />,
    path: "/services/blockchain-crypto",
    services: [
      {
        name: "Smart Contract Creation",
        description: "Custom smart contract creation and auditing for secure blockchain transactions.",
        icon: <FileCode size={24} />
      },
      {
        name: "Crypto Exchange Solutions",
        description: "Crypto exchange and wallet solutions with robust security features.",
        icon: <Bitcoin size={24} />
      },
      {
        name: "DApp Development",
        description: "Decentralized application development and management on various blockchains.",
        icon: <Database size={24} />
      },
      {
        name: "DAO Implementation",
        description: "Decentralized Autonomous Organization implementation and governance.",
        icon: <Users size={24} />
      },
      {
        name: "Trading Bots",
        description: "Crypto trading bots and automation for efficient market participation.",
        icon: <Cpu size={24} />
      },
      {
        name: "Supply Chain Solutions",
        description: "Blockchain applications for supply chain transparency and efficiency.",
        icon: <BarChartHorizontal size={24} />
      },
      {
        name: "NFT Marketplaces",
        description: "NFT marketplaces and asset tokenization platforms for digital assets.",
        icon: <Database size={24} />
      }
    ]
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to meet your specific business needs.",
    icon: <Code size={32} />,
    path: "/services/software-development",
    services: [
      {
        name: "Enterprise Solutions",
        description: "Enterprise custom software solutions for complex business requirements.",
        icon: <Database size={24} />
      },
      {
        name: "Web & Mobile Apps",
        description: "Web & mobile application development with cutting-edge technologies.",
        icon: <Smartphone size={24} />
      },
      {
        name: "AR & VR Applications",
        description: "Augmented reality and virtual reality application development for immersive experiences.",
        icon: <Smartphone size={24} />
      },
      {
        name: "IoT Solutions",
        description: "Internet of Things solutions and integration for connected devices.",
        icon: <Cpu size={24} />
      },
      {
        name: "AI & Machine Learning",
        description: "Artificial intelligence and machine learning applications for data-driven insights.",
        icon: <Cpu size={24} />
      }
    ]
  },
  {
    title: "Product Development",
    description: "End-to-end product development services from concept to market.",
    icon: <Rocket size={32} />,
    path: "/services/product-development",
    services: [
      {
        name: "Ideation & Strategy",
        description: "Ideation and product strategy to define your product vision.",
        icon: <Lightbulb size={24} />
      },
      {
        name: "UI/UX Design",
        description: "User interface and user experience design and prototyping for optimal user engagement.",
        icon: <Figma size={24} />
      },
      {
        name: "MVP Creation",
        description: "Minimum viable product creation and scaling strategies.",
        icon: <Rocket size={24} />
      },
      {
        name: "Market Fit Research",
        description: "Product-market fit research to ensure product success.",
        icon: <Target size={24} />
      },
      {
        name: "Optimization",
        description: "Ongoing optimization for product growth and user retention.",
        icon: <TrendingUp size={24} />
      }
    ]
  }
];
