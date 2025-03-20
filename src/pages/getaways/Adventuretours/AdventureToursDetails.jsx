import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AdventureToursDetails = () => {
  // Sample tour data
  const tours = [
    {
      id: 1,
      title: "Himalayan Expedition",
      days: 7,
      organizer: "RealRoadies Adventure Team",
      price: 1299,
      image: "../src/assets/images/ab1.png"
    },
    {
      id: 2,
      title: "Coastal Highway Tour",
      days: 5,
      organizer: "RealRoadies",
      price: 999,
      image: "../src/assets/images/ab1.png"
    },
    {
      id: 3,
      title: "Desert Safari",
      days: 4,
      organizer: "RealRoadies Desert Division",
      price: 1199,
      image: "../src/assets/images/ab1.png"
    },
    {
      id: 4,
      title: "Mountain Pass Challenge",
      days: 6,
      organizer: "RealRoadies",
      price: 1499,
      image: "../src/assets/images/ab1.png"
    }
  ];

  return (
    <section id="adventureTours" style={styles.section}>
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.container}>
          {/* Tour Grid */}
          <Row className="justify-content-center">
            <Col md={10}>
              <Row className="g-4">
                {tours.map((tour) => (
                  <Col md={6} key={tour.id}>
                    <div style={styles.tourCard}>
                      <div style={styles.imageContainer}>
                        <img
                          src={tour.image}
                          alt={tour.title}
                          style={styles.tourImage}
                        />
                      </div>
                      <div style={styles.tourContent}>
                        <div style={styles.tourInfo}>
                          <div style={styles.titleContainer}>
                            <h4 style={styles.tourTitle}>{tour.title}</h4>
                            <span style={styles.tourDays}>{tour.days} days</span>
                          </div>
                          <div style={styles.tourDetailsRow}>
                            <div style={styles.tourDetails}>
                              <span style={styles.tourOrganizer}>Organized by {tour.organizer}</span>
                            </div>
                            <Button style={styles.tourButton}>
                              Starting at ${tour.price}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Footer */}
          <Row className="mt-5 justify-content-center">
            <Col md={10} className="text-center">
              <div style={styles.footer}>
                <p style={styles.footerText}>More adventures coming soon</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
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
  tourCard: {
    backgroundColor: '#111111',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
  },
  tourImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  tourContent: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  tourInfo: {
    flex: 1,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  tourTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    margin: 0,
  },
  tourDays: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#FFDD00',
    backgroundColor: 'rgba(255, 221, 0, 0.1)',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  tourDetailsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  tourDetails: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#a0a0a0',
    margin: 0,
  },
  tourOrganizer: {
    fontSize: '12px',
  },
  tourButton: {
    backgroundColor: '#FFDD00',
    color: '#000000',
    fontWeight: '600',
    fontSize: '14px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
  },
  footer: {
    borderTop: '1px solid #333333',
    paddingTop: '20px',
    marginTop: '20px',
  },
  footerText: {
    color: '#a0a0a0',
    fontSize: '14px',
    fontStyle: 'italic',
  }
};

export default AdventureToursDetails;
