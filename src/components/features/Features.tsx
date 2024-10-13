import React from 'react'
import { owlImage, catImage, rocksImage } from '@assets'
import './Features.css'

interface FeatureProps {
    title: string;
    description: string;
    image: string;
    imageClass?: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, image, imageClass }) => (
    <div className="feature">
        <img src={image} alt={title} className={`feature-image ${imageClass || ''}`} />
        <div className="feature-content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
);

const Features: React.FC = () => (
    <section className="features-container">
        <Feature
            title="Malleable"
            description="We provide and deliver services from anywhere, of any type, around the world."
            image={catImage}
        />
        <Feature
            title="Valiant"
            description="We've successfully served diverse clients, taking calculated risks. We handle any client with any sourcing requirement."
            image={rocksImage}
            imageClass="feature-image-valiant"
        />
        <Feature
            title="Noble"
            description="Integrity is our core value. We prioritize honesty and transparency in all our dealings."
            image={owlImage}
            imageClass="feature-image-noble"
        />
    </section>
);

export default Features;
