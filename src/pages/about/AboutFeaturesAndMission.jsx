import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Garage from '../../assets/images/garage.png'
import event from '../../assets/images/rr-events.png';
import reward from '../../assets/images/rewards.png';
import get from '../../assets/images/4.png';
import store from '../../assets/images/3.png';
import utiles from '../../assets/images/utilities.png';
import hunt from '../../assets/images/5.png';
import mission from '../../assets/images/we-are-rr.jpeg';
import backimg from '../../assets/images/ourCulture.jpeg';

const FeaturesAndMission = () => {
  return (
    <>
    <Container fluid style={styles.container}>
      {/* Products and Features Section */}
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <h3 style={styles.sectionTitle} className="text-start text-md-start">Products and Features</h3>
        </Col>
      </Row>
     
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
          <FeatureBox
            title="RealRoadies Garage"
            description="A digital hub for your rides with high-visibility, emergency data, service history, and ownership details."
            imageUrl={Garage}
          />
          <FeatureBox
            title="RealRoadies Corporate Events"
            description="Motorcycle-centric corporate events that encourage team bonding and adrenaline-fueled networking."
            imageUrl={event}
          />
          <FeatureBox
            title="RealRoadies Rewards"
            description="A membership program that unlocks exclusive discounts, offers, and early-bird access to events."
            imageUrl={reward}
          />
        </Col>
        <Col xs={12} md={5}>
          <FeatureBox
            title="RealRoadies Getaways"
            description="Exclusive long-distance, high-adventure, and resilience-rich motorcycle tours for enthusiasts."
            imageUrl={get}
          />
          <FeatureBox
            title="RealRoadies Store"
            description="Top-tier biking gear, safety essentials, and lifestyle merchandise tailored for motorcycle enthusiasts."
            imageUrl={store}
          />
          <FeatureBox
            title="RealRoadies Utilities"
            description="Smart vehicle tracking, safety kits, and curated content with AI-driven biking insights."
            imageUrl={utiles}
          />
        </Col>
      </Row>
     
      {/* TalentHunt Section */}
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card style={styles.featureCard}>
            <Row className="align-items-center g-0">
              <Col xs={2} md={1}>
                <img
                  src={hunt}
                  alt="TalentHunt"
                  style={styles.featureImage}
                  className="img-fluid"
                />
              </Col>
              <Col xs={10} md={11} style={styles.talentHuntTextCol}>
                <h5 style={styles.featureTitle}>RealRoadies TalentHunt: Fueling the Next Motorsport Champion</h5>
                <div style={styles.featureDescription}>
                  At RealRoadies, we're on a mission to discover and support the next big motorsport champion. We connect aspiring racers with corporate sponsorship opportunities, helping them break into the world of MotoGP, endurance racing, and off-road challenges.<br />
                  <strong>If you're a company looking to back raw talent or a rider chasing your dream, join us in shaping the future of motorsports! 🚀🔥</strong>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Our Mission Section */}
      <Row className="justify-content-center" style={styles.missionRow}>
        <Col xs={12} md={5} className="mb-4 mb-md-0">
          <h3 style={styles.sectionTitle} className="text-start text-md-start">Our Mission</h3>
          <p style={styles.missionText}>
            We exist to inspire, connect, and drive an ecosystem for bikers. From elite expeditions to
            community events, we provide platforms for pure biking culture, rider socialization, and
            strategic innovations.
          </p>
        </Col>
        <Col xs={12} md={5} className="text-center">
          <img
            src={mission}
            alt="Our Mission"
            style={styles.missionImage}
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Our Culture Section */}
      <Row className="justify-content-center m-0" style={styles.cultureRow}>
        <Col xs={12} className="p-0">
          <div style={{
            position: 'relative',
            width: '100vw',  // Use viewport width
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            marginTop: '3.5rem',
            overflow: 'hidden',
            marginLeft: 'calc(-50vw + 50%)', // This centers the div if parent has width constraints
            marginRight: 'calc(-50vw + 50%)'
          }}>
            {/* Full screen background image */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${backimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 1
            }}></div>
           
            {/* Dark overlay for better text readability */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 2
            }}></div>
           
            {/* Content with left alignment */}
            <div className="container-fluid" style={{ position: 'relative', zIndex: 3, }}>
              <div className="row">
                <div className="col-12 col-md-10 offset-md-1 text-start">
                  <h3 style={{...styles.sectionTitle, marginBottom: '25px'}} className="text-start text-md-start">Our Culture</h3>
                  <p style={{
                    color: '#ffffff',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    textAlign: 'left'
                  }}>
                    We are riders first. Our team is built on a shared passion for motorcycles, adventure, and the spirit of the open road.
                    As enthusiasts, experts, and innovators, we believe in the power of community and the bond that unites all bikers.
                    Everything we create at RealRoadies is driven by this passion—whether it's fostering the ultimate biker brotherhood,
                    using technology to enhance safety, or redefining the riding experience. For us, it's more than just motorcycles;
                    it's a way of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};
   
// Feature Box Component
const FeatureBox = ({ title, description, imageUrl }) => {
  return (
    <Card style={styles.featureCard}>
      <Row className="align-items-center g-0">
        <Col xs={2}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              style={styles.featureImage}
              className="img-fluid"
            />
          ) : (
            <div style={styles.featurePlaceholder}></div>
          )}
        </Col>
        <Col xs={10} style={styles.featureTextCol}>
          <h5 style={styles.featureTitle}>{title}</h5>
          <div style={styles.featureDescription}>
            {description}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const styles = {
  container: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '3rem 1rem', // Reduced horizontal padding for mobile
    width: '100%',
  },
  sectionTitle: {
    marginBottom: '25px',
    fontWeight: '700',
    color: '#ffffff',
    fontSize: 'calc(1.2rem + 0.3vw)', // Responsive font size
  },
  featureCard: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ffffff',
    marginBottom: '1.5rem',
  },
  featurePlaceholder: {
    width: '60px',
    height: '60px',
    backgroundColor: '#333333',
    margin: '0 auto'
  },
  featureImage: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    margin: '0 auto',
    display: 'block'
  },
  featureTextCol: {
    paddingLeft: '15px',
  },
  talentHuntTextCol: {
    paddingLeft: '15px',
  },
  featureTitle: {
    marginBottom: '0.5rem',
    fontWeight: '500',
    fontSize: 'calc(0.8rem + 0.1vw)' // Responsive font size
  },
  featureDescription: {
    color: '#a0a0a0',
    fontSize: 'calc(0.75rem + 0.1vw)', // Responsive font size
    marginBottom: '0.5rem',
    lineHeight: '1.4' // Improved line height for readability
  },
  missionRow: {
    marginTop: '3.5rem',
    alignItems: 'center'
  },
  missionText: {
    color: '#a0a0a0',
    lineHeight: '1.6',
    fontSize: 'calc(0.85rem + 0.1vw)', // Responsive font size
    fontWeight: '400',
  },
  missionImage: {
    width: '100%',
    height: 'auto', // Changed to auto for better responsiveness
    objectFit: 'cover',
    maxWidth: '400px',
    margin: '0 auto',
  },
  cultureRow: {
    marginTop: '3.5rem',
    alignItems: 'center'
  },
  cultureSection: {
    textAlign: 'center'
  },
  cultureTitle: {
    fontWeight: '700',
    fontSize: 'calc(1.2rem + 0.3vw)', // Responsive font size
    color: '#fff',
    marginBottom: '15px',
  },
  cultureText: {
    color: '#fff',
    lineHeight: '1.6',
    fontSize: 'calc(0.85rem + 0.1vw)', // Responsive font size
    fontWeight: '400',
    maxWidth: '800px',
    margin: '0 auto'
  },
};

export default FeaturesAndMission;
