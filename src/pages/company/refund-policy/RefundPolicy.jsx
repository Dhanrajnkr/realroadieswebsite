import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const RefundPolicy = () => {
  return (
    <>
      <section style={styles.section}>
        <Container fluid style={styles.container}>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={10} xl={10}>
              <div style={styles.content}>
                <h2 style={styles.title}>RealRoadies Refund Policy</h2>

                <h2 style={styles.subheading}>1. Overview</h2>
                <p style={styles.text}>
                  At RealRoadies, we strive to provide the best experience for our users. If you are not completely satisfied with your purchase, we offer a refund policy subject to the terms and conditions outlined below.
                </p>

                <h2 style={styles.subheading}>2. Eligibility for Refunds</h2>
                <p style={styles.text}>
                  Refunds are applicable under the following conditions:
                  <ul style={styles.list}>
                    <li style={styles.listItem}>If a user is charged incorrectly due to a technical error.</li>
                    <li style={styles.listItem}>If the purchased service/subscription is not activated or delivered within the promised time frame.</li>
                    <li style={styles.listItem}>If a user cancels a subscription within the permitted refund window as per platform policies (Google Play/App Store).</li>
                    <li style={styles.listItem}>If the service provided is significantly different from the description mentioned in the app.</li>
                  </ul>
                </p>

                <h2 style={styles.subheading}>3. Non-Refundable Situations</h2>
                <p style={styles.text}>
                  Refunds will not be provided in the following cases:
                  <ul style={styles.list}>
                    <li style={styles.listItem}>If the user has used the service for a substantial period.</li>
                    <li style={styles.listItem}>If the user changes their mind after making a purchase.</li>
                    <li style={styles.listItem}>If the refund request is made beyond the applicable refund window.</li>
                    <li style={styles.listItem}>If the issue is caused by factors beyond our control (e.g., device incompatibility).</li>
                  </ul>
                </p>

                <h2 style={styles.subheading}>4. How to Request a Refund</h2>
                <p style={styles.text}>
                  To request a refund, follow these steps:<br/><br/>
                  
                  1. Contact our support team via <a href="mailto:srikanth@stipe.so" style={styles.link}>srikanth@stipe.so</a> with the following details:
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Transaction ID</li>
                    <li style={styles.listItem}>Reason for refund</li>
                    <li style={styles.listItem}>Screenshots (if applicable)</li>
                  </ul>
                  2. Our team will review the request and respond within 5-7 business days.<br/>
                  3. If approved, refunds will be processed to the original payment method within 7-10 business days.
                </p>

                <h2 style={styles.subheading}>5. Refund Processing Time</h2>
                <p style={styles.text}>
                  Refunds may take different durations depending on the payment method:
                  <ul style={styles.list}>
                    <li style={styles.listItem}>UPI/Wallet Payments: 3-5 business days</li>
                    <li style={styles.listItem}>Credit/Debit Cards: 5-7 business days</li>
                    <li style={styles.listItem}>Net Banking: 7-10 business days</li>
                  </ul>
                </p>

                <h2 style={styles.subheading}>6. Changes to the Refund Policy</h2>
                <p style={styles.text}>
                  RealRoadies reserves the right to modify this refund policy at any time. Updates will be communicated via our website or app.<br/><br/>
                  
                  For any queries, reach out to <a href="mailto:srikanth@stipe.so" style={styles.link}>srikanth@stipe.so</a>.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const styles = {
  section: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    paddingTop: '40px',
    paddingBottom: '40px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  container: {
    padding: 0,
    overflowX: 'hidden',
  },
  content: {
    padding: '30px',
    backgroundColor: '#000000',
    borderRadius: '0px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '500',
    marginBottom: '1.5rem',
    color: '#ffffff',
    borderBottom: '1px solid #333',
    paddingBottom: '10px',
  },
  subheading: {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '1rem',
    marginTop: '2rem',
    color: '#ffffff',
    borderLeft: '3px solid #FFDD00',
    paddingLeft: '10px',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#ffffff',
    marginBottom: '1.5rem',
  },
  list: {
    marginTop: '1rem',
    marginBottom: '1rem',
    paddingLeft: '2rem',
  },
  listItem: {
    marginBottom: '0.75rem',
    color: '#ffffff',
  },
  link: {
    color: '#FFDD00',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  }
};

export default RefundPolicy;
