import React from 'react';
import { Code, Smartphone, ShoppingBag, Search, Database, Layout } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout />,
      title: 'Sites Vitrines',
      description: 'Des sites web professionnels qui mettent en valeur votre entreprise, optimisés pour le référencement et adaptés à tous les appareils.',
    },
    {
      icon: <Code />,
      title: 'Applications Web',
      description: 'Des applications web sur mesure avec des interfaces intuitives et performantes pour répondre aux besoins spécifiques de votre activité.',
    },
    {
      icon: <Smartphone />,
      title: 'Applications Mobiles',
      description: 'Des applications mobiles natives et cross-platform pour iOS et Android qui offrent une expérience utilisateur fluide et engageante.',
    },
    {
      icon: <ShoppingBag />,
      title: 'E-commerce',
      description: 'Des boutiques en ligne complètes et sécurisées, avec gestion des produits, paiements en ligne et expérience d\'achat optimisée.',
    },
    {
      icon: <Search />,
      title: 'SEO / SEM',
      description: 'Optimisation pour les moteurs de recherche pour améliorer la visibilité de votre site et attirer plus de visiteurs qualifiés.',
    },
    {
      icon: <Database />,
      title: 'Bases de données',
      description: 'Conception et optimisation de bases de données pour stocker et gérer efficacement vos données avec un haut niveau de sécurité.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-orange-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mes Services"
          subtitle="Je propose une gamme complète de services pour vous aider à développer votre présence en ligne et à atteindre vos objectifs commerciaux."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
