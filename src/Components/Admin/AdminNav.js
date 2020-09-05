import React from "react";
import { Nav } from "react-bootstrap";

const AdminNav = () => {
  return (
    <>
      <Nav
        style={{ border: "0" }}
        navbar={true}
        variant="tabs"
        defaultActiveKey="/dashboard"
      >
        <Nav.Item
          style={{
            margin: "0 2px",
            backgroundColor: "#2a3239",
          }}
        >
          <Nav.Link
            style={{ color: "#636e77", borderRadius: "0px" }}
            eventKey="/dashboard"
          >
            <i className="fa fa-home"></i> DASHBOARD
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={{
            margin: "0 2px",
            backgroundColor: "#2a3239",
          }}
        >
          <Nav.Link
            style={{ color: "#636e77", borderRadius: "0px" }}
            eventKey="link-2"
          >
            <i className="fa fa-users"></i> USERS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={{
            margin: "0 2px",
            backgroundColor: "#2a3239",
          }}
        >
          <Nav.Link
            style={{ color: "#636e77", borderRadius: "0px" }}
            eventKey="link-3"
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default AdminNav;
