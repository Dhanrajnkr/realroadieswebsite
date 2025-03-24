import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExplanationSection from './ExplanationSection';
import FeatureSection from './FeatureSection';
import OfferSection from './OfferSection';
import homevideo from '../../assets/images/home1.mp4';

const HeroSection = () => {
  return (
    <>
      <section style={styles.heroSection}>
        <video style={styles.video} autoPlay muted loop playsInline>
          <source src={homevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div style={styles.overlay}>
          <Container>
            <Row className="justify-content-center">
              <textContainer className="col-md-12 text-center">
                <p style={styles.paragraph} className="lead">
                  RealRoadies is the ultimate one-stop platform for bikers. Manage your rides, book events, explore epic trips, connect
                  with fellow riders, and take your biking experience to the next level. Whether you're a
                  weekend explorer, a hardcore racer, or a moto influencer, this is your home on the road!
                </p>
                {/* Uncomment to enable button
                <div style={styles.buttonContainer}>
                  <button className="btn btn-warning" style={styles.button}>Book Now</button>
                </div>
                */}
              </textContainer>
            </Row>
          </Container>
        </div>
      </section>
      <OfferSection/>
      <FeatureSection/>
      <ExplanationSection/>
    </>
  );
}

export default HeroSection;

const styles = {
  heroSection: {
    position: 'relative',
    overflow: 'hidden',
    height: '60vh',
    minHeight: '400px' // Ensures minimum height on smaller screens
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(33, 37, 41, 0.5)',
    display: 'flex',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: '16px', 
    fontWeight: '400', 
    color: 'white',
    textAlign: 'center',
    margin: 0,
    padding: '0 1rem'
  },
  buttonContainer: {
    marginTop: '1.5rem',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ffc107',
    border: 'none',
    color: '#212529',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.25rem',
    fontSize: '16px', 
    fontWeight: '600', 
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer'
  }
};
