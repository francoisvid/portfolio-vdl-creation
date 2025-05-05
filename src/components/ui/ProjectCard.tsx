import React, {useState} from 'react';
import {ExternalLink, ArrowRight} from 'lucide-react';
import {Project} from '../../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative pb-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project image */}
            <div className="relative overflow-hidden h-41 border border-gray-200 dark:border-gray-700 rounded-t-xl">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-50'}`}></div>

                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                        >
              {tech}
            </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
                    )}
                </div>
            </div>

            {/* Project info */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 transition-all duration-300 ${showDetails ? 'h-auto' : 'h-18 overflow-hidden'}`}>
                    {project.description}
                </p>

                {/* Show more/less toggle */}
                <button
                    onClick={toggleDetails}
                    className="mt-2 text-orange-400 dark:text-orange-400 text-sm font-medium flex items-center hover:underline focus:outline-none"
                >
                    {showDetails ? 'Voir moins' : 'Voir plus'}
                    <ArrowRight size={16}
                                className={`ml-1 transition-transform duration-300 ${showDetails ? 'rotate-90' : ''}`}/>
                </button>

                {/* Expanded details */}
                {showDetails && (
                    <div className="mt-4 space-y-4 animate-fadeIn">
                        {project.technologies.length > 0 && (
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.features && (
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Fonctionnalités</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Links - Now positioned absolute at bottom */}
            {project.liveUrl !== "" && (
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
                    <a href={project.liveUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center py-2.5 px-4 bg-orange-600 dark:bg-orange-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg font-medium w-full"
                    >
                        <span>Visiter le site</span>
                        <ExternalLink size={16} className="ml-2"/>
                    </a>
                </div>
            )}
            {project.liveUrl === "" && (
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
                    <a rel="noopener noreferrer"
                       className="flex items-center justify-center py-2.5 px-4 bg-orange-400 dark:bg-orange-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg font-medium w-full"
                    >
                        <span>Indisponible</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
