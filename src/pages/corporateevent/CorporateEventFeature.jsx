import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap';
import carousel1 from '../../assets/images/cor-event1.png';
import carousel2 from '../../assets/images/cor-event4.png';
import carousel3 from '../../assets/images/cor-event2.png';
import carousel4 from '../../assets/images/cor-event3.png';
import Feature1 from '../../assets/images/brand.jpg';
import Feature2 from '../../assets/images/team.jpg';
import Feature3 from '../../assets/images/iclu.jpg';
import Feature4 from '../../assets/images/base.jpg';
import Feature5 from '../../assets/images/fuel.jpg';

const CorporateEventFeature = () => {
  // Add state to track the active carousel index
  const [activeIndex, setActiveIndex] = useState(0);
 
  // Define all images in one array for easier management
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4
  ];
 
  // Handler for thumbnail clicks
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container fluid style={styles.container} className="px-3 px-md-5">
      {/* Products and Features Section */}
      <Row className="justify-content-center">
        <Col md={10}>
          <h3 style={styles.sectionTitle}>What We Offer</h3>
        </Col>
      </Row>
     
      <Row className="justify-content-center">
        <Col lg={5} md={6} className="mb-3 mb-md-0">
          <FeatureBox
            title="Corporate Brand Rides & Promotions"
            description="Amplify your brand with high-visibility motorcycle rides. Whether you're launching a new product, celebrating a milestone, or creating brand awareness, our custom rides put your brand in the spotlight."
            imageUrl={Feature1}
          />
          <FeatureBox
            title="Team-Building & Leadership Rides"
            description="Encourage teamwork, leadership, and resilience with our interactive motorcycle experiences. From scenic rides to off-road challenges, we help strengthen bonds beyond the office."
            imageUrl={Feature2}
          />
        </Col>
        <Col lg={5} md={6}>
          <FeatureBox
            title="Diversity & Inclusion Rides"
            description="Promote gender diversity and inclusion with exclusive women-only rides or co-gender rides designed to break stereotypes and encourage equal participation."
            imageUrl={Feature3}
          />
          <FeatureBox
            title="CSR & Cause-Based Rides"
            description="Support sustainability, road safety, or social causes with corporate-backed awareness rides, charity motorcycle events, and community engagement campaigns."
            imageUrl={Feature4}
          />
        </Col>
      </Row>
     
      {/* TalentHunt Section */}
      <Row className="justify-content-center mt-4">
        <Col md={10}>
          <Card style={styles.featureCard}>
            <Row className="align-items-center g-0">
              <Col xs={2} md={1}>
                <img
                  src={Feature5}
                  alt="TalentHunt"
                  style={styles.featureImage}
                  className="img-fluid"
                />
              </Col>
              <Col xs={10} md={11} style={styles.talentHuntTextCol}>
                <h5 style={styles.featureTitle}>RealRoadies TalentHunt: Fueling the Next Motorsport Champion</h5>
                <div style={styles.featureDescription} className="feature-description">
                  At RealRoadies, we're on a mission to discover and support the next big motorsport champion. We connect aspiring racers with corporate sponsorship opportunities, helping them break into the world of MotoGP, endurance racing, and off-road challenges.<br />
                  <strong>If you're a company looking to back raw talent or a rider chasing your dream, join us in shaping the future of motorsports! 🚀🔥</strong>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Gallery Section */}
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <h4 style={styles.sectionTitle}>Gallery</h4>
        </Col>
      </Row>

      {/* Main Carousel */}
      <Row className="justify-content-center">
        <Col md={8}>
          <div style={styles.carouselContainer} className="carousel-wrapper">
            <Carousel
              indicators={false}
              controls={true}
              className="mb-4 custom-carousel"
              style={styles.carousel}
              activeIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
            >
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image src={image} fluid className="w-100" style={styles.carouselImage} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
         
          {/* Add custom CSS for carousel controls */}
          <style type="text/css">
            {`
              .feature-description {
                line-height: 1.4 !important;
              }
              
              .carousel-wrapper {
                position: relative;
                margin: 0 auto;
                overflow: hidden;
              }
              
              .custom-carousel .carousel-control-prev,
              .custom-carousel .carousel-control-next {
                background-color: rgba(4, 4, 4, 0.7);
                border-radius: 50%;
                height: 40px;
                width: 40px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0.8;
                position: absolute;
              }
             
              @media (min-width: 768px) {
                .carousel-wrapper {
                  padding: 0 50px;
                  overflow: visible;
                }
                
                .custom-carousel .carousel-control-prev {
                  left: -60px;
                }
               
                .custom-carousel .carousel-control-next {
                  right: -60px;
                }
              }
              
              @media (max-width: 767px) {
                .custom-carousel .carousel-control-prev {
                  left: 10px;
                }
               
                .custom-carousel .carousel-control-next {
                  right: 10px;
                }
              }
             
              .custom-carousel .carousel-control-prev:hover,
              .custom-carousel .carousel-control-next:hover {
                opacity: 1;
                background-color: rgba(6, 6, 6, 0.9);
              }
             
              .custom-carousel .carousel-control-prev-icon,
              .custom-carousel .carousel-control-next-icon {
                width: 20px;
                height: 20px;
              }
             
              .thumbnail-active {
                opacity: 1;
                border: 2px solid #fff;
              }
             
              .thumbnail-inactive {
                opacity: 0.6;
              }
             
              .thumbnail-inactive:hover {
                opacity: 0.8;
              }
            `}
          </style>
        </Col>
      </Row>

      {/* Thumbnail Section */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Row>
            {images.map((image, index) => (
              <Col xs={6} sm={3} className="mb-2" key={index}>
                <Image
                  src={image}
                  fluid
                  className={`w-100 ${activeIndex === index ? 'thumbnail-active' : 'thumbnail-inactive'}`}
                  style={styles.thumbnailImage}
                  onClick={() => handleThumbnailClick(index)}
                />
              </Col>
            ))}
          </Row>
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
              className="img-fluid"
            />
          ) : (
            <div style={styles.featurePlaceholder}></div>
          )}
        </Col>
        <Col xs={10} style={styles.featureTextCol}>
          <h5 style={styles.featureTitle}>{title}</h5>
          <div style={styles.featureDescription} className="feature-description">
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
    padding: '2rem 0 3rem',
    width: '100%',
  },
  sectionTitle: {
    marginBottom: '25px',
    fontWeight: '700',
    color: '#ffffff',
    fontSize: '16px'
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
    width: '70px',
    height: '70px',
    objectFit: 'cover',
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
    fontSize: '14px'
  },
  featureDescription: {
    color: '#a0a0a0',
    fontSize: '12px',
    marginBottom: '0.5rem',
    // Removed line-height: 1 to improve readability
  },
  carouselContainer: {
    position: 'relative',
    margin: '0 auto',
  },
  carousel: {
    backgroundColor: '#111',
    position: 'relative',
  },
  carouselImage: {
    height: '300px',
    objectFit: 'cover'
  },
  thumbnailImage: {
    height: '130px',
    objectFit: 'cover',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease, border 0.3s ease',
  }
};

export default CorporateEventFeature;
