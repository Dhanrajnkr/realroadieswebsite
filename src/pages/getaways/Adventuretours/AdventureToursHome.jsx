import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdventureToursHome = () => {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState([]);
  const [allTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(true);
    fetch('/api/v1/trip/trips/categories/all', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNXSmtyLXFSRjlja2RzUUwxaWMwViJ9.eyJpc3MiOiJodHRwczovL3JlYWxyb2FkaWVzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJzbXN8Njc0NTU1MWFmOGQ1NTY0M2M4YmUwMWRjIiwiYXVkIjpbImh0dHBzOi8vcmVhbHJvYWRpZXMudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL3JlYWxyb2FkaWVzLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3NDI0NTMxMjEsImV4cCI6MTc0MjQ1NjcyMSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBwaG9uZSByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGRlbGV0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBjcmVhdGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyBkZWxldGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyB1cGRhdGU6Y3VycmVudF91c2VyX2lkZW50aXRpZXMgb2ZmbGluZV9hY2Nlc3MiLCJndHkiOiJwYXNzd29yZCIsImF6cCI6InRhVzgxNkM4T2Q2Mm9ESnFRbEtSYTVvSUdYcE4zbFhxIn0.Wj7V-ujMeg8DAhb3r3831HiXnSSuTO_qwZTLNqxo2I7WeVaxMJKOBx9AEA82iXtpy-i-OKr5gBq3ctIWRrxp987FD_roRsjH5m6VR6Q8jQ2F0pg355hUBID_cfRaDKI5jk0TiI2cHBdbWMjh6GZyfTJH5lX9Jmwr5uy9PO_0kWJ-Oe4wWYOnOOup9WRcphyiEFZ_7jbZ4VipJeP6nyJ9IHHD-GuhIeYoAfAOipELO0W6uSX8X7y0xRnzOEozaW8tcjN2Lkl0-5FwP3whYXch98HTqKMeizemzzc387EKUg-ZW_R5adGSU74KSxm-HrsrnjV1YGnDOZ3Wm8YgVR-3tw'
      }
    })
      .then(response => response.json())
      .then(data => {
        setTripData(data);
        
        // Extract all trips from different categories into a single array
        const extractedTrips = [];
        if (data && data.data) {
          data.data.forEach(category => {
            if (category.trips && Array.isArray(category.trips)) {
              extractedTrips.push(...category.trips);
            }
          });
        }
        
        setAllTrips(extractedTrips);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
 
 // Function to handle navigation to TripDetails
const handleNavigateToTripsDetails = (id) => {
  navigate(`/details/${id}`, { state: { type: 'trip' } });
};


  // Format duration for display
  const formatDuration = (duration) => {
    if (!duration) return '';
    return duration.split(' ')[0] + ' days';
  };

  // Calculate discounted price
  const calculatePrice = (price, discount) => {
    if (!price || !discount) return price;
    return Math.round(price * (1 - discount/100));
  };

  return (
    <section id="adventureTours" style={styles.section}>
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.container}>
          {/* Tour Grid */}
          <Row className="justify-content-center">
            <Col md={10}>
              {loading ? (
                <div style={styles.loading}>Loading adventures...</div>
              ) : (
                <Row className="g-4">
                  {allTrips.length > 0 ? (
                    allTrips.map((tour) => (
                      <Col md={6} key={tour._id}>
                        <div style={styles.tourCard}>
                          <div style={styles.imageContainer}>
                            <img
                              src={tour.primary_image?.link_url || "../src/assets/images/ab1.png"}
                              alt={tour.name}
                              style={styles.tourImage}
                            />
                          </div>
                          <div style={styles.tourContent}>
                            <div style={styles.tourInfo}>
                              <div style={styles.titleContainer}>
                                <h4 style={styles.tourTitle}>
                                  {tour.name} | <span style={styles.tourDays}>{formatDuration(tour.duration)}</span>
                                </h4>
                              </div>
                              <div style={styles.tourDetailsRow}>
                                <div style={styles.tourDetails}>
                                  <span style={styles.tourOrganizer}>Organized by {tour.organized_by}</span>
                                </div>
                                <Button style={styles.tourButton} 
                                onClick={() => handleNavigateToTripsDetails(tour._id)}>
                                  Starting at ₹{calculatePrice(tour.starting_market_price, tour.discount_starts)}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))
                  ) : (
                    <Col className="text-center">
                      <p style={styles.noTrips}>No adventure tours available at the moment.</p>
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
                <p style={styles.comingsoonText}>More adventures coming soon</p>
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
  comingsoonText: {
    color: '#a0a0a0',
    fontSize: '20px',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '18px',
    color: '#a0a0a0',
  },
  noTrips: {
    color: '#a0a0a0',
    fontSize: '18px',
    padding: '30px',
  }
};

export default AdventureToursHome;
