import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const GetawaysNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  
  // Determine current path
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Determine if scrolling up or down
      const isScrollingDown = currentScrollPos > scrollPosition;
      
      // Update visibility based on scroll direction
      setVisible(!isScrollingDown || currentScrollPos < 10);
      
      // Update scroll position
      setScrollPosition(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  // Dynamic navbar style based on visibility
  const navbarStyle = {
    ...styles.navbar,
    top: visible ? '60px' : '0px',
    transition: 'top 0.3s ease-in-out',
    position: 'sticky',
    zIndex: 999
  };

  // Function to determine if a link is active
  const isActive = (path) => {
    return currentPath === path;
  };

  // Function to get link style based on active state
  const getLinkStyle = (path) => {
    return {
      ...styles.navLink,
      ...(isActive(path) && styles.activeNavLink)
    };
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={navbarStyle}>
        <Container style={styles.container}>
          <Nav className="text-center" style={styles.nav}>
            <Nav.Link 
              href="/bikingeventshome" 
              style={getLinkStyle('/bikingeventshome')}
            >
              Biking Events
            </Nav.Link>
            <Nav.Link 
              href="/traininghome" 
              style={getLinkStyle('/traininghome')}
            >
              Trainings
            </Nav.Link>
            <Nav.Link 
              href="/adventure-tours" 
              style={getLinkStyle('/adventure-tours')}
            >
              Adventure Tours
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const styles = {
  navbar: {
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#000000', 
    borderBottom: '1px solid #343a40'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  nav: {
    display: 'flex',
    gap: '20px' 
  },
  navLink: {
    color: '#f8f9fa',
    fontWeight: '500',
    transition: 'color 0.3s ease, background-color 0.3s ease',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
    cursor: 'pointer'
  },
  activeNavLink: {
    color: '#FFDD00',
    fontWeight: '500'
  }
};

export default GetawaysNavbar;
