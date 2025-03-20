import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid style={styles.mainContainer} className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <Row>
              {/* Left Section - Company Name */}
              <Col md={3} style={styles.column}>
                <h2 className="fw-bold" style={styles.companyName}>RealRoadies</h2>
                <p style={styles.tagline}>Your adventure journey starts here</p>
                
                {/* Social Media Icons */}
                <div className="d-flex gap-3 mt-4">
                  <a href="#" style={styles.socialIcon}><i className="bi bi-facebook"></i></a>
                  <a href="#" style={styles.socialIcon}><i className="bi bi-linkedin"></i></a>
                  <a href="#" style={styles.socialIcon}><i className="bi bi-twitter"></i></a>
                  <a href="#" style={styles.socialIcon}><i className="bi bi-instagram"></i></a>
                </div>
              </Col>

              {/* Center Section - Form */}
              <Col md={5} style={styles.column}>
                <h3 className="fw-bold mb-4" style={styles.heading}>Reach out with any questions</h3>
                <Form className="mt-3">
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="firstName">
                        <Form.Label style={styles.formLabel}>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={styles.underlinedInput}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="lastName">
                        <Form.Label style={styles.formLabel}>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={styles.underlinedInput}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label style={styles.formLabel}>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder=""
                          style={styles.underlinedInput}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="phone">
                        <Form.Label style={styles.formLabel}>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={styles.underlinedInput}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label style={styles.formLabel}>Leave us a message...</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder=""
                      style={styles.underlinedTextarea}
                    />
                  </Form.Group>

                  <Button style={styles.submitButton}>
                    Submit
                  </Button>
                </Form>
              </Col>

              {/* Right Section - Address */}
              <Col md={4} style={styles.column}>
              <h3 className="fw-bold mb-4" style={styles.heading}>Reach us</h3>
                <div style={styles.addressBox}>
                  <h6 style={styles.addressTitle}>ADDRESS</h6>
                  <p style={styles.addressText}>#247, 1st Floor, 4th Main Road, Domlur
                  <br />2nd Stage, Bengaluru, 560071.</p>

                  <h6 style={styles.addressTitle}>PHONE</h6>
                  <p style={styles.addressText}>+91 9448388572<br/>
                  +91 9886115772</p>

                  <h6 style={styles.addressTitle}>EMAIL</h6>
                  <p style={styles.addressText}>info@realroadies.com</p>
                  
                  <h6 style={styles.addressTitle}>BUSINESS HOURS</h6>
                  <p style={styles.addressText}>
                    Monday - Friday: 9AM - 6PM
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '40px 0'
  },
  column: {
    alignSelf: 'flex-start',
    paddingTop: '20px'
  },
  companyName: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '500'
  },
  tagline: {
    color: '#cccccc',
    fontSize: '16px',
    marginTop: '10px'
  },
  heading: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '500',
  },
  sectionTitle: {
    color: '#cccccc',
    letterSpacing: '1px',
    fontSize: '14px',
    fontWeight: '500'
  },
  formLabel: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#ffffff'
  },
  underlinedInput: {
    padding: '0px 2px',
    border: 'none',
    borderRadius: '0',
    borderBottom: '2px solid #444',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
    color: '#ffffff',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      boxShadow: 'none',
      borderColor: '#FFDD00',
      outline: 'none'
    }
  },
  underlinedTextarea: {
    padding: '0px 2px',
    border: 'none',
    borderRadius: '0',
    borderBottom: '2px solid #444',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
    color: '#ffffff',
    resize: 'none',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      boxShadow: 'none',
      borderColor: '#FFDD00',
      outline: 'none'
    }
  },
  submitButton: {
    backgroundColor: '#FFDD00',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '0px',
    fontWeight: '500',
    color: '#000000',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000'
    }
  },
  addressBox: {
    padding: '0',
    borderRadius: '0px',
    height: '100%',
  },
  addressTitle: {
    fontSize: '14px',
    fontWeight: '700',
    marginTop: '20px',
    marginBottom: '8px',
    color: '#ffffff'
  },
  addressText: {
    fontSize: '14px',
    color: '#cccccc',
    marginBottom: '20px'
  },
  socialIcon: {
    color: '#ffffff',
    fontSize: '22px',
    marginRight: '15px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#FFDD00'
    }
  }
};

export default Contact;
