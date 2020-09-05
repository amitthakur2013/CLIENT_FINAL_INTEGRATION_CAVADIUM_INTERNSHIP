import React, { Fragment } from "react";

const VendorPageDescription = ({ vendor }) => {
  if (!vendor._id) return null;
  return (
    <Fragment>
      <div>
        <div
          className="card"
          style={{
            // borderRadius: "10px",
            border: "1px solid #E0DEDE",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <div className="card-body">
            <h4 className="card-title">
              <strong>{vendor.businessName}</strong>
            </h4>
            <p className="card-text" style={{ padding: "15px 5px 15px 5px" }}>
              {vendor.businessInfo.description}
            </p>
            <button
              className="btn btn-outline-dark"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorPageDescription;
