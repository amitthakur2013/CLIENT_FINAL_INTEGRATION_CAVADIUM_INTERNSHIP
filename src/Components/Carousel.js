import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ControlledCarousel = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // console.log(imgs);
  return (
    <Carousel wrap={true} activeIndex={index} onSelect={handleSelect}>
      {imgs.map((i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={`http://localhost:3124/uploads/${i}`}
            alt={i}
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
