import React from 'react';
import { Link } from 'react-router-dom';
import { FiBook, FiUsers, FiAward, FiClock, FiMapPin } from 'react-icons/fi';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-page">
    
      <section className="about-hero-section">
        <div className="about-container">
          <h1 className="about-hero-title">About Our City University Library</h1>
          <p className="about-hero-subtitle">Discover the heart of academic excellence at our institution</p>
        </div>
      </section>

      
      <section className="about-mission-section">
        <div className="about-container">
          <div className="about-mission-content">
            <div className="about-mission-text">
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-mission-paragraph">
                The City University Library in its main building Khagan, Birulia, Savar, Dhaka. The Library has a rich variety of collections and areas: paper books, journals, e-books, ejournals, thesis reports, and CDs. The total holdings of the City University Library have reached 21,000+ printed books. The City University Library has become a member of UGC Digital Library (UDL). The City University e-library Contains 1,20,000 e-books, 30,950 e-journals via HINARI, AGORA, ARDI, OARE, GOALI, and 3,500 ebooks via UDL. The books are in different fields: English Language and Literature, Law, History and Culture, Social Science, Physics, Chemistry, Mechanical engineering, Textile Engineering, Civil engineering, Electrical and Electronics Engineering, Agricultural Science, Medical Science, Pharmacy, Mathematics, Business, Economics, Management, and Religion. It’s an open shelf Library. Online Catalog, and online circulation services are powered by KOHA.
              </p>
            </div>
            <div className="about-mission-image">
              <img src="/assets/libraryinterior.jpg" alt="Library interior" className="about-mission-img" />
            </div>
          </div>
        </div>
      </section>

    

     
      <section className="about-stats-section">
        <div className="about-container">
          <h2 className="about-stats-title">City University Library Collection</h2>
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <FiBook size={40} className="about-stat-icon" />
              <h3 className="about-stat-number">20,000+</h3>
              <p className="about-stat-label">Printed Books</p>
            </div>
            <div className="about-stat-card">
              <FiBook size={40} className="about-stat-icon" />
              <h3 className="about-stat-number">1,23,550</h3>
              <p className="about-stat-label">Online e-Books</p>
            </div>
            <div className="about-stat-card">
              <FiAward size={40} className="about-stat-icon" />
              <h3 className="about-stat-number">30950</h3>
              <p className="about-stat-label">Online Journals</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="about-facilities-section">
        <div className="about-container">
          <h2 className="about-section-title">Our Facilities</h2>
          <div className="about-facilities-grid">
            <div className="about-facility-card">
              <img src="/assets/readingroom.webp" alt="Reading Room" className="about-facility-img" />
              <h3 className="about-facility-name">Main Reading Room</h3>
              <p className="about-facility-description">The study area provides a quiet environment with natural lighting and comfortable seating for students.</p>
            </div>
            <div className="about-facility-card">
              <img src="/assets/computerlab.jpeg" alt="Computer Lab" className="about-facility-img" />
              <h3 className="about-facility-name">Computer Lab</h3>
              <p className="about-facility-description">The workstations provide access to academic software and high-speed internet for students.</p>
            </div>
            <div className="about-facility-card">
              <img src="/assets/groupstudyroom.jpeg" alt="Group Study" className="about-facility-img" />
              <h3 className="about-facility-name">Group Study Rooms</h3>
              <p className="about-facility-description">There are bookable rooms equipped with whiteboards and presentation displays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-container">
          <h2 className="about-cta-title">Experience Our Library</h2>
          <p className="about-cta-subtitle">Visit us today and discover all the resources we have to offer</p>
          <div className="about-cta-buttons">
            <Link to="/aboutus" className="about-btn about-btn-primary">
              <FiMapPin className="about-icon" /> Visit Us
            </Link>
            <Link to="/aboutus" className="about-btn about-btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;