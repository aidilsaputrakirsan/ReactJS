import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Education() {
  return (
    <Container id="education" className="my-5">
      <h2 className="text-center">Riwayat Pendidikan</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Sekolah Dasar</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                SD Negeri 1 Makassar
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
              <Card.Title>Sekolah Menengah Pertama</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                SMP Negeri 12 Makassar
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
              <Card.Title>Sekolah Menengah Atas</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              SMA Negeri 21 Makassar
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

export default Education;