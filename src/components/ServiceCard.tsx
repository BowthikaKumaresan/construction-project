import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, features }) => {
  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="service-image">
        <img src={image} alt={title} />
        <div className="service-overlay">
          <button className="service-button">
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index} className="service-feature">
              <CheckCircle size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;