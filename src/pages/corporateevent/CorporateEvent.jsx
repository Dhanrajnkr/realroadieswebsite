import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CorporateEventFeature from './CorporateEventFeature';
import eventimg1 from '../../assets/images/RealRoadies-events1.png';
import fullscreenimg from '../../assets/images/long.png';

const CorporateEvent = () => {
  return (
  <>
    <section id="corporateEvents" style={styles.section}>
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.container}>
          {/* Header Section */}
          <Row className="mb-4 justify-content-center">
            <Col md={10}>
              <div style={styles.headerContainer}>
                <div style={styles.logoContainer}>
                  <img
                    src={eventimg1}
                    alt="event img"
                    style={styles.logo}
                  />
                </div>
                <div style={styles.headerContent}>
                  <h4 style={styles.subHeading}>
                    Elevate Your Corporate Engagement with High-Octane Experiences
                  </h4>
                  <p style={styles.introText}>
                    At RealRoadies, we redefine corporate events by merging adventure,
                    teamwork, and brand visibility—powered by motorcycles. Whether it's about
                    brand promotions, CSR initiatives, diversity & inclusion, or wellness programs,
                    we craft unforgettable experiences that go beyond the ordinary and accelerate
                    lasting impact.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Section Title */}
          <Row className="justify-content-center mb-3">
            <Col md={10}>
              <h4 style={styles.subHeading2}>
                Elevate Your Corporate Engagement with High-Octane Experiences
              </h4>
            </Col>
          </Row>

          {/* Features Section */}
          <Row className="mb-0 justify-content-center">
            <Col md={5}>
              <div style={styles.featureContainer}>
                <div style={styles.numberContainer}>
                  <span style={styles.featureNumber}>01</span>
                </div>
                <div style={styles.featureContent}>
                  <p style={styles.featureText}>
                    <span style={styles.featureTitle}>Upgraded Brand Visibility- </span>
                    Maximize exposure through customized motorcycle-led brand activations.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div style={styles.featureContainer}>
                <div style={styles.numberContainer}>
                  <span style={styles.featureNumber}>02</span>
                </div>
                <div style={styles.featureContent}>
                  <p style={styles.featureText}>
                    <span style={styles.featureTitle}>Stronger Team Dynamics- </span>
                    Foster collaboration, leadership, and trust through adrenaline-pumping group rides and challenges.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mb-0 justify-content-center">
            <Col md={5}>
              <div style={styles.featureContainer}>
                <div style={styles.numberContainer}>
                  <span style={styles.featureNumber}>03</span>
                </div>
                <div style={styles.featureContent}>
                  <p style={styles.featureText}>
                    <span style={styles.featureTitle}>Diversity & Inclusion Initiatives- </span>
                    Break barriers with women-led or inclusive group rides, promoting workplace equality.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div style={styles.featureContainer}>
                <div style={styles.numberContainer}>
                  <span style={styles.featureNumber}>04</span>
                </div>
                <div style={styles.featureContent}>
                  <p style={styles.featureText}>
                    <span style={styles.featureTitle}>Employee Wellness & Engagement- </span>
                    Boost mental and physical wellbeing with adventurous outdoor experiences.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={5}>
              <div style={styles.featureContainer}>
                <div style={styles.numberContainer}>
                  <span style={styles.featureNumber}>05</span>
                </div>
                <div style={styles.featureContent}>
                  <p style={styles.featureText}>
                    <span style={styles.featureTitle}>CSR & Cause-Driven Rides- </span>
                    Champion social responsibility by organizing rides supporting environment, safety, and community causes.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              {/* Empty column for alignment */}
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Full-screen Image Section - with reduced space above */}
      <div style={styles.fullScreenImageSection}>
        <img
          src={fullscreenimg}
          alt="Motorcycle Adventure"
          style={styles.fullScreenImage}
        />
      </div>
    </section>
    <CorporateEventFeature />
    </>
  );
};

const styles = {
  section: {
    width: '100%',
    backgroundColor: '#000000',
  },
  mainContainer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '40px 0',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  logoContainer: {
    minWidth: '100px',
    height: 'auto',
    marginRight: '20px',
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'flex-start',
  },
  logo: {
    height: '80px',
    width: 'auto',
    marginTop: '5px',
  },
  headerContent: {
    flex: 1,
  },
  subHeading: {
    fontWeight: '700',
    fontSize: '20px',
    color: '#fff',
    marginBottom: '15px',
  },
  introText: {
    fontSize: '12px',
    lineHeight: '1.6',
    color: '#a0a0a0',
    marginBottom: '0',
  },
  subHeading2:{
    fontWeight: '500',
    fontSize: '16px',
    color: '#fff',
    marginBottom: '15px',
  },
  featureContainer: {
    display: 'flex',
    marginBottom: '15px', 
    padding: '5px 0' 
  },
  numberContainer: {
    minWidth: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  featureNumber: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '42px',
    lineHeight: '1', 
  },
  featureContent: {
    flex: 1,
    paddingLeft: '15px',
    display: 'flex',
    alignItems: 'center', 
  },
  featureTitle: {
    fontWeight: '500',
    fontSize: '12px',
    color: '#fff',
    display: 'inline',
  },
  featureText: {
    fontSize: '12px',
    lineHeight: '1.4', 
    color: '#a0a0a0',
    margin: 0,
  },

   // Full-screen Image Section Styles
   fullScreenImageSection: {
    position: 'relative',
    width: '100%',
    height: '15vh',
    overflow: 'hidden',
    marginTop: 0 ,
    
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    objectPosition: 'center',
    display: 'block',
   
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

export default CorporateEvent;
