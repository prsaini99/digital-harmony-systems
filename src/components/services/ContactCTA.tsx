
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <div className="mt-20 text-center reveal-item opacity-0">
      <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Partner with 11Point2 to unlock your business potential. Our team of experts is ready to discuss your goals and create tailored solutions that drive growth and success.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
        <div className="glass-card p-6 flex flex-col items-center">
          <Phone className="h-8 w-8 text-brand-600 mb-3" />
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-muted-foreground mb-4">Speak directly with our experts</p>
          <Button variant="outline" className="mt-auto border-brand-600 text-brand-600 hover:bg-brand-50">
            +1 (555) 123-4567
          </Button>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center">
          <Mail className="h-8 w-8 text-brand-600 mb-3" />
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-muted-foreground mb-4">Send your inquiries anytime</p>
          <Button variant="outline" className="mt-auto border-brand-600 text-brand-600 hover:bg-brand-50">
            contact@11point2.com
          </Button>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center">
          <Calendar className="h-8 w-8 text-brand-600 mb-3" />
          <h3 className="font-semibold mb-2">Schedule a Meeting</h3>
          <p className="text-muted-foreground mb-4">Book a consultation</p>
          <Link to="/#contact">
            <Button variant="outline" className="mt-auto border-brand-600 text-brand-600 hover:bg-brand-50">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      
      <Link to="/#contact">
        <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
          Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default ContactCTA;
