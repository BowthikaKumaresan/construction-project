import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Calendar, Building } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Skyline Business Center',
      category: 'commercial',
      location: 'Mumbai, Maharashtra',
      completedDate: '2024',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      description: 'Modern 15-story commercial complex with state-of-the-art facilities'
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'residential',
      location: 'Gurgaon, Delhi NCR',
      completedDate: '2024',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      description: 'Premium residential villa with contemporary architecture and smart home features'
    },
    {
      id: 3,
      title: 'Manufacturing Plant',
      category: 'industrial',
      location: 'Pune, Maharashtra',
      completedDate: '2023',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
      description: 'Large-scale manufacturing facility with advanced automation systems'
    },
    {
      id: 4,
      title: 'Heritage Hotel Renovation',
      category: 'renovation',
      location: 'Jaipur, Rajasthan',
      completedDate: '2023',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Complete restoration of historic hotel preserving original architecture'
    },
    {
      id: 5,
      title: 'Tech Campus Complex',
      category: 'commercial',
      location: 'Bangalore, Karnataka',
      completedDate: '2024',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
      description: 'Modern IT campus with sustainable design and green building features'
    },
    {
      id: 6,
      title: 'Affordable Housing Project',
      category: 'residential',
      location: 'Chennai, Tamil Nadu',
      completedDate: '2023',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      description: 'Community housing development with 200+ units and modern amenities'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'renovation', label: 'Renovation' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="projects-page"
    >
      {/* Hero Section */}
      <section className="page-hero projects-hero">
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="page-title">Our Projects</h1>
              <p className="page-subtitle">
                Showcasing excellence in construction through our completed works
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          {/* Filter Buttons */}
          <motion.div
            className="projects-filter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="project-view-btn">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-meta">
                    <span className={`project-category ${project.category}`}>
                      <Building size={14} />
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-details">
                    <div className="project-location">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="project-date">
                      <Calendar size={16} />
                      <span>{project.completedDate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your construction needs and bring your vision to life</p>
            <button className="cta-button">Get Started Today</button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;