import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Calendar, TrendingUp } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import NewsCard from '../components/NewsCard';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Award size={48} />, number: '500+', label: 'Projects Completed' },
    { icon: <Users size={48} />, number: '50+', label: 'Expert Team Members' },
    { icon: <Calendar size={48} />, number: '15+', label: 'Years Experience' },
    { icon: <TrendingUp size={48} />, number: '98%', label: 'Client Satisfaction' },
  ];

  const featuredServices = [
    {
      title: 'Building Construction',
      description: 'Complete building construction services from foundation to finishing.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      features: ['Residential', 'Commercial', 'Industrial']
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with modern renovation techniques.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
      features: ['Kitchen', 'Bathroom', 'Office Space']
    },
    {
      title: 'Interior Design',
      description: 'Professional interior design services for modern living spaces.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['Space Planning', 'Furniture', 'Lighting']
    }
  ];

  const news = [
    {
      title: 'ConstructPro Wins Major Infrastructure Contract',
      excerpt: 'We are proud to announce our latest victory in securing a significant infrastructure development project...',
      date: '2025-01-15',
      category: 'Awards'
    },
    {
      title: 'Sustainable Building Practices Implementation',
      excerpt: 'Our commitment to environmental responsibility drives us to implement cutting-edge sustainable practices...',
      date: '2025-01-10',
      category: 'Sustainability'
    },
    {
      title: 'New Technology Integration in Construction',
      excerpt: 'Embracing digital transformation with advanced construction technologies and smart building solutions...',
      date: '2025-01-05',
      category: 'Technology'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-page"
    >
      <Hero />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="section-title">The Nation Builders</h2>
              <div className="title-underline"></div>
              <p className="about-text">
                As ConstructPro, we are one of India's leading construction organizations, 
                contributing significantly to building modern infrastructure across the nation. 
                We drive innovation in construction through cutting-edge technology and 
                sustainable practices, creating landmarks that stand the test of time.
              </p>
              <p className="about-text">
                Our expertise spans across residential, commercial, and industrial projects, 
                with a commitment to excellence that has earned us recognition as trusted 
                partners in nation-building initiatives.
              </p>
              <Link to="/about" className="cta-button">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg"
                alt="Construction team"
                className="about-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="section-title">Our Expert Services</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Professional construction services tailored to your needs
            </p>
          </motion.div>

          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="cta-button-outline">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h2 className="section-title">Latest Happenings</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="news-grid">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <NewsCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;