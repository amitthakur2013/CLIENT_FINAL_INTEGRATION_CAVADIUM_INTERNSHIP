import React, { Fragment, useState,useEffect } from "react";
import {Badge,OverlayTrigger,Popover,Modal,Button} from 'react-bootstrap';
import logo from "../assets/logo.png";
import { Markup } from 'interweave';

const VendorPageDeal = ({ deal, qty, addToCart, removeFromCart, type }) => {
  const [datalist, setDatalist] = useState(["A1", "A2", "A3"]);
  const [tickets, setTickets] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [slots, setSlots] = useState([
    "aug 25: 1pm to 2pm",
    "aug 27: 1pm to 3pm",
    "aug 27: 4pm to 9pm",
  ]);
  const [currentSlot, setCurrentSlot] = useState(slots[0]);
  const [timing,setTiming] = useState({});
  //const time={"Sun":"10 AM - 06 PM", "Tue":"10 AM - 08 PM", "Wed":"10 AM - 08 PM", "Sat":"10 AM - 08 PM"}
  var time={}

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function bd(){
    await deal.validOn.map((tm)=>
      time[tm.day]=tm.slot
    )
    
  }
  bd();
  console.log(time);
  const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Timings</Popover.Title>
    <Popover.Content>
    <ul>
      {Object.keys(time).map((key)=>
        <li><b>{key}</b> :  <span style={{float:"right"}}>{time[key]}</span></li>
        )}
        </ul>
    </Popover.Content>
  </Popover>
);

  const ActivityDeal = () => {
    return (
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
          <h1>Package details</h1>
          <div className="col-6 col-lg-12">
            <div className="d-flex justify-content-end">
              <label>
                select slot:
                <select
                  value={currentSlot}
                  onChange={(e) => setCurrentSlot(e.target.value)}
                  onBlur={(e) => setCurrentSlot(e.target.value)}
                  disabled={!slots.length}
                >
                  {slots.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="col-6 col-lg-12">
              <div className="d-flex justify-content-end">
                <p>Number of tickets: </p>
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
                <div className="p-2" style={{ paddingTop: "10px !important" }}>
                  {qty}
                </div>
                <div className="p-2">
                  <button
                    onClick={() =>
                      addToCart(
                        deal._id,
                        deal.name,
                        deal.price - (deal.price * deal.discountPercent) / 100,
                        currentSlot
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
    );
  };
  const HotelDeal = () => {
    return (
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
          <h1>Package details</h1>
          <div className="col-6 col-lg-12">
            <div className="d-flex justify-content-end">
              <h4>Rooms: </h4>
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
              <div className="p-2" style={{ paddingTop: "10px !important" }}>
                {qty}
              </div>
              <div className="p-2">
                <button
                  onClick={() =>
                    addToCart(
                      deal._id,
                      deal.name,
                      deal.price - (deal.price * deal.discountPercent) / 100
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
    );
  };
  const MovieDeal = () => {
    return (

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
          <div className="p-2" style={{ paddingTop: "10px !important" }}>
            Seats:
          </div>
          {tickets.map((t) => (
            <span
              className="badge badge-primary"
              key={t}
              style={{ margin: "2px" }}
            >
              {t}

              <button
                className="close"
                aria-label="Close"
                style={{ fontSize: "100%", fontWeight: 1000 }}
                type="click"
                onClick={() => {
                  let ticketArr = [...tickets];
                  ticketArr = ticketArr.filter((ele) => ele !== t);
                  setTickets(ticketArr);
                  let remaining = [...datalist];
                  remaining.push(t);
                  remaining.sort();
                  setDatalist(remaining);
                  ticketArr = ticketArr.filter((ele) => ele !== t);
                  setTickets(ticketArr);
                  removeFromCart(t);
                }}
              >
                <i className="fa fa-times" aria-hidden="true "></i>
              </button>

              {/* </i> */}
            </span>
          ))}

          <input
            type="search"
            list="ticketsListData"
            value={searchVal}
            className="form-control prompt"
            onChange={(e) => setSearchVal(e.target.value)}
            autoComplete="on"
            style={{ width: "100px" }}
          />
          <datalist id="ticketsListData">
            {datalist.map((item) => (
              <option value={item} key={item} />
            ))}
          </datalist>
          <span className="input-group-btn">
            <input
              className="btn btn-default search-btn"
              type="submit"
              onClick={(e) => {
                if (!searchVal) return;
                const ticketArr = [...tickets];
                ticketArr.push(searchVal);
                addToCart(
                  searchVal,
                  deal.name + " " + searchVal,
                  deal.price - (deal.price * deal.discountPercent) / 100
                );
                setTickets(ticketArr);

                let remaining = [...datalist];
                remaining = remaining.filter((t) => t !== searchVal);
                setDatalist(remaining);
                setSearchVal("");
              }}
            />
          </span>
        </div>
      </div>
    );
  };
  const DefaultDeal = () => (
    <div className="col-12 col-lg-3">

      <div className="row">
        <div className="col-6 col-lg-12">
        
          <p>
              <del className="text-muted">Rs.{deal.price}</del>
              {"  "}
              <strong>Rs.{deal.price - (deal.price * deal.discountPercent) / 100}</strong><br/>
              <small style={{color:"gray"}}>Inc. of all taxes</small>
          </p>
        </div>
        <div className="col-6 col-lg-12">
          <div className="d-flex justify-content-end">
            <div className="p-2">
              {qty ?<button
                onClick={() => removeFromCart(deal._id)}
                className="btn btn-sm btn-primary"
                style={{
                  backgroundColor: "purple",
                  border: "purple",
                }}
              >
                -
              </button>:""}
            </div>
            <div className="p-2" style={{ paddingTop: "10px !important" }}>
              {qty?qty:""}
            </div>
            <div className="p-2">
              <button
                onClick={() =>
                  addToCart(
                    deal._id,
                    deal.name,
                    deal.price - (deal.price * deal.discountPercent) / 100
                  )
                }
                className="btn btn-sm btn-primary"
                style={{
                  backgroundColor: "purple",
                  border: "purple",
                }}
              >
                {qty?"+":"  Add + "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:"#E0E0E0"}} closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="left container">
            <div className="how-it-works how-it-works-show">
              {/* <button className="btn-close fr" type="button"></button> */}

              <div style={{marginTop:"-50px"}} className="row">
                {deal.howtouse? <Markup content={deal.howtouse.info} />:""}<br/>
                {deal.cancellationpolicy? <Markup content={deal.cancellationpolicy.info} />:""}<br/>
                {deal.thingstoremember?<Markup content={deal.thingstoremember.info} />:""}
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
      <div style={{ marginBottom: "10px" }}>
        <div
          className="row"
          style={{
            backgroundColor: "white",
            padding: "10px 5px 10px 5px",
            borderRadius: "3px",
            border: "1px solid #E0DEDE",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <div className="col-12 col-lg-3"><br/><br/>
            <img
              alt={deal.name}
              src={`http://localhost:3124/uploads/${deal.img}`}
              className="img-fluid"
              style={{ borderRadius: "5px", width: "100%" }}
            />
               </div>
          <div className="col-12 col-lg-9"><br/>
            <h5 >
              <strong>{deal.name}</strong>
            </h5>
            <Badge style={{float:"right",marginRight:"10px"}} variant="info">{deal.discountPercent}% OFF</Badge>
          <p className="text-muted" style={{ marginBottom: "10px" }}>{deal.description}</p>
            <div className="row">
              <div className="col-12 col-lg-9">
                <p style={{ marginBottom: "10px",color:"green" }}>Free Cancellation</p>
                <small>
                  <span className="text-muted">Valid For :</span> <strong> 1 Person</strong> |{" "}
                  <span className="text-muted">Valid on :</span><strong> {Object.keys(time).map((key)=> <strong> {key} |</strong>
        )} </strong> <br/>
                  
                  <span className="text-muted">Timings :</span><strong> {time["Sun"]} </strong><OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <button style={{backgroundColor:"inherit",color:"gray",border:"none",textDecoration:"underline"}}>SEE ALL</button></OverlayTrigger>
                </small>
                <br />

                {type === "Movies" && <MovieDeal />}
                {type === "Hotels" && <HotelDeal />}
                {type === "Activity" && <ActivityDeal />}
              </div>
              {type !== "Movies" &&
                type !== "Hotels" &&
                type !== "Activity" && <DefaultDeal />}
            </div>
            <div className="dropdown-divider"></div>
            <div className="d-flex justify-content-end">
              <div className="p-2">
                <button onClick={handleShow} 
                  className="btn btn-primary"
                  style={{ backgroundColor: "inherit", border: "1px solid purple", color:"purple" }}
                >
                  <strong>View Details</strong>
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
