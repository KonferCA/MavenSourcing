import React from 'react';
import { Navbar, Features, Services,Footer } from '@components';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <Features />
            <Services />
            <Footer />
        </>
    );
};

export { Landing };