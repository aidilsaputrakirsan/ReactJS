import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="text-muted">
              &copy; Profil Aidil {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
