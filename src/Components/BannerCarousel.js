import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const BannerCarousel = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // console.log("adBanner1", imgs.length);
  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Carousel
        controls={false}
        wrap={true}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {/* {console.log(imgs)} */}
        {imgs.map((i) => (
          <Carousel.Item key={i}>
            <img
              className=" h-75 w-100 "
              src={`http://localhost:3124/uploads/${i}`}
              alt={i}
              // style={{ height: "10%", width: "10%" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
