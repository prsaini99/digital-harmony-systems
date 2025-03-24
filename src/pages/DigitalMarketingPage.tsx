
import React from 'react';
import { ArrowRight, GlobeLock, BarChart, Search, Users, Award, ActivitySquare, ShieldCheck, MessageSquare } from 'lucide-react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const caseStudies = [
  {
    client: "Ease My Trip",
    result: "CPA reduced from 18% to 12%, Revenue up 150%",
    description: "By implementing our comprehensive digital marketing strategy, we helped this travel platform significantly reduce their cost per acquisition while dramatically increasing revenue."
  },
  {
    client: "Fortis Hospitals",
    result: "Oncology footfall increased by 30%",
    description: "Our targeted healthcare marketing campaign increased patient awareness and engagement, resulting in a substantial increase in oncology department visits."
  },
  {
    client: "Koinbasket",
    result: "User acquisition up 85% in 3 months",
    description: "Through strategic digital marketing and optimized conversion funnels, we helped this crypto platform dramatically grow their user base."
  }
];

const DigitalMarketingPage = () => {
  return (
    <ServicePageLayout
      title="Digital Marketing Solutions"
      subtitle="Data-driven strategies and innovative campaigns that deliver measurable results and maximum ROI for your business."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <ServiceFeature
          title="Google Ads & PPC Strategies"
          description="Strategic campaign setup, keyword research, ad copy optimization, landing page design, and continuous performance monitoring."
          icon={Search}
        />
        
        <ServiceFeature
          title="SEO & SEM Implementation"
          description="Comprehensive search engine optimization including technical SEO, content strategy, link building, and local SEO services."
          icon={GlobeLock}
        />
        
        <ServiceFeature
          title="Programmatic Advertising"
          description="Advanced automated ad buying with targeting optimization, real-time bidding, and performance analysis across multiple platforms."
          icon={BarChart}
        />
        
        <ServiceFeature
          title="Social Media Campaigns"
          description="Platform-specific strategy development, content creation, community management, and performance tracking across all social channels."
          icon={Users}
        />
        
        <ServiceFeature
          title="Influencer Collaboration"
          description="Identifying relevant influencers, negotiating partnerships, campaign development, and measuring authentic engagement and conversion metrics."
          icon={Award}
        />
        
        <ServiceFeature
          title="Lead Generation & Conversion"
          description="Strategic content offers, landing page optimization, form design, lead nurturing sequences, and scoring mechanisms for quality prospects."
          icon={ActivitySquare}
        />
        
        <ServiceFeature
          title="Online Reputation Management"
          description="Proactive review management, crisis communication planning, sentiment monitoring, and strategic response protocols."
          icon={ShieldCheck}
        />
        
        <ServiceFeature
          title="Content Marketing"
          description="Strategic content planning, creation, distribution and performance tracking across blogs, videos, infographics and other formats."
          icon={MessageSquare}
        />
      </div>
      
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6">Our Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">1</div>
            <h4 className="font-semibold mb-2">Research & Analysis</h4>
            <p className="text-sm text-muted-foreground">Comprehensive market, competitor and audience analysis</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">2</div>
            <h4 className="font-semibold mb-2">Strategy Development</h4>
            <p className="text-sm text-muted-foreground">Tailored marketing plan with clear KPIs and objectives</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">3</div>
            <h4 className="font-semibold mb-2">Implementation</h4>
            <p className="text-sm text-muted-foreground">Executing campaigns with precision and agility</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">4</div>
            <h4 className="font-semibold mb-2">Optimization & Scaling</h4>
            <p className="text-sm text-muted-foreground">Continuous improvement based on real-time data</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
      <Carousel className="mb-16">
        <CarouselContent>
          {caseStudies.map((study, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{study.client}</h4>
                  <p className="text-brand-600 font-medium mb-4">{study.result}</p>
                  <p className="text-muted-foreground text-sm">{study.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Digital Marketing?</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our team of experts is ready to help you achieve exceptional results with customized digital marketing strategies.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </ServicePageLayout>
  );
};

export default DigitalMarketingPage;
