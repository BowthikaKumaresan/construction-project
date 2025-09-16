import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Target size={48} />,
      title: 'Our Mission',
      description: 'To deliver exceptional construction services that exceed client expectations while building sustainable communities for the future.'
    },
    {
      icon: <Eye size={48} />,
      title: 'Our Vision',
      description: 'To be recognized as the leading construction company that transforms landscapes and enriches lives through innovative building solutions.'
    },
    {
      icon: <Award size={48} />,
      title: 'Our Values',
      description: 'Integrity, quality, innovation, and sustainability guide every project we undertake, ensuring lasting value for our clients.'
    },
    {
      icon: <Users size={48} />,
      title: 'Our Team',
      description: 'A diverse group of skilled professionals dedicated to excellence, collaboration, and continuous learning in the construction industry.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about-page"
    >
      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="page-title">About ConstructPro</h1>
              <p className="page-subtitle">
                Building Excellence Since 2010 - Your Trusted Construction Partner
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="section-title">Our Story</h2>
              <div className="title-underline"></div>
              <p>
                Founded in 2010, ConstructPro has grown from a small local contractor to 
                one of India's most respected construction companies. Our journey began with 
                a simple vision: to build structures that stand the test of time while 
                maintaining the highest standards of quality and craftsmanship.
              </p>
              <p>
                Over the years, we've completed hundreds of projects across residential, 
                commercial, and industrial sectors. Our commitment to innovation has led us 
                to adopt cutting-edge technologies and sustainable building practices that 
                benefit both our clients and the environment.
              </p>
              <p>
                Today, ConstructPro is synonymous with reliability, quality, and excellence 
                in construction. We continue to push boundaries and set new standards in 
                the industry while remaining true to our core values of integrity and 
                customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
                alt="Construction progress"
                className="story-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="section-title">What Drives Us</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h2 className="section-title">Leadership Team</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Meet the experienced professionals leading ConstructPro to new heights
            </p>
          </motion.div>

          <div className="team-grid">
            {[
              {
                name: 'Rajesh Kumar',
                position: 'Chief Executive Officer',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
                experience: '20+ years in construction industry'
              },
              {
                name: 'Priya Sharma',
                position: 'Chief Operations Officer',
                image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
                experience: '15+ years in project management'
              },
              {
                name: 'Amit Patel',
                position: 'Chief Technology Officer',
                image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
                experience: '12+ years in construction technology'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="team-member"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-experience">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;