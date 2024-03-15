import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from './asset/heroSectionImages/1.jpg.jpg'

export default function HeroSection() {
  return (
    <div>
      <Container>
        <Row>
          <Col> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Image1}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
