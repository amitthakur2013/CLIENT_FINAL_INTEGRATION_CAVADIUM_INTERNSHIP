import React from "react";
import VendorCard from "./VendorCard";

const Trending = () => {
  return (
    <div className="container py-3">
      <h1
        className="text-center mb-3"
        id="mainhomehead"
        style={{ color: "purple" }}
      >
        Trending Right Now
      </h1>
      <br />
      <div className="row">
        <div className="container" id="gridcontainer">
          <div className="row">
            <VendorCard />

            <VendorCard />

            <VendorCard />
          </div>
          <div className="row" style={{ marginTop: "15px" }}>
            <VendorCard />

            <VendorCard />

            <VendorCard />
          </div>
        </div>
      </div>
      <div className="text-center">
        <br />
        <a href="https://all4you.co.in/category/all" className="viewallbutton">
          <button
            type="button"
            id="viewallbuttonbg"
            className="btn  "
            style={{ backgroundColor: "purple", color: "white" }}
          >
            View All
          </button>
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Trending;
