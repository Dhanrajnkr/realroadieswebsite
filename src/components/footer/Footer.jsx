import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row className="gy-4">
          {/* Company Info */}
          <Col md={3} lg={4} className="text-start">
            <h5 style={styles.heading}>RealRoadies</h5>
            <p style={styles.paragraph}>
              At RealRoadies, we're passionate about crafting unforgettable journeys that connect you with the
              world. Our team of experts is dedicated to curating unique experiences that cater to your
              interests and preferences.
            </p>
          </Col>

          {/* Useful Links */}
          <Col md={3} lg={2} className="text-start">
            <h5 style={styles.heading}>Useful Links</h5>
            <ul style={styles.linksList}>
              <li style={styles.listItem}><a href="/" style={styles.link}>Home</a></li>
              <li style={styles.listItem}><a href="/corporateevent" style={styles.link}>Coporate events</a></li>
              <li style={styles.listItem}><a href="/talentHunt" style={styles.link}>Talent Hunt</a></li>
              <li style={styles.listItem}><a href="/getaways" style={styles.link}>Getaways</a></li>
              <li style={styles.listItem}><a href="/about" style={styles.link}>About Us</a></li>
              <li style={styles.listItem}><a href="/contact" style={styles.link}>Contact us</a></li>
            </ul>
          </Col>
          {/* Company Policies */}
          <Col md={3} lg={2} className="text-start">
            <h5 style={styles.heading}>policies</h5>
            <ul style={styles.linksList}>
              <li style={styles.listItem}>
                <a href="/termsconditions" style={styles.link}>Terms & Conditions</a>
              </li>
              <li style={styles.listItem}>
                <a href="/refundpolicy" style={styles.link}>Privacy Policy</a>
              </li>
              <li style={styles.listItem}>
                <a href="/privacypolicy" style={styles.link}>Refund Policy</a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} lg={4} className="text-start">
            <h5 style={styles.heading}>Contact</h5>
            <ul style={styles.contactList}>
            <li style={styles.contactItem}>
                <IoMailOutline style={styles.icon} />
                <a
                  href="mailto:info@realroadies.com"
                  style={styles.link}
                >
                  info@realroadies.com
                </a>
              </li>
              <li style={styles.contactItem}>
                <MdOutlinePhone style={styles.icon } />
                <a href="tel:+91 90082 90111" style={styles.link}>+91 90082 90111</a>
              </li>
              
              <li style={styles.contactItem}>
                <LuMapPin style={{...styles.icon,width:'20px' }} />
                <a
                  href="https://maps.google.com/?q=247,1st+Floor,4th+Main+Road,Domlur,2nd+Stage,Bengaluru,560071"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  #247, 1st Floor, 4th Main Road, Domlur, 2nd Stage, Bengaluru, 560071.
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>

        <hr style={styles.divider} />

        {/* Copyright & Social Media */}
        <Row className="align-items-center">
          <Col md={7} className="text-center text-md-start">
            <p style={styles.copyright}>
              Made with ♥️ in India by Team RealRoadies<br />
              <small>Copyright © {new Date().getFullYear()} Real Roadies.com All Rights Reserved.</small>
            </p>
          </Col>

          <Col md={5}>
            <ul style={styles.socialList} className="text-center text-md-end">
              <li style={styles.socialItem}>
                <a
                  href="https://wa.link/hsqw2s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={styles.socialLink}
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li style={styles.socialItem}>
                <a
                  href="https://www.instagram.com/insta.realroadies/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={styles.socialLink}
                >
                  <FaInstagram />
                </a>
              </li>
              <li style={styles.socialItem}>
                <a
                  href="https://www.facebook.com/fb.realroadies?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={styles.socialLink}
                >
                  <CiFacebook />
                </a>
              </li>
              <li style={styles.socialItem}>
                <a
                  href="https://www.linkedin.com/company/stipesolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={styles.socialLink}
                >
                  <CiLinkedin />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000000',  // Changed to black
    color: '#ffffff',  // Changed to white for contrast with black background
    padding: '3rem 0 2rem',
  },
  heading: {
    color: '#ffffff',  // Changed to white
    fontSize: '16px',  // Changed from 1.1rem to 20px to match h5 in CommonCss.css
    fontWeight: '500',  // Changed from bold to 500 to match h5 in CommonCss.css
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    position: 'relative',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #ffc107',  // Yellow accent border
    display: 'inline-block'
  },
  paragraph: {
    color: '#adb5bd',  // Light gray for readability on black
    fontSize: '14px',  // Changed from 0.95rem to 16px to match paragraph in CommonCss.css
    fontWeight: '400',  // Added to match paragraph in CommonCss.css
    lineHeight: '1.6',  // Already matches CommonCss.css
    marginBottom: '1rem'
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    marginBottom: '0.75rem'
  },
  link: {
    color: '#adb5bd',  // Light gray for readability on black
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '16px',  // Changed from 0.95rem to 16px to match links in CommonCss.css
    fontWeight: '400'  // Added to match links in CommonCss.css
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '0.75rem'
  },
  icon: {
    color: 'white',
    fontSize: '1rem',
    marginRight: '0.75rem',
    width: '16px',
    marginTop: '0.25rem'  
  },
  phoneIndent: {
    width: '16px',
    marginRight: '0.75rem'
  },
  divider: {
    borderColor: '#fff',  
    margin: '2rem 0'
  },
  copyright: {
    color: '#adb5bd',  
    fontSize: '14px',  
    fontWeight: '400',  
    marginBottom: '0'
  },
  socialList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flexWrap: 'wrap'
  },
  socialItem: {
    display: 'inline-block',
    marginLeft: '1rem'
  },
  socialLink: {
    color: '#ffffff',  
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  },
};
   
export default Footer;
