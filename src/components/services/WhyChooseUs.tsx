
import React from 'react';
import { BriefcaseBusiness, Users, Target, Zap, Award, MessageSquare, ShieldCheck, Lightbulb } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="mt-20 reveal-item opacity-0">
      <SectionTitle 
        title="Why Choose Us"
        subtitle="Partner with a team that delivers excellence and tangible results"
        className="mb-10"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <BriefcaseBusiness size={20} />
            </div>
            <CardTitle className="text-xl">Industry Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Over 10 years of experience working with clients across diverse industries.</p>
          </CardContent>
        </Card>
        
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <Users size={20} />
            </div>
            <CardTitle className="text-xl">Dedicated Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">A specialized team of experts dedicated to your project's success at every stage.</p>
          </CardContent>
        </Card>
        
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <Target size={20} />
            </div>
            <CardTitle className="text-xl">Data-Driven</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">All strategies and solutions backed by comprehensive data analysis and research.</p>
          </CardContent>
        </Card>
        
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <Zap size={20} />
            </div>
            <CardTitle className="text-xl">Fast Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Efficient project management with timely delivery of results and solutions.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <Award size={20} />
            </div>
            <CardTitle className="text-xl">Quality Assurance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Rigorous quality control standards to ensure exceptional deliverables.</p>
          </CardContent>
        </Card>
        
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <MessageSquare size={20} />
            </div>
            <CardTitle className="text-xl">Clear Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Transparent and regular communication throughout the entire project lifecycle.</p>
          </CardContent>
        </Card>
        
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <ShieldCheck size={20} />
            </div>
            <CardTitle className="text-xl">Security Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Advanced security measures to protect your data and digital assets.</p>
          </CardContent>
        </Card>
        
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="mb-2 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <Lightbulb size={20} />
            </div>
            <CardTitle className="text-xl">Innovative Thinking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Creative problem-solving and forward-thinking approaches to challenges.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhyChooseUs;
