import React from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import rrLogo from '../../assets/images/rr-logo.png';

function NavbarSection() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to determine if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  // Function to get link style based on active state
  const getLinkStyle = (path) => {
    return {
      ...styles.navLink,
      ...(isActive(path) && styles.activeNavLink)
    };
  };

  return (
    <section id="headernav" style={styles.headerNav}>
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={12} xl={12}>
            <Navbar expand="lg" variant="dark" style={styles.navbar}>
              <Navbar.Brand href="/" style={styles.brand}>
                <img
                   src={rrLogo}
                  alt="realroadies logo"
                  height="40"
                  className="d-inline-block align-text-top"
                  style={styles.logo}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarTogglerDemo02" style={styles.toggler} />
              <Navbar.Collapse id="navbarTogglerDemo02">
                <Nav className="ms-auto mb-2 mb-lg-0">
                  <Nav.Link 
                    as={Link} 
                    to="/about" 
                    className="mx-lg-3 px-4 py-2" 
                    style={getLinkStyle('/about')}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link 
                    as={Link} 
                    to="/getaways" 
                    className="mx-lg-3 px-4 py-2" 
                    style={getLinkStyle('/getaways')}
                  >
                    Getaways
                  </Nav.Link>
                  <Nav.Link 
                    as={Link} 
                    to="/corporateevent" 
                    className="mx-lg-3 px-4 py-2" 
                    style={getLinkStyle('/corporateevent')}
                  >
                    Corporate Events
                  </Nav.Link>
                  <Nav.Link 
                    as={Link} 
                    to="/contact" 
                    className="mx-lg-3 px-4 py-2" 
                    style={getLinkStyle('/contact')}
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NavbarSection;

const styles = {
  headerNav: {
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#000000',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  container: {
    padding: 0
  },
  navbar: {
    padding: '10px 0',
    width: '100%'
  },
  brand: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    marginRight: '10px'
  },
  toggler: {
    border: 'none',
    boxShadow: 'none',
    outline: 'none'
  },
  navLink: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'color 0.3s ease',
    margin: 0,
    borderRadius: 0
  },
  activeNavLink: {
    color: '#FFDD00', 
    fontWeight: '600'
    
  },
  navDropdown: {
    color: '#fff',
    fontWeight: '500',
  },
  dropdownToggle: {
    color: '#fff !important',
    fontSize: '16px',
    fontWeight: '500',
  },
  dropdownMenu: {
    borderRadius: 'none',
    marginTop: '10px'
  },
  dropdownItem: {
    padding: '8px 20px',
    color: '#000',
    transition: 'all 0.2s ease',
    fontSize: '16px',
    fontWeight: '400',
  }
};
