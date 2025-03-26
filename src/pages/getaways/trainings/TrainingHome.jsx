import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Qrcode from '../../../components/qr/qrcode';

const TrainingHome = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/v1/event/events/categories/trainings', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNXSmtyLXFSRjlja2RzUUwxaWMwViJ9.eyJpc3MiOiJodHRwczovL3JlYWxyb2FkaWVzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJzbXN8Njc0NTU1MWFmOGQ1NTY0M2M4YmUwMWRjIiwiYXVkIjpbImh0dHBzOi8vcmVhbHJvYWRpZXMudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL3JlYWxyb2FkaWVzLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3NDI0NTMxMjEsImV4cCI6MTc0MjQ1NjcyMSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBwaG9uZSByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGRlbGV0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBjcmVhdGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyBkZWxldGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyB1cGRhdGU6Y3VycmVudF91c2VyX2lkZW50aXRpZXMgb2ZmbGluZV9hY2Nlc3MiLCJndHkiOiJwYXNzd29yZCIsImF6cCI6InRhVzgxNkM4T2Q2Mm9ESnFRbEtSYTVvSUdYcE4zbFhxIn0.Wj7V-ujMeg8DAhb3r3831HiXnSSuTO_qwZTLNqxo2I7WeVaxMJKOBx9AEA82iXtpy-i-OKr5gBq3ctIWRrxp987FD_roRsjH5m6VR6Q8jQ2F0pg355hUBID_cfRaDKI5jk0TiI2cHBdbWMjh6GZyfTJH5lX9Jmwr5uy9PO_0kWJ-Oe4wWYOnOOup9WRcphyiEFZ_7jbZ4VipJeP6nyJ9IHHD-GuhIeYoAfAOipELO0W6uSX8X7y0xRnzOEozaW8tcjN2Lkl0-5FwP3whYXch98HTqKMeizemzzc387EKUg-ZW_R5adGSU74KSxm-HrsrnjV1YGnDOZ3Wm8YgVR-3tw'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setEventData(data);

        // Extract all events from different categories into a single array
        const extractedEvents = [];
        if (data && data.data) {
          data.data.forEach(category => {
            if (category.events && Array.isArray(category.events)) {
              extractedEvents.push(...category.events);
            }
          });
        }

        setAllEvents(extractedEvents);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Function to handle navigation to EventDetails
  const handleNavigateToEventDetails = (id) => {
    navigate(`/details/${id}`, { state: { type: 'event' } });
  };

  // Calculate discounted price
  const calculatePrice = (price, discount) => {
    if (!price || !discount) return price;
    return Math.round(price * (1 - discount / 100));
  };

  return (
    <>
      <section id="trainingEvents" style={styles.section}>
        <Container fluid style={styles.mainContainer}>
          <Container style={styles.container}>
            {/* Event Grid */}
            <Row className="justify-content-center">
              <Col md={10}>
                {loading ? (
                  <div style={styles.loading}>Loading trainings...</div>
                ) : error ? (
                  <div style={styles.errorContainer}>
                    <p>Error loading trainings: {error}</p>
                  </div>
                ) : (
                  <Row className="g-4">
                    {allEvents.length > 0 ? (
                      allEvents.map((event) => (
                        <Col md={6} key={event.id}>
                          <div
                            style={{
                              ...styles.tourCard,
                              cursor: 'pointer'
                            }}
                            onClick={() => handleNavigateToEventDetails(event.id)}
                          >
                            <div style={styles.imageContainer}>
                              <img
                                src={event.primary_image?.link_url || "../src/assets/images/ab1.png"}
                                alt={event.title}
                                style={styles.tourImage}
                                onError={(e) => {
                                  e.target.src = "../src/assets/images/ab1.png";
                                }}
                              />
                            </div>
                            <div style={styles.tourContent}>
                              <div style={styles.tourInfo}>
                                <div style={styles.titleContainer}>
                                  <h6 style={styles.tourTitle}>
                                    {event.title}
                                  </h6>
                                  <br /><span style={styles.tourOrganizer} className='text-start'>Organized by {event.organizer}</span>
                                  <div style={styles.tourDetails}>
                                    <Button
                                      style={styles.tourButton}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleNavigateToEventDetails(event.id);
                                      }}
                                    >
                                      Starting at ₹{calculatePrice(event.price, event.discount || 0)}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))
                    ) : (
                      <Col className="text-center">
                        <p style={styles.noEvents}>No training events available at the moment.</p>
                      </Col>
                    )}
                  </Row>
                )}
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <Qrcode />
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
    maxWidth: '1000px',
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
    objectFit: 'fit',
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
    display: 'inline-block',
    paddingBottom: '0px',
  },
  tourDays: {
    fontSize: '10px',
    fontWeight: '400',
    color: '#ffffff',
  },
  tourDetailsRow: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '10px',
  },
  tourDetails: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: '400',
    color: '#a0a0a0',
    margin: 0,
    width: '100%',
  },
  tourOrganizer: {
    color: '#a0a0a0',
    fontSize: '12px',
  },
  tourButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  tourButton: {
    backgroundColor: '#FFDD00',
    color: '#000000',
    fontWeight: '500',
    fontSize: '15px',
    padding: '8px 20px',
    border: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
    width: '100%',
    marginTop: '10px'
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '18px',
    color: '#a0a0a0',
  },
  noEvents: {
    color: '#a0a0a0',
    fontSize: '18px',
    padding: '30px',
  },
  errorContainer: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '18px',
    color: '#ff6b6b',
  }
};

export default TrainingHome;
