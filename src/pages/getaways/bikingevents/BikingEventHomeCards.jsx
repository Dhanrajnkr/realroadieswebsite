import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

const BikingEventHomeCards = () => {
  // Add state for Read More functionality
  const [expanded, setExpanded] = useState(false);
 
  // Full content text
  const fullContent = `Looking for a fun run with your sisters? Or a time trial ahead of
    the racing season in Bangalore? Or just want to experience an easy, breezy run
    on a Sunday morning in a space that doesn't make you think twice?
   
    Join us for this exciting event where participants of all skill levels are welcome.
    The route takes you through scenic paths with beautiful views of the city.
    Professional trainers will be available to provide guidance and support throughout the event.`;
 
  // Shortened content for collapsed view
  const shortContent = `Looking for a fun run with your sisters? Or a time trial ahead of
    the racing season in Bangalore? Or just want to experience an
    easy, breezy run on a Sunday morning in a space that doesn't make
    you think twice? ...`;

  // Add effect to remove focus outline from accordion
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .accordion-button:focus {
        box-shadow: none !important;
        outline: none !important;
        border-color: rgba(0,0,0,.125) !important;
      }
     
      .accordion-button:not(.collapsed) {
        color: #212529 !important;
        background-color: transparent !important;
        box-shadow: none !important;
      }
     
      .accordion-button::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
      }
    `;
    document.head.appendChild(style);
   
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={10} xl={8}>
            <Row className="gy-3">
              {/* Left Side - Sharing & Interest */}
              <Col md={3}>
                <Card className="shadow-sm" style={styles.card}>
                  <h6 style={styles.cardTitle}>Share this event</h6>
                  <div style={styles.socialIconsContainer}>
                    <a href="https://facebook.com/share" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                      <FontAwesomeIcon icon={faFacebookF} style={{...styles.socialIcon, ...styles.facebookIcon}} />
                    </a>
                   
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                      <FontAwesomeIcon icon={faInstagram} style={{...styles.socialIcon, ...styles.instagramIcon}} />
                    </a>
                   
                    <a href="https://api.whatsapp.com/send?text=Check out this event!" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                      <FontAwesomeIcon icon={faWhatsapp} style={{...styles.socialIcon, ...styles.whatsappIcon}} />
                    </a>
                   
                    <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                      <FontAwesomeIcon icon={faXTwitter} style={{...styles.socialIcon, ...styles.twitterIcon}} />
                    </a>
                  </div>
                </Card>
              </Col>

              {/* Middle Section - About */}
              <Col md={4}>
                <Card className="shadow-sm" style={styles.card}>
                  <h6 style={styles.cardTitle}>About</h6>
                  <div style={styles.cardTextContainer}>
                    <p style={styles.cardText}>
                      {expanded ? fullContent : shortContent}
                    </p>
                    <a
                      href="#"
                      style={styles.readMoreLink}
                      onClick={(e) => {
                        e.preventDefault();
                        setExpanded(!expanded);
                      }}
                    >
                      {expanded ? "Read Less" : "Read More"}
                    </a>
                  </div>
                 
                  {/* Enhanced Accordion with better styling */}
                  <div style={styles.accordionWrapper}>
                    <Accordion>
                      <Accordion.Item eventKey="0" style={styles.accordionItem}>
                        <Accordion.Header style={styles.accordionHeader}>
                          FAQs
                        </Accordion.Header>
                        <Accordion.Body style={styles.accordionBody}>
                          <p style={styles.faqQuestion}><strong>Q: What should I bring?</strong></p>
                          <p style={styles.faqAnswer}>A: Comfortable clothes, running shoes, water bottle, and your enthusiasm!</p>
                         
                          <p style={styles.faqQuestion}><strong>Q: Is there parking available?</strong></p>
                          <p style={styles.faqAnswer}>A: Yes, free parking is available at the venue.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" style={styles.accordionItem}>
                        <Accordion.Header style={styles.accordionHeader}>
                          Terms and Conditions
                        </Accordion.Header>
                        <Accordion.Body style={styles.accordionBody}>
                          <p style={styles.termsText}>By registering for this event, you agree to the following terms:</p>
                          <ul style={styles.termsList}>
                            <li style={styles.termsItem}>No refunds for cancellations less than 48 hours before the event</li>
                            <li style={styles.termsItem}>Participants must follow all safety guidelines</li>
                            <li style={styles.termsItem}>The organizer reserves the right to modify the event schedule</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Card>
              </Col>

              {/* Right Side - Location */}
              <Col md={5}>
                <Card className="shadow-sm" style={styles.card}>
                  <h6 style={styles.locationTitle}>Bengaluru</h6>
                  <p style={styles.venueName}>The Bay at Ecoworld, Bengaluru</p>
                  <p style={styles.venueAddress}>
                    RMZ Eco World Road, Adarsh Palm Retreat, Bellandur, Bengaluru,
                    Karnataka 560103, India
                  </p>
                  {/* Embedded Google Map */}
                  <iframe
                    title="Event Location"
                    src="https://maps.google.com/maps?q=RMZ%20Eco%20World%20Road,%20Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="150"
                    style={styles.mapIframe}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Styles updated to match BikingEventHome
const styles = {
  wrapper: {
    backgroundColor: '#000000',
    padding: '20px 0',
  },
  container: {
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  card: {
    padding: '20px',
    border: 'none',
    borderRadius: '0',
    backgroundColor: '#ffffff',
    marginBottom: '15px', // Added margin bottom for mobile spacing
  },
  cardTitle: {
    marginBottom: '15px',
    fontWeight: '600',
    fontSize: '16px',
    color: '#212529'
  },
  cardTextContainer: {
    marginBottom: '20px'
  },
  cardText: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.6',
    color: '#495057',
    whiteSpace: 'pre-line'
  },
  socialIconsContainer: {
    display: 'flex',
    gap: '5px',
    marginTop: '5px'
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f8f9fa',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  },
  socialIcon: {
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  },
  facebookIcon: {
    color: '#1877F2'
  },
  instagramIcon: {
    color: '#E4405F'
  },
  whatsappIcon: {
    color: '#25D366'
  },
  twitterIcon: {
    color: '#000000'
  },
  readMoreLink: {
    color: '#dc3545',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    display: 'inline-block',
    cursor: 'pointer'
  },
  accordionWrapper: {
    marginTop: '0px',
  },
  accordionItem: {
    border: 'none',
    borderBottom: '1px solid #dee2e6',
    borderRadius: '0',
  },
  accordionHeader: {
    fontSize: '16px',
    padding: '0'
  },
  accordionBody: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.6',
    backgroundColor: '#f8f9fa',
    padding: '15px 20px',
    border: 'none'
  },
  faqQuestion: {
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: '400',
  },
  faqAnswer: {
    marginBottom: '15px',
    fontSize: '16px',
    fontWeight: '400',
  },
  termsText: {
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: '400',
  },
  termsList: {
    paddingLeft: '20px',
    marginBottom: '0'
  },
  termsItem: {
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: '400',
  },
  locationTitle: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '10px',
    color: '#212529'
  },
  venueName: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '8px'
  },
  venueAddress: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#6c757d',
    marginBottom: '15px'
  },
  mapIframe: {
    border: '0',
    borderRadius: '0'
  }
};

export default BikingEventHomeCards;
