import React, {useEffect, useState} from 'react';
import {ArrowDown, Code, Smartphone, Globe, Network, Star, Award, ArrowRight} from 'lucide-react';
import Button from '../ui/Button';
import hero from '../../assets/projects/hero-home.png';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setIsVisible(true);

        // Lazy load image for better performance
        const img = new Image();
        img.src = hero;
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    const skills = [
        {icon: <Code size={20}/>, text: 'Développement Web', stat: '6+ ans d\'expérience'},
        {icon: <Globe size={20}/>, text: 'Applications web', stat: '20+ sites lancés'},
        {icon: <Smartphone size={20}/>, text: 'Applications Mobiles', stat: '2 apps développées'},
        {icon: <Network size={20}/>, text: 'Optimisation SEO', stat: '200% ROI moyen'},
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
            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 sm:py-20">
                <div className="text-center max-w-5xl mx-auto">
                    <div
                        className={`transition-all duration-1000 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        {/* Added trust indicators */}
                        <div className="flex justify-center items-center gap-6 mb-8 mt-8">
                            <div className="flex items-center text-orange-300">
                                <Award size={16} className="mr-1"/>
                                <span className="text-sm">6+ ans d'expérience</span>
                            </div>
                            <div className="flex items-center text-orange-300">
                                <Star fill="currentColor" size={16} className="mr-1"/>
                                <span className="text-sm">100% clients satisfaits</span>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                           <span
                               className="text-5xl sm:text-6xl md:text-8xl  bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text"
                               style={{fontFamily: 'Pacifico, cursive'}}
                           >
                                VDL Création <br/>
                           </span>
                            Développeur Web & Mobile Indépendant
                        </h1>

                        <p className="text-lg sm:text-2xl text-gray-200 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Je transforme vos idées en solutions digitales performantes, en mettant l'expérience
                            utilisateur
                            et votre ROI au cœur de chaque projet.
                        </p>

                        <p className="text-sm sm:text-base text-orange-200 mb-10">
                            Approche agile • Support 24/7
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`group p-4 bg-white/20 backdrop-blur-sm rounded-lg text-white transform transition-all duration-300 hover:bg-white/30 hover:scale-105 ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                    style={{transitionDelay: `${index * 100}ms`}}
                                >
                                    <div className="flex items-center justify-center mb-2">
                                        <span
                                            className="mr-3 text-orange-300 group-hover:text-orange-400 transition-colors">
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

                        {/* Enhanced CTA buttons */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => scrollToSection('projects')}
                                size="lg"
                                className="group flex items-center"
                            >
                                Voir mes projets
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform"/>
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

                {/* Enhanced scroll indicator */}
                <div className="flex flex-col items-center animate-bounce mt-8 ">
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('projects');
                        }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30 hover:shadow-lg"
                        aria-label="Faire défiler vers les projets"
                    >
                        <ArrowDown size={20}/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
