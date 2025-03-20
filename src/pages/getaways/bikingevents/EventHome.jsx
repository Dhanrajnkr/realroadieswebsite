import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EventHome = () => {
  const navigate = useNavigate();

  // Function to handle navigation to BikingEventHome
  const handleNavigateToBikingEvent = () => {
    navigate('/bikingeventshome');
  };
  
  // Sample tour data
  const tours = [
    {
      id: 1,
      title: "Himalayan Expedition",
      days: 7,
      organizer: "RealRoadies",
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
      organizer: "RealRoadies",
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
                            <h4 style={styles.tourTitle}>
                              {tour.title} | <span style={styles.tourDays}>{tour.days} days</span>
                            </h4>
                          </div>
                          <div style={styles.tourDetailsRow}>
                            <div style={styles.tourDetails}>
                              <span style={styles.tourOrganizer}>Organized by {tour.organizer}</span>
                            </div>
                            <Button 
                              style={styles.tourButton}
                              onClick={handleNavigateToBikingEvent}
                            >
                              Starting at ₹{tour.price}
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

          {/* coming soon */}
          <Row className="mt-5 justify-content-center">
            <Col md={10} className="text-center">
              <div style={styles.comingsoon}>
                <p style={styles.comingsoontext}>more coming soon</p>
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
    overflow: 'hidden',
    marginBottom: '0px',
    border: '1px solid #343a40',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '180px',
    overflow: 'hidden',
    position: 'relative',
  },
  tourImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
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
    marginBottom: '0px',
  },
  tourTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#ffffff',
    margin: 0,
    display: 'inline-block',
  },
  tourDays: {
    fontSize: '10px',
    fontWeight: '400',
    color: '#ffffff',
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
    fontSize: '12px',
    fontWeight: '400',
    color: '#a0a0a0',
    margin: 0,
  },
  tourOrganizer: {
    fontSize: '12px',
  },
  tourButton: {
    backgroundColor: '#FFDD00',
    color: '#000000',
    fontWeight: '500',
    fontSize: '15px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
  },
  comingsoon: {
    borderTop: '1px solid #333333',
    borderBottom: '1px solid #333333',
    paddingTop: '20px',
    marginTop: '20px',
    paddingBottom: '10px',
  },
  comingsoontext: {
    color: '#a0a0a0',
    fontSize: '20px',
    fontWeight: '400',
  }
};

export default EventHome;
