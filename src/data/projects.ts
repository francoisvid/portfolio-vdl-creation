import vidalfit from '../assets/projects/vidalfit.png';
import lesalon26 from '../assets/projects/Le salon 26.png';
import azko from '../assets/projects/azko-crm.png';
import andragogy from '../assets/projects/andragogy.png';
import banana from '../assets/projects/banana-rally.png';
import portfolio from '../assets/projects/portfolio.png';
import password from '../assets/projects/password.png';
import thais1 from '../assets/projects/thais-hotel.png';
import thais2 from '../assets/projects/thais-hotel-2.png';
import unadader from '../assets/projects/unader.png';
import technimaint from '../assets/projects/technimaint.png';

export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    categories: string[];
    technologies: string[];
    features?: string[];
    liveUrl?: string;
    codeUrl?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Vidalfit",
        description: "Application mobile de fitness et de nutrition permettant aux utilisateurs de suivre leurs entraînements, gérer leur performances et suivre leur alimentation.",
        imageUrl: vidalfit,
        categories: ["Application"],
        technologies: ["React native", "Symfony", "MariaDB", "Tailwind CSS", "Docker", "CI/CD"],
        features: [
            "Génération de programmes d'entraînement personnalisés",
            "Suivi des performances et des progrès",
            "Calculateur de calories et de macronutriments",
            "Défis communautaires et classements",
            "Rappel de prise de compléments alimentaires"
        ],
        liveUrl: "https://vidalfit.fr"
    },
    {
        id: 2,
        title: "Le Salon 26",
        description: "Application web de gestion de salon de coiffure, permettant aux utilisateurs de prendre rendez-vous en ligne, de gérer leur profil et de consulter les services proposés.",
        imageUrl: lesalon26,
        categories: ["web", "réservation"],
        technologies: ["React Native", "Symfony", "MariaDB", "Chart.js", "Docker", "CI/CD"],
        features: [
            "Prise de rendez-vous en ligne",
            "Gestion des clients et des employés",
            "Gestion des services et des tarifs",
            "Notifications par e-mail et SMS",
        ],
        liveUrl: "https://lesalon26.fr"
    },
    {
        id: 3,
        title: "CRM avocat",
        description: "CRM pour avocats permettant de gérer les clients, les affaires et les documents associés.",
        imageUrl: azko,
        categories: ["web"],
        technologies: ["Angular", "Symfony", "Tailwind CSS", "Docker", "MySQL"],
        features: [
            "Gestion des affaires et des clients",
            "Suivi des délais et des tâches",
            "Gestion des documents et des fichiers",
            "Tableaux de bord personnalisés",
            "Notifications par e-mail"
        ],
        liveUrl: ""
    },
    {
        id: 4,
        title: "Site Andragogy",
        description: "Site vitrine pour une entreprise de formation, présentant les services, les formateurs et les témoignages clients.",
        imageUrl: andragogy,
        categories: ["web"],
        technologies: ["NextJS", "TailwindCSS", "GSAP"],
        features: [
            "Site vitrine responsive",
        ],
        liveUrl: "https://andragogy.fr"
    },
    {
        id: 5,
        title: "Unadader",
        description: "Plateforme associative pour la gestion des membres, des événements et des dons.",
        imageUrl: unadader,
        categories: ["web"],
        technologies: ["Angular", "Firebase", "TypeScript", "Material Design"],
        features: [
            "Gestion des membres et des adhésions",
            "Gestion de stock",
            "Gestion des événements",
        ],
        liveUrl: "https://www.adere.fr/"
    },
    {
        id: 6,
        title: "Thais Hotel",
        description: "Application web dédié à l'équipe commercial de Thaïs",
        imageUrl: thais1,
        categories: ["web"],
        technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
        features: [
            "Affichage des clients sur une carte",
            "Sysème de filtre",
            "Interface d'administration"
        ],
        liveUrl: ""
    },
    {
        id: 7,
        title: "Thais Hotel Plugin",
        description: "Plugin de réservation d'hôtel permettant aux utilisateurs de réserver des chambres en ligne, de gérer les disponibilités et de traiter les paiements.",
        imageUrl: thais2,
        categories: ["web", "réservation"],
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        features: [
            "Comparateur de prix",
            "Intégration d'API tierces",
        ],
        liveUrl: ""
    },
    {
        id: 8,
        title: "Password Manager",
        description: "Application de gestion de mots de passe sécurisée avec chiffrement et synchronisation multi-appareils.",
        imageUrl: password,
        categories: ["web"],
        technologies: ["Electron", "React", "Node.js", "SQLite"],
        features: [
            "Chiffrement AES-256 des données",
            "Générateur de mots de passe",
        ],
        liveUrl: ""
    },
    {
        id: 9,
        title: "Portfolio",
        description: "Portfolio personnel présentant mes projets, compétences et expériences professionnelles.",
        imageUrl: portfolio,
        categories: ["web"],
        technologies: ["Symfony", "Twig", "MySQL"],
        features: [
            "Connexion JWT",
            "Backoffice pour la gestion des projets",
        ],
        liveUrl: ""
    },
    {
        id: 10,
        title: "Banana Rally",
        description: "Site vitrine pour un événement de course automobile, avec gestion des inscriptions et des résultats.",
        imageUrl: banana,
        categories: ["web"],
        technologies: ["Symfony", "MySQL"],
        features: [
            "Inscription en ligne",
            "Gestion des participants",
            "Affichage des résultats en temps réel",
            "Galerie photo"
        ],
        liveUrl: ""
    },
    {
        id: 11,
        title: "Technimaint",
        description: "Application de gestion de maintenance pour les entreprises industrielles.",
        imageUrl: technimaint,
        categories: ["web", "gestion"],
        technologies: ["Javascript", "C#", "MySQL"],
        features: [
            "Planification des interventions",
            "Suivi des équipements",
            "Rapports et statistiques",
            "Notifications email automatiques"
        ],
        liveUrl: "https://www.technimaint.com"
    }
];
