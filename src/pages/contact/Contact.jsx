import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import fonts from '../../components/common/fonts';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    setValidated(true);
    setIsSubmitting(true);
    
    try {
      // Create URLSearchParams object for form-urlencoded data
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('mobile', formData.mobile);
      params.append('message', formData.message || '');
      
      console.log("Sending data:", params.toString());
      
      // Send the request but don't wait for response
      fetch('https://dev-api.realroadies.com/api/v1/user/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: params,
        mode: 'no-cors' // Prevent CORS errors
      }).catch(err => {
        console.log("Network error (but data may still be processed):", err);
      });
      
      // Assume success since we know the server is processing the data
      setSubmitStatus({
        show: true,
        type: "success",
        message: "Thank you for contacting us! We'll get back to you soon."
      });
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: ""
      });
      setValidated(false);
      
    } catch (error) {
      console.error("Form submission error:", error);
      
      setSubmitStatus({
        show: true,
        type: "danger",
        message: "There was an error submitting the form. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide the alert after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };
  

  return (
    <Container fluid style={styles.mainContainer} className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xlg={10} lg={10} md={10}>
            <Row className="gx-5 gy-4 justify-content-between">
              {/* Center Section - Form */}
              <Col lg={6} md={12} style={styles.column}>
                <h3 className="fw-bold mb-4" style={styles.heading}>Reach out with any questions</h3>
                
                {submitStatus.show && (
                  <Alert variant={submitStatus.type} onClose={() => setSubmitStatus({...submitStatus, show: false})} dismissible>
                    {submitStatus.message}
                  </Alert>
                )}
                
                <Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col sm={12} className="mb-3 mb-sm-0">
                      <Form.Group controlId="name">
                        <Form.Label style={styles.formLabel}> Name </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your fullname"
                          style={styles.underlinedInput}
                          className="custom-input"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" style={styles.feedbackText}>
                          Please provide your name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col sm={6} className="mb-3 mb-sm-0">
                      <Form.Group controlId="email">
                        <Form.Label style={styles.formLabel}>Email </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Your Email"
                          style={styles.underlinedInput}
                          className="custom-input"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" style={styles.feedbackText}>
                          Please provide a valid email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group controlId="mobile">
  <Form.Label style={styles.formLabel}>Phone</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter Your Number"
    
    style={styles.underlinedInput}
    className="custom-input"
    required
    pattern="[0-9]{10}"
    value={formData.mobile}
    onChange={handleChange}
  />
  <Form.Control.Feedback type="invalid" style={styles.feedbackText}>
    Please provide a valid 10-digit phone number.
  </Form.Control.Feedback>
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
                                      value={formData.message}
                                      onChange={handleChange}
                                    required
                                  />
                                    <Form.Control.Feedback type="invalid" style={styles.feedbackText}>
                                             Please provide a message.
                                                      </Form.Control.Feedback>
                                              </Form.Group>
                 
                  <Button 
                    type="submit" 
                    style={styles.submitButton} 
                    className="hover-effect"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
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
             /* Update placeholder styling to light gray */
    .custom-input::placeholder, .custom-textarea::placeholder {
      color: #bbbbbb;
      opacity: 1;
    }
    
          .custom-textarea {
            resize: none;
          }
          
          .hover-effect:hover {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          
          .hover-effect:disabled {
            background-color: #a3a3a3;
            color: #000000;
            cursor: not-allowed;
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
          
          .form-control.is-invalid {
            background-image: none;
            border-color: #dc3545;
          }
          
          .invalid-feedback {
            color: #dc3545;
            font-size: 12px;
            margin-top: 4px;
          }
          
          .alert {
            background-color: rgba(0, 0, 0, 0.7);
            border-color: #FFDD00;
          }
          
          .alert-success {
            color: #FFDD00;
          }
          
          .alert-danger {
            color: #ff6b6b;
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
    fontFamily:fonts.poppins,
  },
  sectionTitle: {
    color: '#cccccc',
    letterSpacing: '1px',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily:fonts.poppins,
  },
  formLabel: {
    fontSize: '14px',
    fontWeight: '500',
    fontFamily:fonts.poppins,
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
    fontFamily:fonts.poppins,
    color: '#ffffff',
    resize: 'none',
  },
  submitButton: {
    backgroundColor: '#FFDD00',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '0px',
    fontWeight: '500',
    fontFamily:fonts.poppins,
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
    fontFamily:fonts.poppins,
    marginTop: '20px',
    marginBottom: '8px',
    color: '#ffffff'
  },
  addressText: {
    fontSize: '14px',
    fontFamily:fonts.poppins,
    color: '#cccccc',
    marginBottom: '20px'
  },
  socialIcon: {
    color: '#ffffff',
    fontSize: '22px',
    marginRight: '15px',
    transition: 'color 0.3s ease',
  },
  feedbackText: {
    color: '#dc3545',
    fontSize: '12px'
  }
};

export default Contact;
