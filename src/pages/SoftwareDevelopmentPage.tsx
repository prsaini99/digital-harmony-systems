
import React from 'react';
import { ArrowRight, Code, Smartphone, Globe, Database, Cloud, Server, Bot, Cpu } from 'lucide-react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SoftwareDevelopmentPage = () => {
  return (
    <ServicePageLayout
      title="Software Development"
      subtitle="Custom software solutions built with cutting-edge technologies to drive business growth and operational efficiency."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <ServiceFeature
          title="Custom Enterprise Solutions"
          description="Tailored software applications designed to address specific business challenges and streamline operations."
          icon={Code}
        />
        
        <ServiceFeature
          title="Web Application Development"
          description="Responsive, scalable web applications with modern frontend frameworks and robust backend infrastructure."
          icon={Globe}
        />
        
        <ServiceFeature
          title="Mobile App Development"
          description="Native and cross-platform mobile applications for iOS and Android with seamless user experiences."
          icon={Smartphone}
        />
        
        <ServiceFeature
          title="AR/VR Development"
          description="Immersive augmented and virtual reality experiences for training, marketing, travel, and entertainment applications."
          icon={Bot}
        />
        
        <ServiceFeature
          title="Database Design & Management"
          description="Optimized database architecture, migration, and maintenance for relational and NoSQL database systems."
          icon={Database}
        />
        
        <ServiceFeature
          title="Cloud Solutions & DevOps"
          description="Cloud infrastructure setup, migration, and management with CI/CD pipeline implementation and DevOps practices."
          icon={Cloud}
        />
        
        <ServiceFeature
          title="API Development & Integration"
          description="Custom API development and third-party API integration to connect disparate systems and extend functionality."
          icon={Server}
        />
        
        <ServiceFeature
          title="AI & Machine Learning"
          description="Intelligent solutions leveraging artificial intelligence and machine learning for automation, prediction, and analytics."
          icon={Cpu}
        />
      </div>
      
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6">Our Development Process</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-4 shrink-0">1</div>
            <div>
              <h4 className="font-semibold mb-2">Discovery & Requirements Analysis</h4>
              <p className="text-muted-foreground">We start by understanding your business objectives, user needs, and technical requirements to define the scope and vision of your software project.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-4 shrink-0">2</div>
            <div>
              <h4 className="font-semibold mb-2">Architecture & Design</h4>
              <p className="text-muted-foreground">Our architects design scalable technical architecture while our UI/UX designers create intuitive interfaces focused on user experience.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-4 shrink-0">3</div>
            <div>
              <h4 className="font-semibold mb-2">Agile Development</h4>
              <p className="text-muted-foreground">Using agile methodologies, we develop your software in iterative sprints, allowing for continuous feedback and adaptation throughout the process.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-4 shrink-0">4</div>
            <div>
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-muted-foreground">Rigorous testing at every stage ensures your software meets the highest standards for functionality, performance, security, and user experience.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-4 shrink-0">5</div>
            <div>
              <h4 className="font-semibold mb-2">Deployment & Support</h4>
              <p className="text-muted-foreground">We handle deployment, training, and provide ongoing maintenance and support to ensure your software continues to perform optimally.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6">Technologies We Excel In</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "React", "Angular", "Vue.js", "Node.js", 
            "Python", "Java", "PHP", "Ruby on Rails",
            "AWS", "Azure", "Google Cloud", "Docker",
            "Kubernetes", "MongoDB", "PostgreSQL", "GraphQL",
            "React Native", "Flutter", "Unity", "TensorFlow"
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
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to Build Your Software Solution?</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how our software development expertise can help transform your business idea into a powerful digital solution.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </ServicePageLayout>
  );
};

export default SoftwareDevelopmentPage;
