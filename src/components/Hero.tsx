import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      title: 'Building Dreams Into Reality',
      subtitle: 'Premium construction services for modern infrastructure',
      location: 'Mumbai, India'
    },
    {
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
      title: 'Excellence in Construction',
      subtitle: 'Innovative solutions for complex projects',
      location: 'Delhi, India'
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Sustainable Development',
      subtitle: 'Environment-friendly construction practices',
      location: 'Bangalore, India'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="hero-overlay">
              <div className="container">
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    THINK INFRASTRUCTURE.
                  </motion.h1>
                  <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    THINK CONSTRUCTPRO.
                  </motion.h1>
                  
                  <motion.div
                    className="hero-info"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    <h3 className="project-title">{slides[currentSlide].title}</h3>
                    <p className="project-location">{slides[currentSlide].location}</p>
                  </motion.div>

                  <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                  >
                    <Link to="/projects" className="hero-button">
                      All Projects <ArrowRight size={20} />
                    </Link>
                    <Link to="/contact" className="hero-button-outline">
                      Get Quote
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-controls">
          <button className="hero-nav prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="hero-nav next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;