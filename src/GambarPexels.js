import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";


function GambarPexels() {
  return (
    <Container className="my-5">
      <h2 className="text-center">Gambar dari Pexels.com</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Image
                src="https://your-image-url-here.jpg"
                fluid
                className="d-block mx-auto"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GambarPexels;
