import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-brand">
                <div className="brand-icon">
                  <Building2 size={32} />
                </div>
                <span className="brand-text">ConstructPro</span>
              </div>
              <p className="footer-description">
                Leading construction company delivering excellence in building 
                infrastructure and creating sustainable communities across India.
              </p>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links">
                <li><a href="/services">Residential Construction</a></li>
                <li><a href="/services">Commercial Buildings</a></li>
                <li><a href="/services">Industrial Projects</a></li>
                <li><a href="/services">Renovation</a></li>
                <li><a href="/services">Interior Design</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>info@constructpro.com</span>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>Mumbai, Maharashtra 400001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 ConstructPro. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;