import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";

const HomePage = () => {
  return (
    <Container className="mt-2 p-3">
      <Carousel hover="true">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400/000000"
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>This is the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400/000000"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Second Slide Label</h2>
            <p>This is the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400/000000"
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h4>Third Slide Label</h4>
            <p>This is the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/>
      
    </Container>


  );
};

export default HomePage;
