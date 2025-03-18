import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import GetawaysNavbar from '../../../components/getawaysnavbar/GetawaysNavbar';
import TrainingDetailsHome from './TrainingDetailsHome';


const TrainingHome = () => {
  return (
    <>
    <GetawaysNavbar/>
    <Container fluid style={styles.container}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} xl={8}>
          <div style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src='../src/assets/images/event2.png'
                alt="Biking Event"
                style={styles.image}
              />
            </div>
            <div style={styles.cardBody}>
              {/* Header with title and button side by side */}
              <div style={styles.cardHeader}>
                <h5 style={styles.title}>OffRoad Training</h5>
                <Button
                  style={styles.button}
                >
                  Book
                </Button>
              </div>
             
              <p style={styles.tags}>
                Organized by RealRoadies
              </p>
              <div className='row g-0' style={styles.infoRow}>
                <div className='col-8 col-md-4 ' style={styles.infoItem}>
                  <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
                  <span style={styles.infoText}>30 Apr 2025 to 5 May 2025</span>
                </div>
               
                <div className='col-8 col-md-2 custom-left-md' style={styles.infoItem}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
                  <span style={styles.infoText}>Bengaluru</span>
                </div>
               
                <div className='col-8 col-md-2' style={styles.priceContainer}>
                  <h5 style={styles.price}>₹ 3000 onwards</h5>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <TrainingDetailsHome />
  </>
  )
}

export default TrainingHome


const styles = {
    container: {
      backgroundColor: '#000000',
      minHeight: '50vh',
      paddingLeft: '15px',
      paddingRight: '15px'
    },
    card: {
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      border: 'none',
      transition: 'transform 0.3s ease',
      maxWidth: '100%'
    },
    imageContainer: {
      width: '100%',
      height: '290px',
      overflow: 'hidden',
      marginBottom: '-10px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'fill',
      transition: 'transform 0.5s ease'
    },
    cardBody: {
      padding: '1.5rem',
      marginBottom: '-10px',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#212529'
    },
    tags: {
      color: '#6c757d',
      fontSize: '14px',
      fontWeight: '400',
    },
    infoRow: {
      borderTop: '1px solid #e9ecef',
      paddingTop: '10px',
      marginLeft: 0,
      marginRight: 0,
      marginTop: '-5px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      padding: 0
    },
    infoText: {
      fontSize: '16px',
      fontWeight: '400',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: 0,
    },
    price: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#000000',
      margin: 0
    },
    button: {
      backgroundColor: '#FFDD00',
      color: '#000',
      border: 'none',
      padding: '0.5rem 1.5rem',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    icon: {
      marginRight: '0.5rem',
      color: '#6c757d'
    }
  };