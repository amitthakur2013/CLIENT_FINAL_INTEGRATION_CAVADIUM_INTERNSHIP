import React, { Fragment } from "react";

const VendorPageDeal = ({ deal, qty, addToCart, removeFromCart }) => {
  return (
    <Fragment>
      <div style={{ marginBottom: "10px" }}>
        <div
          className="row"
          style={{
            backgroundColor: "white",
            padding: "10px 5px 10px 5px",
            borderRadius: "10px",
            border: "1px solid #E0DEDE",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <div className="col-12 col-lg-3">
            <img
              alt={deal.name}
              src={`http://localhost:3124/deals/${deal.img}`}
              className="img-fluid"
              style={{ borderRadius: "10px", width: "100%" }}
            />
          </div>
          <div className="col-12 col-lg-9">
            <h5 className="text-muted">
              <strong>{deal.name}</strong>
              <p style={{ marginBottom: "10px" }}>{deal.description}</p>
            </h5>
            <div className="row">
              <div className="col-12 col-lg-9">
                <p style={{ marginBottom: "10px" }}>Free Cancellation</p>
                <small>
                  <strong>Valid For :</strong> all |
                  <strong>Valid from :</strong> {deal.valide.from}
                  <strong>Valid to :</strong> {deal.valide.to}
                  <strong>Timings :</strong> all days
                </small>
              </div>
              <div className="col-12 col-lg-3">
                <div className="row">
                  <div className="col-6 col-lg-12">
                    <small>
                      Price:
                      <del>{deal.price}</del>
                    </small>
                    <p>
                      <strong>
                        After discount:{" "}
                        {deal.price - (deal.price * deal.discountPercent) / 100}
                      </strong>
                    </p>
                  </div>
                  <div className="col-6 col-lg-12">
                    <div className="d-flex justify-content-end">
                      <div className="p-2">
                        <button
                          onClick={() => removeFromCart(deal._id)}
                          className="btn btn-sm btn-primary"
                          style={{
                            backgroundColor: "purple",
                            border: "purple",
                          }}
                        >
                          -
                        </button>
                      </div>
                      <div
                        className="p-2"
                        style={{ paddingTop: "10px !important" }}
                      >
                        {qty}
                      </div>
                      <div className="p-2">
                        <button
                          onClick={() =>
                            addToCart(
                              deal._id,
                              deal.name,
                              deal.price -
                                (deal.price * deal.discountPercent) / 100
                            )
                          }
                          className="btn btn-sm btn-primary"
                          style={{
                            backgroundColor: "purple",
                            border: "purple",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-divider"></div>
            <div className="d-flex justify-content-end">
              <div className="p-2">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple", border: "0px" }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorPageDeal;
