import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function VideoPexels() {
  return (
    <Container className="my-5">
      <h2 className="text-center">Video dari Pexels.com</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <video controls>
                <source
                  src="://your-video-url-here.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default VideoPexels;
