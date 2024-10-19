import React from 'react';
import { Navbar, Features, Footer, Hero, Contact, Services} from '@components';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <div id="maven">
                <Hero />
            </div>
            <div id="about">
                <Features />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export { Landing };
