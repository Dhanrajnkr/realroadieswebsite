import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutFeaturesAndMission from './AboutFeaturesAndMission';
import weAreRR from '../../assets/images/we-are-rr.jpeg'; // Keep for fallback
import wheelsVideo from '../../assets/images/wheels.mp4'; // Import the video file
import homevideo from '../../assets/images/home1.mp4';

const About = () => {
  return (
    <>
      <section style={styles.heroSection}>
        {/* Background Video */}
        <div style={styles.videoContainer}>
          <video style={styles.backgroundVideo} autoPlay muted loop playsInline>
            <source src={wheelsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Content with transparent black overlay */}
        <Container fluid style={styles.contentContainer}>
          <Row className="align-items-center">
            <Col md={12} style={styles.textColumn}>
              <div style={styles.textContent}>
                <h3 style={styles.greeting}>Hello!</h3>
                <h1 style={styles.title}>We are RealRoadies</h1>
                <p style={styles.description}>
                  Welcome to RealRoadies, the ultimate destination for those who live
                  and breathe motorcycling! Beyond just a networking platform—we're a
                  community, an adventure, and a revolution on two wheels. Whether
                  you're a weekend warrior, a long-haul tourist, a speed junkie, or
                  a street explorer, RealRoadies is built for YOU.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AboutFeaturesAndMission />
    </>
  ); 
};

const styles = {
  // Hero Section Styles
  heroSection: {
    position: 'relative',
    minHeight: '60vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 0,
    overflow: 'hidden'
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black overlay
    width: '100%',
    height: '100%',
    padding: 0
  },
  textColumn: {
    color: '#ffffff',
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    padding: '30px',
    width: '100%',
    maxWidth: '1200px'
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
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
    width: '100%'
  },
  imagePlaceholder: {
    width: '100%',
    height: '300px',
    objectFit: 'fit',
    backgroundColor: '#333333',
    margin: '0 auto',
    maxWidth: '500px'
  },
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
    objectFit: 'cover',
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
