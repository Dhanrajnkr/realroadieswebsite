import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FeatureSection() {
  return (
    <section style={styles.section}>
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={5}>
            <div style={styles.imageContainer} className="text-lg-start">
              <img
                src="../src/assets/images/pic-type1.png"
                alt="Creative Collaboration"
                style={styles.featureImage}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <div style={styles.featureContent}>
              <h5 style={styles.heading}>
                RealRoadies – Ride Anytime, Anywhere!<br />
                "Your Biking Companion, Now in Your Pocket!"📲
              </h5>
              <p style={styles.paragraph}>
                Take the ultimate biking experience wherever you go! The RealRoadies app is now
                available on Play Store & App Store – manage your garage, book events, explore epic rides,
                and connect with the biking community, all at your fingertips.
              </p>
              <div style={styles.storeButtons}>
                <div style={styles.buttonContainer} className="justify-content-center justify-content-lg-start">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.stipe.realroadies"
                    style={styles.storeButton}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src="../src/assets/images/playstore.png"
                      style={styles.storeImage}
                      alt="Get it on Google Play"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/realroadies/id6447089895"
                    style={styles.storeButton}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src="../src/assets/images/appstore.png"
                      style={styles.storeImage}
                      alt="Download on App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FeatureSection;

// Custom styles to enhance Bootstrap
const styles = {
  section: {
    padding: '3rem 0',
    backgroundColor: '#f8f9fa', // Light gray background
  },
  imageContainer: {
    textAlign: 'center',
  },
  featureImage: {
    maxWidth: '100%',
    height: 'auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  featureContent: {
    padding: '1rem',
  },
  heading: {
    marginBottom: '2rem',
    fontSize: '20px', // Changed from 1.5rem to 20px to match h5 in CommonCss.css
    fontWeight: '500', // Changed from 600 to 500 to match h5 in CommonCss.css
    lineHeight: '1.4',
    color: '#333',
  },
  paragraph: {
    marginBottom: '1rem',
    fontSize: '16px', // Changed from 1rem to 16px to match paragraph in CommonCss.css
    fontWeight: '400', // Added to match paragraph in CommonCss.css
    lineHeight: '1.6', // Already matches CommonCss.css
    color: '#555',
  },
  storeButtons: {
    marginTop: '1.5rem',
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  storeButton: {
    transition: 'transform 0.3s ease',
    display: 'inline-block',
  },
  storeImage: {
    maxWidth: '150px',
    height: 'auto',
  }
};

// Hover effect handlers
const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = 'scale(1.05)';
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = 'scale(1)';
};
