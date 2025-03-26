import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Getawaysimg from '../../assets/images/4.png'
import Garageimg from '../../assets/images/garage.png'
import Eventsimg from '../../assets/images/rr-events.png'
import Storeimg from '../../assets/images/5.png'

function OfferSection() {
  return (
    <section className="offer-section py-5" style={styles.section}>
      <Container>
        <Row className="mb-4">
          <Col xs={12} className="text-start">
            <h5 className="offer-heading" style={styles.heading}>
            The RealRoadies Ecosystem: One Platform, Endless Possibilities
            </h5>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={3} sm={6}>
            <div
              className="feature-card h-100"
              style={styles.featureCard}
            >
              <img src={Getawaysimg} alt="Bike" className="img-fluid" style={styles.offerImage} />
              <h6 style={styles.cardTitle}>RealRoadies Getaways </h6>
              <p style={styles.cardText}>
                Explore breathtaking bike tours, level up your skills with expert
                training, or attend thrilling moto events. Whether it's adventure, learning, or racing,
                RealRoadies Getaways offer the best biking experiences.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div
              className="feature-card h-100"
              style={styles.featureCard}
            >
               <img src={Garageimg} alt="Bike" className="img-fluid" style={styles.offerImage} />
              <h6 style={styles.cardTitle}>RealRoadies Garage </h6>
              <p style={styles.cardText}>
                Store and manage all your motorcycles in one place. Keep track of
                insurance, PUC, service reminders, and more. Stay organized and focus on the ride while we
                handle the details.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div
              className="feature-card h-100"
              style={styles.featureCard}
            >
               <img src={Storeimg} alt="Bike" className="img-fluid" style={styles.offerImage} />
               <h6 style={{...styles.cardTitle, marginTop: '25px'}}>RealRoadies TalentHunt</h6>
              <p style={styles.cardText}>
              Fueling the future of Indian motorsport by discovering, promoting, and empowering young riders through events, sponsorships, and global opportunities. Join us in driving their journey to success!
              </p>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div
              className="feature-card h-100"
              style={styles.featureCard}
            >
              <img src={Eventsimg} alt="Bike" className="img-fluid" style={styles.offerImage} />
              <h6 style={styles.cardTitle}>RealRoadies Events </h6>
              <p style={styles.cardText}>
                Join the most exciting motorcycle events, from track days to moto
                festivals. Whether you're racing, networking, or just celebrating the riding culture, find
                events that fuel your passion.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OfferSection;

// Custom styles to enhance Bootstrap
const styles = {
  section: {
    backgroundColor: '#000000',
  },
  heading: {
    fontSize: '28px', // Changed to match h5 in CommonCss.css
    fontWeight: '500', // Changed to match h5 in CommonCss.css
    marginBottom: '18px',
    color: '#ffffff',
  },
  featureCard: {
    height: '100%',
    padding: '1.25rem',
    backgroundColor: '#000000',
  },
  offerImage: {
    width: '80%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto', // This centers the image horizontally
  },
  cardTitle: {
    fontSize: '16px', // Changed to match h6 in CommonCss.css
    fontWeight: '500', // Changed to match h6 in CommonCss.css
    marginTop: '1rem',
    textAlign: 'center',
    color: '#fff',
  },
  cardText: {
    fontSize: '13px', // Changed to match paragraph in CommonCss.css
    fontWeight: '300', // Changed to match paragraph in CommonCss.css
    lineHeight: '1.3', // Matches the line-height in CommonCss.css
    color: '#fff',
    textAlign: 'center',
  }
};
