import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <Container id="skills" className="my-5">
      <h2 className="text-center">Keahlian</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">HTML</div>
          <ProgressBar now={90} />
        </Col>
        <Col md={6}>
          <div className="text-center">CSS</div>
          <ProgressBar now={80} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">JavaScript</div>
          <ProgressBar now={70} />
        </Col>
        <Col md={6}>
          <div className="text-center">React</div>
          <ProgressBar now={60} />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
