import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarSection() {
  return (
    <section id="headernav" style={styles.headerNav}>
      <Navbar expand="lg" variant="dark" style={styles.navbar}>
        <Container fluid style={styles.container}>
          <Navbar.Brand href="/" style={styles.brand}>
            <img
              src="../src/assets/images/rr-logo.png"
              alt="realroadies logo"
              height="40"
              className="d-inline-block align-text-top"
              style={styles.logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarTogglerDemo02" style={styles.toggler} />
          <Navbar.Collapse id="navbarTogglerDemo02">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link className="mx-lg-3" href="/about" style={styles.navLink}>About</Nav.Link>
              
              {/* Changed to link to a getaways page that will show the GetawaysNavbar */}
              <Nav.Link className="mx-lg-3" href="/getaways" style={styles.navLink}>Getaways</Nav.Link>

              <Nav.Link className="mx-lg-3" href="/corporateevent" style={styles.navLink}>Corporate Events</Nav.Link>
              {/* <Nav.Link className="mx-lg-3" href="/services" style={styles.navLink}>Services</Nav.Link> */}
              <Nav.Link className="mx-lg-3" href="/contact" style={styles.navLink}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavbarSection;

const styles = {
  headerNav: {
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#000000'
  },
  navbar: {
    padding: '10px 0'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
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
    fontWeight: '500',
    padding: '8px 15px',
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
