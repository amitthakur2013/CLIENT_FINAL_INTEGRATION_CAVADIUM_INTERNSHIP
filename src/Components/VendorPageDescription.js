import React, { Fragment } from "react";
import {Modal,Button} from 'react-bootstrap';
import MapComponent from './MapComponent';

const VendorPageDescription = ({ vendor,handleClosemap,handleShowmap,showmap }) => {
  if (!vendor._id) return null;

  return (
    <Fragment>
      <Modal size="lg" show={showmap} onHide={handleClosemap}>
        <Modal.Header style={{backgroundColor:"#E0E0E0"}} closeButton>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="left">
            <div className="how-it-works how-it-works-show">
              {/* <button className="btn-close fr" type="button"></button> */}

              <div style={{height:"380px",marginTop:"-30px"}} className="row">
                <MapComponent address={vendor.locationInfo}/>
              </div>
              
            </div>
          </div>
        </Modal.Body>
        
      </Modal>

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
            <button onClick={handleShowmap}  style={{backgroundColor:"inherit",border:"none",marginBottom:"auto"}}><strong style={{color:"#35A7FF"}}>View on map</strong></button>
              <br/>
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
