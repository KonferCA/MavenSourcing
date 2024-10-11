import React from 'react';
import { Navbar, Features, Footer, Contact, Services} from '@components';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <Features />
            <Contact />
            <Services />
            <Footer />
        </>
    );
};

export { Landing };