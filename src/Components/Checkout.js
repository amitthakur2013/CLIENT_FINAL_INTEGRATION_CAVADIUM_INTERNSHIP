import React from "react";

export const Checkout = () => {
  return (
    <>
      <div id="wrapper" style={{ marginTop: "200px" }}>
        <div className="container">
          {/* <h1>Checkout :</h1> */}
          <div
            className="card"
            style={{
              borderRadius: "5px",
              //   boxShadow: "-6px -6px 16px #d1cdc7, 6px 16px 16px #d1cdc7",
              boxShadow: "5px 5px 20px #d1cdc7",
            }}
          >
            <div
              className="p-2"
              style={{
                backgroundColor: "purple",
                color: "white",
                width: "100%",
                borderRadius: "5px",
              }}
            >
              <h1 className="display-2 text-center">Your Order</h1>
            </div>
            <div className="card-body">
              <div style={{ marginTop: "15px" }}></div>
              <div className="dropdown-divider"></div>

              <table className="table">
                <tr className="thead-light">
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>1</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>3</td>
                  <td>200</td>
                </tr>
              </table>
              <p className="card-text" style={{ padding: "5px 5px 0px 5px" }}>
                <b className="text-muted">Total Amount:</b>{" "}
                <span style={{ float: "" }}>
                  {" "}
                  <strong>Rs. 400</strong>
                </span>
                <br />
                <small className="text-muted">Inc. of all taxes</small>
              </p>
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Apply Promo code</label>
                  <input className="form-control" type="text" />
                </div>
                <button className="btn btn-success">Apply</button>
                <br />
                <br />
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Use Credit
                  </label>
                </div>
              </form>
              <p>
                {" "}
                <h3>Final Price : 300</h3>
              </p>
              <button
                className="btn btn-primary btn-lg"
                style={{
                  margin: "5px 0px 5px 0px",
                  borderRadius: "5px",
                  borderColor: "purple",
                  backgroundColor: "purple",
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
