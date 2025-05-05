import React, {useState, useEffect} from 'react';
import {Menu, X, Sun, Moon} from 'lucide-react';
import {useTheme} from '../../context/ThemeContext';
import NavLink from '../ui/NavLink';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const {theme, toggleTheme} = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu when clicking outside on mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    const navLinks = [
        {name: 'Accueil', href: '#hero'},
        {name: 'Projets', href: '#projects'},
        {name: 'Services', href: '#services'},
        {name: 'À propos', href: '#about'},
        {name: 'Témoignages', href: '#testimonials'},
        {name: 'Contact', href: '#contact'},
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
            <span
                className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
              VDL Création
            </span>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                href={link.href}
                                isScrolled={isScrolled}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className={`
                                p-2 rounded-full 
                                ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white dark:text-gray-200'}
                                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
                            `}
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? <Sun size={20}/> : <Moon size={20}/>}
                        </button>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full text-gray-200 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? <Sun size={20}/> : <Moon size={20}/>}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-200 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */}
            <div
                className={`md:hidden absolute w-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'max-h-96 opacity-100 shadow-lg'
                        : 'max-h-0 opacity-0 pointer-events-none'
                } overflow-hidden`}
            >
                <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a key={link.name}
                           href={link.href}
                           onClick={() => setIsOpen(false)}
                           className="py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
