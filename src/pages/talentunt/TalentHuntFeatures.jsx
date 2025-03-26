import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import carousel1 from '../../assets/images/rushab4.jpeg';
import carousel2 from '../../assets/images/rushab7.jpeg';
import carousel3 from '../../assets/images/rushab6.jpeg';
import carousel4 from '../../assets/images/rushab1.jpeg';
import fonts from '../../components/common/fonts';

const ImageGallery = () => {
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
    <>
    <Container fluid style={styles.container}>
      <Row className="justify-content-center mt-4">
        <Col md={10}>
          <h4 style={styles.sectionTitle}>Gallery</h4>
        </Col>
      </Row>

      {/* Main Carousel */}
      <Row className="justify-content-center">
        <Col md={8}>
          <div style={styles.carouselContainer}>
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
              .custom-carousel .carousel-control-prev,
              .custom-carousel .carousel-control-next {
                background-color: rgba(4, 4, 4, 0.7);
                border-radius: 50%;
                height: 50px;
                width: 50px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0.8;
                position: absolute;
              }
             
              .custom-carousel .carousel-control-prev {
                left: -60px;
              }
             
              .custom-carousel .carousel-control-next {
                right: -60px;
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
    <div style={styles.fullScreenSection}>
            <section style={styles.section}>
                  <Container>
                      <Col md={12} className="text-md-start text-start mb-3 mt-3">
                        <h5 style={styles.heading}>Join the RealRoadies Talent Hunt – Fueling the Future of Indian Motorsport!</h5>
                      </Col>
                      <Col md={12} className="text-md-start text-start mt-3">
                        <p style={styles.text}>
                        Are you a passionate young motorcycle racer with dreams of making it big? 🏍️ RealRoadies Talent Hunt is here to help you shift gears and accelerate toward success! We are actively seeking young, upcoming motorcycle champions to partner with us for sponsorship, global exposure, and life-changing opportunities.
                        </p>
                      </Col>
                       <button style={styles.button1}>
                     
                        Know more
                    
                        </button>
                        
                  </Container>
                </section>
          </div>
          </>
  );
};

const styles = {
  container: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '2rem 3rem 3rem',
    width: '100%',
  },
  sectionTitle: {
    marginBottom: '25px',
    fontWeight: '700',
    color: '#ffffff',
    fontSize: '16px',
    fontsFamily:fonts.poppins,
  },
  carouselContainer: {
    position: 'relative',
    padding: '0 50px',
    margin: '0 auto',
    overflow: 'visible',
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
    fontFamily: fonts.poppins,
  },
  text: {
    fontSize: '16px',
    fontWeight: '400', 
    lineHeight: '1.6', 
    color: '#000',
    fontFamily: fonts.poppins,
   
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
    fontFamily: fonts.poppins,
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#333',
    }
  },
   
};

export default ImageGallery;
