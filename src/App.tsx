import {ThemeProvider} from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <Hero/>
                <Projects/>
                <Services/>
                <About/>
                <Testimonials/>
                <Contact/>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
