import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    navigate(`/details/${id}`);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Format level for display
  const formatLevel = (level) => {
    if (!level) return 'All Levels';
    return level.replace(/_/g, ' ');
  };

  return (
    <section id="adventureTours" style={styles.section}>
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.container}>
          {/* Tour Grid */}
          <Row className="justify-content-center">
            <Col md={10}>
              {loading ? (
                <div style={styles.loading}>Loading events...</div>
              ) : error ? (
                <div style={styles.errorContainer}>
                  <p>Error loading events: {error}</p>
                </div>
              ) : (
                <Row className="g-4">
                  {allEvents.length > 0 ? (
                    allEvents.map((event) => (
                      <Col md={6} key={event.id}>
                        <div style={styles.tourCard}>
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
                                <h4 style={styles.tourTitle}>
                                  {event.title} | <span style={styles.tourDays}>{formatLevel(event.level)}</span>
                                </h4>
                              </div>
                              {/* <div style={styles.eventDetails}>
                                <p style={styles.eventDate}>
                                  <span style={styles.eventLabel}>Date:</span> {formatDate(event.start_date)}
                                </p>
                                <p style={styles.eventTime}>
                                  <span style={styles.eventLabel}>Time:</span> {event.timings}
                                </p>
                                <p style={styles.eventLocation}>
                                  <span style={styles.eventLabel}>Location:</span> {event.address}
                                </p>
                                {event.is_multiple_days && (
                                  <p style={styles.eventMultiDay}>
                                    <span style={styles.eventLabel}>Duration:</span> Multiple days
                                  </p>
                                )}
                              </div> */}
                             <div style={styles.tourDetailsRow}>
  <div style={styles.tourDetails}>
    <span style={styles.tourOrganizer}>Organized by {event.organizer}</span>
  </div>
  <div style={styles.tourButtonContainer}>
    <Button 
      style={styles.tourButton}
      onClick={() => handleNavigateToEventDetails(event.id)}
    >
      Starting at ₹{event.price}
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
    marginBottom: '10px',
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
  eventDetails: {
    marginBottom: '15px',
  },
  eventDate: {
    fontSize: '12px',
    color: '#a0a0a0',
    margin: '2px 0',
  },
  eventTime: {
    fontSize: '12px',
    color: '#a0a0a0',
    margin: '2px 0',
  },
  eventLocation: {
    fontSize: '12px',
    color: '#a0a0a0',
    margin: '2px 0',
  },
  eventMultiDay: {
    fontSize: '12px',
    color: '#a0a0a0',
    margin: '2px 0',
  },
  eventLabel: {
    color: '#ffffff',
    fontWeight: '500',
  },
  tourDetailsRow: {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    width: '100%',
    gap: '10px', // Add space between organizer and button
    marginTop: '10px',
  },
  
  // Keep the tourDetails as is, but make it take full width
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
    fontSize: '12px',
  },
  tourButtonContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the button
    width: '100%', // Take full width
  },
  
  tourButton: {
    backgroundColor: '#FFDD00',
    color: '#000000',
    fontWeight: '500',
    width: '100%',
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
