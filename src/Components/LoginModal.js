import React, { useState } from "react";
// import { createPortal } from "react-dom";
// const modalRoot = document.getElementById("login-modal");
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotForm from "./ForgotForm";
function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <a variant="primary" > */}
      <span onClick={handleShow} style={{color:"white"}}>Login/Signup</span>
      {/* </a> */}
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey="signup" title="Signup">
              <SignupForm />
            </Tab>
            <Tab eventKey="forgot" title="Forgot Password">
              <ForgotForm />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
