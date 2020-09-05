import React, { Fragment } from "react";
import VendorCard from "./VendorCard";

const VendorCardCollection = () => {
  return (
    <Fragment>
      <div
        className="col -12 col-md-7 col-lg-9"
        style={{ paddingLeft: "30px" }}
      >
        <div className="row" style={{ justifyContent: "space-around" }}>
          <VendorCard />
          <VendorCard />
          <VendorCard />
          <VendorCard />
          <VendorCard />
        </div>
      </div>
    </Fragment>
  );
};

export default VendorCardCollection;
