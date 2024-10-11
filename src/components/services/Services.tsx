import React from 'react';
import './Services.css';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="service-card">
        <div className="service-icon-wrapper">
            <i className={`service-icon ${icon}`}></i>
        </div>
        <div className="service-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const Services: React.FC = () => {
    const services = [
        {
            icon: "far fa-hospital",
            title: "Medical Equipment",
            description: "Global sourcing of medical devices for healthcare providers and distributors. We offer tailored packages from premier manufacturers, ensuring quality and precision."
        },
        {
            icon: "far fa-gem",
            title: "Commodities",
            description: "We provide access to real-time commodity prices, enabling informed buying and selling decisions. Our platform offers reliable data for various market sectors."
        },
        {
            icon: "fas fa-home",
            title: "Property",
            description: "We deliver high-standard property services to investors, associates, and residents. Our expertise spans residential and commercial sectors in global markets."
        },
        {
            icon: "fas fa-hard-hat",
            title: "Raw Materials",
            description: "We source and deliver a wide range of quality raw materials from leading global manufacturers. Our procurement expertise makes us a top supplier in our markets."
        }
    ];

    return (
        <section className="services-container">
            <h2>What do we provide?</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export { Services };
