import React, { Fragment } from "react";

const FilterSubcategoryItem = () => {
  return (
    <Fragment>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={{ border: "0px", paddingTop: "1px", paddingBottom: "1px" }}
      >
        Sub Category <span className="badge badge-primary badge-pill">5</span>
      </li>
    </Fragment>
  );
};

export default FilterSubcategoryItem;
