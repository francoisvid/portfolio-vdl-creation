import React, {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {useTheme} from '../../context/ThemeContext';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const {theme} = useTheme();

    // Appliquer la classe dark au niveau du document HTML
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
            <Header/>
            <main className="flex-grow transition-colors duration-300 dark:bg-gray-900">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
