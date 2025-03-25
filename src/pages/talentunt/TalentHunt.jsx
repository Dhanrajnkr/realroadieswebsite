import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../assets/images/talenthunt.png';
import TalentHuntFeatures from './TalentHuntFeatures';

const TalentHunt = () => {
  return (
    <>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Text Section */}
            <Col md={8} style={styles.textColumn}>
              <h3 style={styles.title}> Real Roadies, we’re more than just a platform—we’re a driving force behind India’s next generation of racing talent.</h3>
              <p style={styles.description}>
              Empowering Young, Upcoming Riders – Our mission is to identify, nurture, and promote rising motorsport talent, giving them the opportunities they deserve.
Creating a Pathway to Global Recognition – Through strategic collaborations, sponsorships, and high-impact events, we help Indian riders gain international visibility and the resources they need to compete at the highest level.
A Call to Brands & Sponsors – By partnering with Real Roadies, you're not just supporting one rider—you’re investing in the future of Indian motorsport, ensuring young talent gets the recognition, training, and opportunities to shine on the world stage.
Join us in shaping the future of Indian racing!
              </p>
            </Col>

            {/* Right Side - Placeholder for Image/Video */}
            <Col md={4} className="text-center">
              <img
          src={image}
          alt="Motorcycle Adventure"
          style={styles.imagePlaceholder}
        />
            </Col>
          </Row>
        </Container>
      </div>

      
      <div style={styles.fullScreenImageSection}>
        <section style={styles.section}>
              <Container>
                  <Col md={10} className="text-md-start text-start mb-3 mt-3">
                    <h5 style={styles.heading}>Our Talent</h5>
                  </Col>
                  <Col md={10} className="text-md-start text-start mt-3">
                    <p style={styles.text}>
                    Supporting Rushab Shah’s Historic Journey – We have been instrumental in providing the necessary exposure, networking opportunities, and brand partnerships to help him break international barriers.<br/>
                    First-Ever Indian Road Racer – Rushab is making history as the first Indian rider to compete in an international road race, breaking barriers and putting India on the global motorsport map.
                    </p>
                  </Col>
                   <button style={styles.button1}>
                 
                    Sponsor Rushab
                
                    </button>
                    <button style={styles.button2}>
                   
                    Know more
                    
                    </button>
              </Container>
            </section>
      </div>
      <TalentHuntFeatures />
    </>
  ); 
};

const styles = {
  heroSection: {
    backgroundColor: '#000000',
    padding: '50px 0', 
    minHeight: '60vh', 
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 0 
  },
  textColumn: {
    color: '#ffffff',
    paddingRight: '20px',
    paddingLeft: '20px'
  },
  greeting: {
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: '700'
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '15px' 
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '20px' 
  },
  imagePlaceholder: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    backgroundColor: '#333333',
    margin: '0 auto',
    maxWidth: '500px'
  },
 
 
  section: {
    padding: '3rem 0',
    backgroundColor: '#FFDD00',
  },
  heading: {
    fontSize: '24px', 
    fontWeight: '500', 
    marginBottom: '1rem',
    color: '#000',
  },
  text: {
    fontSize: '16px',
    fontWeight: '400', 
    lineHeight: '1.6', 
    color: '#000',
  },
  button1:{
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#333',
    }
  },
    button2:{
    backgroundColor: '#FFDD00',
    color: '#000000',
    padding: '10px 20px',
    border: '1px solid #000000',
    borderRadius: '0px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#333',
    },
  }
};

export default TalentHunt;