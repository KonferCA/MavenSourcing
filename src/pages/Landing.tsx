import React from 'react';
import { Navbar, Features, Footer, Hero, Contact, Services} from '@components';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <Contact />
            <Footer />
        </>
    );
};

export { Landing };