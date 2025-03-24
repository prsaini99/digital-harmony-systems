
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactCTA: React.FC = () => {
  return (
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
  );
};

export default ContactCTA;
