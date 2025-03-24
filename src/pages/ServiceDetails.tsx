
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { 
  Search, Code, Bitcoin, Rocket, ArrowRight, GlobeLock, BarChart, 
  Users, Award, MessageSquare, Target, FileCode, Smartphone, 
  Database, Cpu, Lightbulb, Figma, TrendingUp, BarChartHorizontal,
  Zap, Shield, BriefcaseBusiness
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ServiceFeature from '@/components/ui/ServiceFeature';
import { config } from '@/lib/config';

interface ServiceCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  services: {
    name: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const ServiceDetails = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
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
    
    const revealElements = document.querySelectorAll('.reveal-item');
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const serviceCategories: ServiceCategoryProps[] = [
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <Container>
            <SectionTitle 
              title="Our Services"
              subtitle="Comprehensive solutions tailored to drive your business forward"
            />
            
            {/* Value proposition section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <ServiceFeature
                title="Results-Driven Approach"
                description="We focus on delivering measurable results and ROI for all our client engagements."
                icon={Target}
                className="reveal-item opacity-0"
              />
              <ServiceFeature
                title="Innovative Solutions"
                description="Cutting-edge technologies and creative strategies that keep you ahead of competitors."
                icon={Zap}
                className="reveal-item opacity-0"
              />
              <ServiceFeature
                title="Expert Team"
                description="Specialists with extensive experience across multiple industries and technologies."
                icon={Shield}
                className="reveal-item opacity-0"
              />
            </div>
            
            <div className="mt-12 space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="reveal-item opacity-0 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600">
                        {category.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                    </div>
                    
                    <div className="md:ml-auto">
                      <Link to={category.path}>
                        <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <Card className="mb-8">
                    <CardHeader>
                      <CardDescription className="text-lg text-muted-foreground">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="glass-card p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px]"
                        style={{ 
                          animationDelay: `${serviceIndex * 100}ms`, 
                          opacity: 0,
                          animation: `fade-in 0.5s ease-out ${serviceIndex * 100}ms forwards` 
                        }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand-600">
                            {service.icon}
                          </div>
                          <h3 className="font-semibold">{service.name}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                        <Link 
                          to={category.path} 
                          className="text-brand-600 hover:text-brand-700 flex items-center text-sm font-medium mt-auto"
                        >
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Why Choose Us section */}
            <div className="mt-20 reveal-item opacity-0">
              <SectionTitle 
                title="Why Choose Us"
                subtitle="Partner with a team that delivers excellence and tangible results"
                className="mb-10"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <Card>
                  <CardHeader>
                    <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <BriefcaseBusiness size={20} />
                    </div>
                    <CardTitle className="text-xl">Industry Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Over 10 years of experience working with clients across industries.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <Users size={20} />
                    </div>
                    <CardTitle className="text-xl">Dedicated Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">A specialized team dedicated to your project's success.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <Target size={20} />
                    </div>
                    <CardTitle className="text-xl">Data-Driven</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">All strategies and solutions backed by comprehensive data analysis.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <Zap size={20} />
                    </div>
                    <CardTitle className="text-xl">Fast Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Efficient project management with timely delivery of results.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-16 text-center reveal-item opacity-0">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to discuss how our services can help your business grow?
              </p>
              <Link to="/#contact">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
