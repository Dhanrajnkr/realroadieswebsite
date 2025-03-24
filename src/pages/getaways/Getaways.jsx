import React, { useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TrainingHome from './trainings/TrainingHome';
import AdventureToursHome from './Adventuretours/AdventureToursHome';
import EventHome from './bikingevents/EventHome';

const Getaways = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Navigate to adventure-tours by default if on the base getaways path
  useEffect(() => {
    if (currentPath === '/getaways' || currentPath === '/getaways/') {
      navigate('/getaways/adventure-tours');
    }
  }, [currentPath, navigate]);

  // Function to determine if a link is active
  const isActive = (path) => {
    if (currentPath === '/getaways' || currentPath === '/getaways/') {
      // Default to adventure-tours being active if on base path
      return path === 'adventure-tours';
    }
    return currentPath.includes(path);
  };

  // Function to get link style based on active state
  const getLinkStyle = (path) => {
    return {
      ...styles.navLink,
      ...(isActive(path) && styles.activeNavLink)
    };
  };

  return (
    <div style={styles.mainContainer}>
      {/* Navigation tabs - always visible */}
      <div style={styles.navbar}>
        <Container fluid style={styles.container}>
          <Row className="justify-content-center">
            <Col xs={12} md={12} lg={12} xl={12}>
              <Nav className="justify-content-start" style={styles.nav}>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => navigate('/getaways/adventure-tours')}
                    style={getLinkStyle('adventure-tours')}
                    className="px-4 py-2"
                  >
                    Trips & Adventure
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => navigate('/getaways/traininghome')}
                    style={getLinkStyle('traininghome')}
                    className="px-4 py-2"
                  >
                    Trainings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => navigate('/getaways/eventshome')}
                    style={getLinkStyle('eventshome')}
                    className="px-4 py-2"
                  >
                    Events
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content area for the different pages - no gap */}
      <div style={styles.contentContainer}>
        <Routes>
          <Route index element={<AdventureToursHome />} />
          <Route path="eventshome" element={<EventHome />} />
          <Route path="traininghome" element={<TrainingHome />} />
          <Route path="adventure-tours" element={<AdventureToursHome />} />
          <Route path="*" element={<AdventureToursHome />} />
        </Routes>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  navbar: {
    boxShadow: '0 2px 10px rgba(9, 9, 9, 0.1)',
    backgroundColor: '#000000',
    borderBottom: '1px solid #343a40',
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    marginBottom: 0,
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '10px',
    paddingBottom: '0px'
  },
  container: {
    padding: 0
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0',
    margin: '0',
    width: '100%'
  },
  navLink: {
    color: '#f8f9fa',
    fontWeight: '400',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: 0,
    borderRadius: 0
  },
  activeNavLink: {
    color: '#ffffff',
    fontWeight: '400',
    borderBottom: '3px solid #FFDD00'
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    padding: 0,
    marginTop: 0
  }
};

export default Getaways;
