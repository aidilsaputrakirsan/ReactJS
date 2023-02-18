import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Portfolio() {
return (
<Container id="portfolio" className="my-5">
<h2 className="text-center">Portfolio</h2>
<Row>
<Col md={4}>
<Card>
<Card.Img variant="top" src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card.Body>
<Card.Title>Freelance Developer</Card.Title>
<Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus non facilisis mauris, eu feugiat risus.
</Card.Text>
<Button variant="primary">Learn More</Button>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card>
<Card.Img variant="top" src="https://images.pexels.com/photos/7092339/pexels-photo-7092339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card.Body>
<Card.Title>Lecturer</Card.Title>
<Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus non facilisis mauris, eu feugiat risus.
</Card.Text>
<Button variant="primary">Learn More</Button>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card>
<Card.Img variant="top" src="https://images.pexels.com/photos/4452508/pexels-photo-4452508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card.Body>
<Card.Title>Researcher</Card.Title>
<Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus non facilisis mauris, eu feugiat risus.
</Card.Text>
<Button variant="primary">Learn More</Button>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
);
}

export default Portfolio;