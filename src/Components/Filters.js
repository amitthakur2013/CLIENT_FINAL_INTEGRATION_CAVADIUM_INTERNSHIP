import React from "react";
import FilterLocationItem from "./FilterLocationItem";
import FilterSubcategoryItem from "./FilterSubcategoryItem";

const Filters = () => {
  return (
    <div
      className=""
      style={{
        backgroundColor: "white",
        paddingBottom: "15px",
        paddingTop: "15px",
      }}
    >
      <div>
        <h3 style={{ color: "purple" }}>I'm looking for:</h3>
        <p style={{ color: "purple", marginTop: "30px" }}>Categories</p>
      </div>
      <div className="dropdown-divider"></div>
      <div>
        <h6>
          <strong>Current Category</strong>
        </h6>
        <ul className="list-group">
          <FilterSubcategoryItem />
        </ul>
      </div>
      <div className="dropdown-divider"></div>
      <p style={{ color: "purple", margin: "auto" }}>Location</p>
      <div className="dropdown-divider"></div>
      <div>
        <h6>
          <strong>Current Location</strong>
        </h6>
        <ul className="list-group">
          <FilterLocationItem />
        </ul>
      </div>
    </div>
  );
};

export default Filters;
