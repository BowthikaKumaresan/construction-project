import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Home, Wrench, Lightbulb, Shield, Leaf } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom home construction services with modern design and quality craftsmanship for comfortable living spaces.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      features: ['Custom Design', 'Quality Materials', 'Timely Delivery']
    },
    {
      title: 'Commercial Buildings',
      description: 'Professional commercial construction for offices, retail spaces, and business complexes with modern amenities.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      features: ['Modern Design', 'Energy Efficient', 'Smart Systems']
    },
    {
      title: 'Industrial Projects',
      description: 'Large-scale industrial construction including factories, warehouses, and manufacturing facilities.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
      features: ['Heavy Construction', 'Safety Standards', 'Specialized Equipment']
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with expert renovation services for homes and commercial properties.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['Space Optimization', 'Modern Upgrades', 'Cost-Effective']
    },
    {
      title: 'Interior Design',
      description: 'Complete interior design solutions including space planning, furniture selection, and decoration.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      features: ['3D Visualization', 'Custom Furniture', 'Lighting Design']
    },
    {
      title: 'Project Management',
      description: 'Professional project management services ensuring timely completion and quality control.',
      image: 'https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg',
      features: ['Timeline Management', 'Quality Control', 'Budget Optimization']
    }
  ];

  const specialties = [
    {
      icon: <Building size={48} />,
      title: 'Architecture & Design',
      description: 'Innovative architectural solutions with cutting-edge design principles'
    },
    {
      icon: <Shield size={48} />,
      title: 'Safety & Compliance',
      description: 'Adherence to all safety regulations and building codes for secure construction'
    },
    {
      icon: <Leaf size={48} />,
      title: 'Green Construction',
      description: 'Sustainable building practices with eco-friendly materials and energy efficiency'
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Smart Solutions',
      description: 'Integration of smart technology and automation systems in modern buildings'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="services-page"
    >
      {/* Hero Section */}
      <section className="page-hero services-hero">
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="page-title">Our Services</h1>
              <p className="page-subtitle">
                Comprehensive construction solutions for all your building needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="section-title">What We Do</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              From concept to completion, we deliver exceptional construction services
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="section-title">Our Specialties</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="specialty-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="specialty-icon">{specialty.icon}</div>
                <h3 className="specialty-title">{specialty.title}</h3>
                <p className="specialty-description">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;