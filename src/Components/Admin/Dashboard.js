import React from "react";
import { ListGroup } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <span style={{ fontSize: "18px", fontWeight: "400" }}>DASHBOARD</span>
      <div className="row" style={{ marginTop: "10px" }}>
        {/* <div className="container-fluid">
        <div className="row"> */}
        <div
          className="col-lg-3 col-md-3 col-sm-6 col-xs-12 "
          style={{
            fontSize: "14px",
          }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#3598dc",
              margin: "5px 0px",
              padding: "0px",
            }}
          >
            <div className="col-12">
              <DashboardCardColored />
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-6 col-xs-12 "
          style={{
            fontSize: "14px",
          }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#32c5d2",
              margin: " 5px 0px",
              padding: "0px",
            }}
          >
            <div className="col-12">
              <DashboardCardColored />
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-6 col-xs-12 "
          style={{
            fontSize: "14px",
          }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#8E44AD",
              margin: "5px 0px ",
              padding: "0px",
            }}
          >
            <div className="col-12">
              <DashboardCardColored />
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-6 col-xs-12 "
          style={{
            fontSize: "14px",
          }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#e43a45",
              margin: "5px 0px",
              padding: "0px",
            }}
          >
            <div className="col-12">
              <DashboardCardColored />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <Cardhollow />
        <Cardhollow />
        <Cardhollow />
        <Cardhollow />
      </div>
      <div className="row" style={{ marginTop: "10px" }}></div>
      <div className="row">
        <div
          class="col-md-6 col-sm-6 "
          style={{
            border: "1px solid #e7ecf1",
            boxShadow: " 0 2px 3px 2px rgba(0,0,0,.03)",
          }}
        >
          <div className="recent-activities-title">
            <h6 style={{ marginTop: "20px", marginBottom: "0px" }}>
              RECENT ACTIVITIES
            </h6>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className="overflow-auto" style={{ height: "150px" }}>
            <ul>
              <li>
                <div class="recent-item">
                  <i class="fa fa-shopping-cart"></i>
                  <p className="recent-items-details">
                    User
                    <a> prashant mehta</a>
                    has placed New Order :<a>AFUC-2008-BARB-0001</a>
                  </p>
                </div>
              </li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
              <li>sadasd</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const Cardhollow = () => {
  return (
    <div
      className="cardHollow col-lg-3 col-md-3 col-sm-6 col-xs-12 "
      style={{
        fontSize: "14px",
      }}
    >
      <div
        className="row"
        style={{
          //   backgroundColor: "#3598dc",
          margin: "0px",
          padding: "0px",
          border: "1px solid #e7ecf1",
          fontWeight: 700,
          color: "#8e9daa",
          margin: "0 0 20px",
        }}
      >
        <div className="col-12">
          <div>
            <h6>TOTAL</h6>
          </div>
          <div>
            <div
              style={{
                backgroundColor: "red",
                width: "25px",
                height: "25px",
                display: "inline-block",
              }}
            ></div>

            <div style={{ display: "inline-block" }}>
              <span
                style={{
                  fontSize: "42px",
                  color: "#3e4f5e",
                }}
              >
                2{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCardColored = () => {
  return (
    <a
      className="dashboard-stat dashboard-stat-v2 blue"
      href="/backend/payment/monthly-order"
      disabled="disabled"
    >
      <div className="visual">
        {/* <i
            style={{ fontSize: "110px" }}
            className="fa fa-shopping-cart"
          ></i> */}
      </div>
      <div
        className="details"
        style={{
          textAlign: "right",
          margin: "10px 0",
          color: "white",
          padding: "10px 0",
        }}
      >
        <div className="number">
          <span data-counter="counterup" data-value="">
            1{" "}
          </span>
        </div>
        <div className="desc">This Month Orders </div>
      </div>
    </a>
  );
};
