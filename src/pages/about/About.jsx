import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutFeaturesAndMission from './AboutFeaturesAndMission';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Text Section */}
            <Col md={6} style={styles.textColumn}>
              <h3 style={styles.greeting}>Hello!</h3>
              <h1 style={styles.title}>We are RealRoadies</h1>
              <p style={styles.description}>
                Welcome to RealRoadies, the ultimate destination for those who live
                and breathe motorcycling! Beyond just a networking platform—we're a
                community, an adventure, and a revolution on two wheels. Whether
                you're a weekend warrior, a long-haul tourist, a speed junkie, or
                a street explorer, RealRoadies is built for YOU.
              </p>
            </Col>

            {/* Right Side - Placeholder for Image/Video */}
            <Col md={6} className="text-center">
              <img
          src="../src/assets/images/ab2.png"
          alt="Motorcycle Adventure"
          style={styles.imagePlaceholder}
        />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Full-screen Image Section - with reduced space above */}
      <div style={styles.fullScreenImageSection}>
        <img
          src="../src/assets/images/long.png"
          alt="Motorcycle Adventure"
          style={styles.fullScreenImage}
        />
      </div>
      <AboutFeaturesAndMission />
    </>
  );
};

const styles = {
  // Hero Section Styles
  heroSection: {
    backgroundColor: '#000000',
    padding: '40px 0', 
    minHeight: '60vh', 
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 0 
  },
  textColumn: {
    color: '#ffffff',
    paddingRight: '20px',
    paddingLeft: '20px'
  },
  greeting: {
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: '700'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '15px' 
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '20px' 
  },
  imagePlaceholder: {
    width: '100%',
    height: '200px',
    objectFit: 'fit',
    backgroundColor: '#333333',
    margin: '0 auto',
    maxWidth: '500px'
  },
 
  // Full-screen Image Section Styles
  fullScreenImageSection: {
    position: 'relative',
    width: '100%',
    height: '15vh',
    overflow: 'hidden',
    marginTop: 0 
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fit',
    objectPosition: 'center',
    display: 'block'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center'
  },
};

export default About;
