import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Code, Star, Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    'HTML/CSS', 'JavaScript/TypeScript', 'React.js', 'Vue.js',
    'Angular', 'Sass', 'Tailwind CSS', 'Bootstrap',
    'PHP', 'Symfony', 'Laravel', 'WordPress',
    'Node.js', 'Express', 'Next.js', 'React Native',
    'TailwindCSS', 'MongoDB', 'PostgreSQL'
  ];

  const stats = [
    { icon: <Code size={24} />, value: '6+', label: "Années d'expérience" },
    { icon: <Star size={24} />, value: '50+', label: 'Projets réalisés' },
    { icon: <Award size={24} />, value: '100%', label: 'Satisfaction client' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="À Propos de moi"
          subtitle="Découvrez mon parcours et mes compétences en tant que développeur web et mobile freelance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Développeur passionné par la création d'expériences digitales exceptionnelles
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Après 6 années d'expérience dans le développement web et mobile, j'ai décidé de me lancer en tant que freelance pour aider les entreprises à concrétiser leurs projets digitaux.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ma passion pour les technologies web et mobile me pousse à rester constamment à jour sur les dernières tendances et meilleures pratiques du secteur. Je m'engage à fournir des solutions sur mesure qui répondent parfaitement aux besoins de mes clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                  <CheckCircle size={18} className="mr-2 text-blue-900 dark:text-blue-400" />
                  Formation
                </h4>
                <p className="text-gray-600 dark:text-gray-300 pl-7">
                  Master Architect Développement Logiciel, Epitech Montpellier
                </p>
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                  <CheckCircle size={18} className="mr-2 text-blue-900 dark:text-blue-400" />
                  Certifications
                </h4>
                <p className="text-gray-600 dark:text-gray-300 pl-7">
                  AWS, Google Cloud, React Native
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Me contacter
            </Button>
          </div>

          {/* Skills & stats */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-orange-50 dark:bg-gray-800 p-4 rounded-xl text-center"
                >
                  <div className="flex justify-center text-blue-900 dark:text-blue-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Compétences
              </h4>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
