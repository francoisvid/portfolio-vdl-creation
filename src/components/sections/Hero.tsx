import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Smartphone, Globe, Network, Star, Award, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import hero from '../../assets/projects/hero-home.png';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const img = new Image();
        img.src = hero;

        // Schema Markup
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'VDL Création',
            jobTitle: 'Développeur Web et Mobile',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Montpellier',
                addressRegion: 'Occitanie',
                addressCountry: 'FR',
            },
            url: 'https://portfolio.vdl-creation.fr',
            sameAs: ['https://www.linkedin.com/in/francoisvid', 'https://www.instagram.com/vdl.creation'],
            description:
                'Développeur web et mobile freelance à Montpellier, spécialisé en création de sites web et applications mobiles.',
        });
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const skills = [
        { icon: <Code size={20} />, text: 'Développement Web', stat: 'Sites React & WordPress' },
        { icon: <Globe size={20} />, text: 'Applications Web', stat: '20+ projets livrés' },
        { icon: <Smartphone size={20} />, text: 'Applications Mobiles', stat: 'Flutter & React Native' },
        { icon: <Network size={20} />, text: 'SEO Local', stat: 'Visibilité à Montpellier' },
    ];

    return (
        <section
            id="hero"
            className="min-h-screen relative flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            aria-label="Section héro"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 sm:py-20">
                <div className="text-center max-w-5xl mx-auto">
                    <div
                        className={`transition-all duration-1000 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <div className="flex justify-center items-center gap-6 mb-8 mt-8">
                            <div className="flex items-center text-orange-300">
                                <Award size={16} className="mr-1" />
                                <span className="text-sm">6+ ans d'expérience</span>
                            </div>
                            <div className="flex items-center text-orange-300">
                                <Star fill="currentColor" size={16} className="mr-1" />
                                <span className="text-sm">100% clients satisfaits</span>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              <span
                  className="text-5xl sm:text-6xl md:text-8xl bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text"
                  style={{ fontFamily: 'Pacifico, cursive' }}
              >
                VDL Création
              </span>
                            <br />
                            Développeur Web & Mobile à Montpellier
                        </h1>

                        <p className="text-sm sm:text-base text-orange-200 mb-10">
                            Je suis <strong>François VIDAL</strong>, <strong>développeur web et mobile freelance à Montpellier</strong>.
                            Spécialisé en création de <strong>sites web</strong> (React, Angular, WordPress) et <strong>applications mobiles</strong> (Flutter, React Native, Ionic),
                            je transforme vos idées en solutions digitales performantes, optimisées pour l’expérience utilisateur et le retour sur investissement.
                            Basé à <strong>Montpellier</strong>, je travaille avec des clients locaux et internationaux pour développer des <strong>sites web modernes</strong>,
                            des <strong>applications mobiles intuitives</strong> et optimiser leur visibilité grâce à des stratégies <strong>SEO locales</strong>.
                            Contactez-moi pour un devis gratuit !
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 lg:grid-cols-4 gap-4 mb-12">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`group p-4 bg-white/20 backdrop-blur-sm rounded-lg text-white transform transition-all duration-300 hover:bg-white/30 hover:scale-105 ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-center justify-center mb-2">
                    <span className="mr-3 text-orange-300 group-hover:text-orange-400 transition-colors">
                      {skill.icon}
                    </span>
                                        <span className="font-semibold">{skill.text}</span>
                                    </div>
                                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {skill.stat}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => scrollToSection('projects')}
                                size="lg"
                                className="group flex items-center"
                            >
                                Voir mes projets
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => scrollToSection('contact')}
                                className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all"
                            >
                                Me contacter
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center animate-bounce mt-8">
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('projects');
                        }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30 hover:shadow-lg"
                        aria-label="Faire défiler vers les projets"
                    >
                        <ArrowDown size={20} />
                    </a>
                </div>
            </div>

            <img
                src={hero}
                alt="Développeur web et mobile à Montpellier travaillant sur un projet"
                className="hidden"
                loading="lazy"
            />
        </section>
    );
};

export default Hero;
