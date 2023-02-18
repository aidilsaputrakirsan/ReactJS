import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <Container id="contact" className="my-5">
      <h2 className="text-center">Hubungi Saya</h2>
      <Row>
        <Col md={8} className="mx-auto">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Anda" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan Email Anda" />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subjek</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Subjek Pesan" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Masukkan Pesan Anda" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Kirim
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
