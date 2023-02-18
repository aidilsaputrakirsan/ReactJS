import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function WorkExperience() {
  return (
    <Container id="work-experience" className="my-5">
      <h2 className="text-center">Pengalaman Kerja</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Kampus Politeknik Negeri Ujung Pandang</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Administrator Networking
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus non facilisis mauris, eu feugiat risus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Freelance</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Web/Mobile Developer
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus non facilisis mauris, eu feugiat risus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkExperience;
