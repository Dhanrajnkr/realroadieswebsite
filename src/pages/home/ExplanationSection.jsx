import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ExplanationSection() {
  return (
    <section style={styles.section}>
      <Container>
        <Row>
          <Col  className="text-md-start text-start mb-3 mt-3">
            <h5 style={styles.heading}>Ride More, Explore More - Your Biking World Starts Here!</h5>
            <p style={styles.text}>
              Your passion for the open road deserves the ultimate platform. RealRoadies connects you with
              exclusive rides, top-notch gear, thrilling events, and a community that shares your love for two
              wheels. Whether you're a weekend rider or a hardcore biker, this is where every journey begins.
            </p>
          </Col>
        
        </Row>
      </Container>
    </section>
  );
}

export default ExplanationSection;

// Custom styles to enhance Bootstrap
const styles = {
  section: {
    padding: '3rem 0',
    backgroundColor: '#FFDD00',
  },
  heading: {
    fontSize: '20px', // Already matches h5 in CommonCss.css
    fontWeight: '500', // Changed from 600 to 500 to match h5 in CommonCss.css
    marginBottom: '1rem',
    color: '#000',
  },
  text: {
    fontSize: '16px', // Fixed from '16' (missing 'px') to '16px' to match paragraph in CommonCss.css
    fontWeight: '400', // Added to match paragraph in CommonCss.css
    // lineHeight: '1.6', // Already matches CommonCss.css
    color: '#000',
  }
};
