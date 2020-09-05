import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const VendorCard = ({ merchant }) => {
  if (merchant) {
    return (
      <Fragment>
        <div className="col-12 col-lg-4">
          <div
            className="card"
            style={{
              borderRadius: "10px",
              boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
            }}
          >
            <img
              src={`http://localhost:3124/merchants/${merchant.images[0]}`}
              alt="placeholder_image"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <div className="card-body" style={{ padding: "8px" }}>
              <div className="card-title">
                <h5 style={{ marginBottom: "2px" }}>
                  <Link to={`/vendor/${merchant._id}`}>
                    <strong> {merchant.businessName} </strong>
                  </Link>
                </h5>
                <p className="text-muted">
                  {merchant.locationInfo.city +
                    " " +
                    merchant.locationInfo.addrLine1}
                </p>
              </div>
              <div className="dropdown-divider"></div>
              <div className="card-text">
                <div className="row">
                  <div className="col-8">
                    <small
                      className="text-muted"
                      style={{ marginBottom: "2px" }}
                    >
                      {/* <del>Rs. {deal.price}</del> */}
                    </small>
                    <h5 style={{ color: "green" }}>
                      Rs.{" "}
                      {/* {deal.price - (deal.price * deal.discountPercent) / 100} */}
                    </h5>
                  </div>
                  <div className="col-4">
                    <div
                      className="badge badge-primary text-wrap"
                      style={{ marginTop: "12px" }}
                    >
                      {/* {deal.discountPercent}% OFF */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="col-12 col-lg-4">
        <div
          className="card"
          style={{
            borderRadius: "10px",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <img
            src="https://picsum.photos/294/176.jpg"
            alt="placeholder_image"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <div className="card-body" style={{ padding: "8px" }}>
            <div className="card-title">
              <h5 style={{ marginBottom: "2px" }}>
                <strong> Name Of Deal </strong>
              </h5>
              <p className="text-muted">Location</p>
            </div>
            <div className="dropdown-divider"></div>
            <div className="card-text">
              <div className="row">
                <div className="col-8">
                  <small className="text-muted" style={{ marginBottom: "2px" }}>
                    <del>Rs. 100</del>
                  </small>
                  <h5 style={{ color: "green" }}>Rs. 20</h5>
                </div>
                <div className="col-4">
                  <div
                    className="badge badge-primary text-wrap"
                    style={{ marginTop: "12px" }}
                  >
                    100% OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorCard;
