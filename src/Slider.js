import React from "react";
import { Carousel, Nav } from "react-bootstrap";

function Slider() {
  return (
    <>
     <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Nav fill variant="tabs" defaultActiveKey="#home">
        <Nav.Item>
          <Nav.Link href="#home">Profile Aidil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#education">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#work-experience">Work Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Slider;
