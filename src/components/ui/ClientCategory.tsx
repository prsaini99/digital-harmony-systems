
import React from 'react';
import ClientCard from './ClientCard';

interface ClientCategoryProps {
  title: string;
  clients: {
    name: string;
    industry: string;
    results: string;
  }[];
  delay?: number;
}

const ClientCategory = ({ title, clients, delay = 0 }: ClientCategoryProps) => {
  return (
    <div className="reveal-bottom">
      <h3 className="text-xl md:text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {clients.map((client, index) => (
          <ClientCard 
            key={client.name}
            name={client.name}
            industry={client.industry}
            results={client.results}
            delay={(index + 1) * 100 + delay}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCategory;
