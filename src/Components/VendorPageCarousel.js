import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
const VendorPageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel wrap={true} activeIndex={index} onSelect={handleSelect}>
        {images &&
          images.map((i) => (
            <Carousel.Item key={i}>
              <img
                src={`http://localhost:3124/merchants/${i}`}
                alt={i}
                className="fluid-img"
                style={{
                  borderRadius: "10px",
                }}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default VendorPageCarousel;
