import React from 'react';
import { Github as GitHub, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="bg-orange-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">VDL Création</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Création de sites web et d'applications mobiles sur mesure pour répondre à vos besoins.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-blue-400 transition-colors">Projets</a></li>
              <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-blue-400 transition-colors">À propos</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-orange-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {currentYear} VDL Création. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
