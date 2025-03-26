import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid style={styles.mainContainer} className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xlg={10} lg={10} md={10}>
            {/* Increased gap between columns with gx-md-5 and added justify-content-between */}
            <Row className="gx-5 gy-4 justify-content-between">
              {/* Center Section - Form */}
              <Col lg={6} md={12} style={styles.column}>
                <h3 className="fw-bold mb-4" style={styles.heading}>Reach out with any questions</h3>
                <Form className="mt-3">
                  <Row className="mb-3">
                    <Col sm={6} className="mb-3 mb-sm-0">
                      <Form.Group controlId="firstName">
                        <Form.Label style={styles.formLabel}>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={styles.underlinedInput}
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="lastName">
                        <Form.Label style={styles.formLabel}>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={styles.underlinedInput}
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col sm={6} className="mb-3 mb-sm-0">
                      <Form.Group controlId="email">
                        <Form.Label style={styles.formLabel}>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder=""
                          style={styles.underlinedInput}
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="phone">
                        <Form.Label style={styles.formLabel}>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={styles.underlinedInput}
                          className="custom-input"
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
                      className="custom-textarea"
                    />
                  </Form.Group>

                  <Button style={styles.submitButton} className="hover-effect">
                    Submit
                  </Button>
                </Form>
              </Col>

              {/* Right Section - Address */}
              <Col lg={5} md={10} style={styles.column}>
                <h3 className="fw-bold mb-4" style={styles.heading}>Reach us</h3>
                <div style={styles.addressBox}>
                  <h6 style={styles.addressTitle}>ADDRESS</h6>
                  <p style={styles.addressText}>#247, 1st Floor, 4th Main Road, Domlur
                 2nd Stage, Bengaluru, 560071.</p>

                  <h6 style={styles.addressTitle}>PHONE</h6>
                  <p style={styles.addressText}>+91 90082 90111<br/>
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

      {/* Custom CSS for form elements and increased spacing */}
      <style type="text/css">
        {`
          .custom-input, .custom-textarea {
            background-color: transparent;
            color: #ffffff;
            border: none;
            border-radius: 0;
            border-bottom: 2px solid #444;
            padding: 0.375rem 0.75rem 0.375rem 0;
          }
          
          .custom-input:focus, .custom-textarea:focus {
            background-color: transparent;
            color: #ffffff;
            box-shadow: none;
            border-color: #FFDD00;
          }
          
          .custom-textarea {
            resize: none;
          }
          
          .hover-effect:hover {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          
          /* Increase gap between columns on larger screens */
          @media (min-width: 992px) {
            .gx-5 > * {
              padding-right: 2rem !important;
              padding-left: 2rem !important;
            }
          }
          
          @media (max-width: 768px) {
            .custom-input, .custom-textarea {
              font-size: 14px;
            }
          }
        `}
      </style>
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
  },
  submitButton: {
    backgroundColor: '#FFDD00',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '0px',
    fontWeight: '500',
    color: '#000000',
    transition: 'all 0.3s ease',
  },
  addressBox: {
    padding: '0',
    borderRadius: '0px',
    height: '100%',
  },
  addressTitle: {
    fontSize: '14px',
    fontWeight: '500',
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
  }
};

export default Contact;
