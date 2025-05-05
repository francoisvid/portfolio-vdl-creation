import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isScrolled?: boolean; // Nouvel prop pour gérer l'état de défilement
}

const NavLink: React.FC<NavLinkProps> = ({href, children, isScrolled = false}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <a href={href}
           onClick={handleClick}
           className={`
        ${isScrolled
           ? 'text-gray-800 dark:text-gray-200'
           : 'text-white dark:text-gray-200'
       }
        hover:text-orange-300 dark:hover:text-orange-300 
        transition-colors font-medium relative group
      `}
        >
            {children}
            <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
    );
};

export default NavLink;
