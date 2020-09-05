import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container">
        <br />
        <div className="w3-content w3-section" style={{ maxWidth: "100%" }}>
          <img
            className="mySlides"
            src="http://placecorgi.com/100/30"
            alt="banner"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Banner;
