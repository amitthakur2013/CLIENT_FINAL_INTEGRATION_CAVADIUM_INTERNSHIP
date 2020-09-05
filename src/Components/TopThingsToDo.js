import React, { useState } from "react";
// import Carousel from "./Carousel";
import { Carousel } from "react-bootstrap";
import VendorCard from "./VendorCard";
const TopThingsToDo = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="top-thing-offer">
      <div className="container">
        <h1
          className="text-center mb-3"
          id="mainhomehead"
          style={{ color: "purple" }}
        >
          Top Things To Do In Mumbai
        </h1>
        <br />
        <Carousel wrap={true} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="row">
              <VendorCard />

              <VendorCard />

              <VendorCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <VendorCard />

              <VendorCard />

              <VendorCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <VendorCard />

              <VendorCard />

              <VendorCard />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default TopThingsToDo;
