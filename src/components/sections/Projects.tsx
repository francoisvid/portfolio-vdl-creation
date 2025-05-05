import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '../../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...new Set(projectsData.flatMap(project => project.categories))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mes projets récents"
          subtitle="Découvrez quelques-uns des projets sur lesquels j'ai travaillé récemment. Chaque projet est unique et conçu pour répondre aux besoins spécifiques de mes clients."
        />

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-orange-400 text-white dark:bg-orange-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-16 text-center">
          <a href="https://github.com/francoisvid"
            target="_blank"
            className="inline-flex items-center text-orange-600 dark:text-blue-400 hover:text-orange-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <Github size={20} className="mr-2" />
            Voir plus de projets sur GitHub
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
