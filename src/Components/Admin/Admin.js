import React from "react";
import { Link } from "react-router-dom";

import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";

// import '../../components-md.min.css'
import { Nav } from "react-bootstrap";
const Admin = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "#2f373e", minHeight: "800px" }}
      >
        <div className="row">
          <h1>dsd</h1>
        </div>
        <div className="row-fluid">
          <AdminNav />
          <div
            className="container-fluid"
            style={{
              backgroundColor: "white",
              padding: " 20px 30px",
              minHeight: "650px",
              marginLeft: "2px",
            }}
          >
            <Dashboard />
          </div>
          <div style={{ color: "#bbb", fontSize: "14px" }}>
            <p>
              © Copyright 2020 <Link to="/"> All For You</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
