import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
function HowItWorksModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <a variant="primary" > */}
      <span onClick={handleShow}>How it works</span>
      {/* </a> */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How it works</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="left">
            <div className="how-it-works how-it-works-show">
              {/* <button className="btn-close fr" type="button"></button> */}

              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="text-center box-item">
                    {/* <img
                      alt=""
                      className="img-responsive"
                      height="251"
                      src="https://all4you.co.in/"
                      width="251"
                    /> */}
                    <p className="heading">Explore</p>
                    <p>
                      Amazing options at restaurants, spas, gyms, movies, hotels
                      and more around you.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="text-center box-item">
                    {/* <img
                      alt=""
                      className="img-responsive"
                      height="251"
                      src="https://all4you.co.in/"
                      width="251"
                    /> */}
                    <p className="heading">Buy</p>
                    <p>
                      Easily and securely, using credit/debit cards, net-banking
                      or wallets.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="text-center box-item">
                    {/* <img
                      alt=""
                      className="img-responsive"
                      height="251"
                      src="https://all4you.co.in/"
                      width="251"
                    /> */}
                    <p className="heading">Enjoy</p>
                    <p>
                      The service by simply showing your voucher on the All fore
                      you app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="how-it-works-footer">
                <img
                  alt="All For You "
                  className="img-responsive"
                  height="251"
                  src={logo}
                  width="251"
                />
                <p>Experience the world around you.</p>
              </div>
            </div>
          </div>
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

export default HowItWorksModal;
