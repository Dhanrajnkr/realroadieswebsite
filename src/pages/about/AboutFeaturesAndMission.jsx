import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeaturesAndMission = () => {
  return (
    <Container fluid style={styles.container}>
      {/* Products and Features Section */}
      <Row className="justify-content-center">
        <Col md={10}>
          <h3 style={styles.sectionTitle}>Products and Features</h3>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={5}>
          <FeatureBox
            title="RealRoadies Garage"
            description="A digital hub for your rides with high-visibility, emergency data, service history, and ownership details."
            imageUrl="../src/assets/images/2.png"
          />
          <FeatureBox
            title="RealRoadies Corporate Events"
            description="Motorcycle-centric corporate events that encourage team bonding and adrenaline-fueled networking."
            imageUrl="../src/assets/images/b6.png"
          />
          <FeatureBox
            title="RealRoadies Rewards"
            description="A membership program that unlocks exclusive discounts, offers, and early-bird access to events."
            imageUrl="../src/assets/images/b5.jpg"
          />
        </Col>
        <Col md={5}>
          <FeatureBox
            title="RealRoadies Getaways"
            description="Exclusive long-distance, high-adventure, and resilience-rich motorcycle tours for enthusiasts."
            imageUrl="../src/assets/images/getaway.png"
          />
          <FeatureBox
            title="RealRoadies Store"
            description="Top-tier biking gear, safety essentials, and lifestyle merchandise tailored for motorcycle enthusiasts."
            imageUrl="../src/assets/images/1.png"
          />
          <FeatureBox
            title="RealRoadies Utilities"
            description="Smart vehicle tracking, safety kits, and curated content with AI-driven biking insights."
            imageUrl="../src/assets/images/rider.jpg"
          />
        </Col>
      </Row>
      
      {/* TalentHunt Section */}
      <Row className="justify-content-center">
        <Col md={10}>
          <Card style={styles.featureCard}>
            <Row className="align-items-center g-0">
              <Col xs={2} md={1}>
                <img
                  src="../src/assets/images/hill.jpg"
                  alt="TalentHunt"
                  style={styles.featureImage}
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
            {/* Our Mission Section */}
            <Row className="justify-content-center" style={styles.missionRow}>
        <Col md={5}>
          <h3 style={styles.sectionTitle}>Our Mission</h3>
          <p style={styles.missionText}>
            We exist to inspire, connect, and drive an ecosystem for bikers. From elite expeditions to
            community events, we provide platforms for pure biking culture, rider socialization, and
            strategic innovations.
          </p>
        </Col>
        <Col md={5} className="text-center">
          <img
            src="../src/assets/images/ab1.png"
            alt="Our Mission"
            style={styles.missionImage}
          />
        </Col>
      </Row>

      
      {/* Our Culture Section */}
      <Row className="justify-content-center" style={styles.cultureRow}>
        <Col md={10}>
          <div style={styles.cultureSection}>
            <h3 style={styles.sectionTitle}>Our Culture</h3>
            <p style={styles.cultureText}>
              We are riders first. Our team is built on a shared passion for motorcycles, adventure, and the spirit of the open road. 
              As enthusiasts, experts, and innovators, we believe in the power of community and the bond that unites all bikers. 
              Everything we create at RealRoadies is driven by this passion—whether it's fostering the ultimate biker brotherhood, 
              using technology to enhance safety, or redefining the riding experience. For us, it's more than just motorcycles; 
              it's a way of life.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
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
    padding: '3rem',
    width: '100%',
  },
  sectionTitle: {
    marginBottom: '25px',
    fontWeight: '700',
    color: '#ffffff',
    fontSize: '24px'
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
    fontSize: '12px'
  },
  featureDescription: {
    color: '#a0a0a0',
    fontSize: '12px',
    marginBottom: '0.5rem',
    lineHeight: '1.2'
  },
  missionRow: {
    marginTop: '3.5rem',
    alignItems: 'center'
  },
  missionText: {
    color: '#a0a0a0',
    lineHeight: '1.6',
    fontSize: '14px',
    fontWeight: '400',
  },
  missionImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    maxWidth: '400px',
    margin: '0 auto',
  },
  cultureRow: {
    marginTop: '3.5rem',
    alignItems: 'center'
  },
  cultureSection: {
    borderTop: '1px solid #333',
    borderBottom: '1px solid #333',
    padding: '2rem 0',
    textAlign: 'center'
  },
  cultureText: {
    color: '#a0a0a0',
    lineHeight: '1.6',
    fontSize: '12px',
    fontWeight: '400',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default FeaturesAndMission;
