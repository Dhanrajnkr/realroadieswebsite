import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import GetawaysNavbar from '../../../components/getawaysnavbar/GetawaysNavbar';


const cardsData = [
  {
    id: 1,
    img: "https://via.placeholder.com/300",
    title: "Card Title 1",
    description: "This is a description for card 1."
  },
  {
    id: 2,
    img: "https://via.placeholder.com/300",
    title: "Card Title 2",
    description: "This is a description for card 2."
  },
  {
    id: 3,
    img: "https://via.placeholder.com/300",
    title: "Card Title 3",
    description: "This is a description for card 3."
  }
];

const AdventureToursHome = () => {
  return (
    <>
      <GetawaysNavbar />
      <div style={styles.wrapper}>
        <Container>
          <Row className="justify-content-center">
            {cardsData.map((card) => (
              <Col key={card.id} md={4} sm={6} xs={12} className="mb-4">
                <Card className="shadow" style={styles.card}>
                  <Card.Img variant="top" src={card.img} />
                  <Card.Body>
                    <Card.Title style={styles.cardTitle}>{card.title}</Card.Title>
                    <Card.Text style={styles.cardText}>{card.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#000000',
    padding: '40px 0',
    minHeight: '100vh'
  },
  card: {
    border: 'none',
    borderRadius: '0',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    height: '100%'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px'
  },
  cardText: {
    fontSize: '16px',
    color: '#6c757d'
  }
};

export default AdventureToursHome;
