import React, { Fragment, useState,useEffect } from "react";
import {Badge,OverlayTrigger,Popover,Modal,Button,Form} from 'react-bootstrap';
import logo from "../assets/logo.png";
import { Markup } from 'interweave';
import swal from 'sweetalert';
import moment from 'moment';

const VendorPageDeal = ({ deal, qty, addToCart, removeFromCart, type }) => {
 // const [datalist, setDatalist] = useState(["A1", "A2", "A3"]);
  //const [tickets, setTickets] = useState([]);
 // const [searchVal, setSearchVal] = useState("");
  const [date,setDate]=useState("");
  const [slots,setSlots]=useState([]);
  const [currentSlot, setCurrentSlot] = useState("");
  const [movieId,setMovieId]=useState("")
  const [currentslotqty,setCurrentslotqty]=useState(0)
  const [tickprice,setTickprice]=useState(0)
  var checkDate=new Date();
  checkDate.setDate(checkDate.getDate()-1);

  const [timing,setTiming] = useState({});
  //const time={"Sun":"10 AM - 06 PM", "Tue":"10 AM - 08 PM", "Wed":"10 AM - 08 PM", "Sat":"10 AM - 08 PM"}
  var time={}
  const [run,setRun]=useState(false)

  const showSlots=async (e)=>{
    document.querySelector("#slot-select").value="Select";
    var q=qty
    for (var i=1;i<=q;i++){
      removeFromCart(deal._id)
    }
    if(new Date(e.target.value) < checkDate) {
             return swal({
                      title: "Past date not allowed!",
                      text: "",
                      icon: "info",
                      button: "Close",
                    });
            }
    var f=e.target.value;
    // Remember to change movieAvailability to availability
    var flag=0;
    await deal.movieAvailability.map(async (avl)=>{
      if (avl.day.toString() === e.target.value.toString()){
        flag=1
        await setSlots(avl.slot);
        return;
      }
    })
    await setDate(f.toString())
    if (flag === 0) {
    await setSlots([]);
    await setCurrentSlot("");
    }

  }

  const movieSlot=(e) => {
    var g=e.target;
    var x=g.selectedIndex;
    var y=g.options;

    if (g==="Select") {
      return swal({
                  title: "Please Select valid slot!",
                  text: "",
                  icon: "info",
                  button: "Close",
                });
    }
    var q=qty
    for (var i=1;i<=q;i++){
      removeFromCart(deal._id)
    }
    slots.map((st)=>{
      if ((st._id.toString()) === (g.value.toString())){
        setMovieId(st._id);
        setCurrentslotqty(st.qty);
        setTickprice(st.price);
        return;
      }
    })

    setCurrentSlot(y[x].text);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function bd(){
    await deal.validOn.map((tm)=>
      time[tm.day]=tm.slot
    )
    
  }
  bd();

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
      <>
      </>
    );
  };
  const HotelDeal = () => {
    return (
      <>
      </>
    );
  };
  const MovieDeal = () => {
    return (
      <div className="row">
      <div className="col-12 col-md-6">
      <Form.Group>
        <Form.Label>Choose Date :</Form.Label>
        <Form.Control type="date" onChange={(e) => showSlots(e)
        } value={date} />
      </Form.Group>

      </div>
      <div className="col-12 col-md-6">
        
          <Form.Group>
            <Form.Label>Choose Slot :</Form.Label>
            <select id="slot-select" value={movieId} onChange={(e)=>movieSlot(e)}>
              {!slots.length ? <option selected disabled style={{color:"red"}}>No Slots Available</option>:<option value="Select" selected>Select</option>}
              {slots.map(slt=>
                
                <option key={slt._id} value={slt._id.toString()}>{slt.from+"-"+slt.to}</option>
                
                )}
            </select>
          </Form.Group>

        <del className="text-muted">Rs. {tickprice}</del>{"  "}<strong>Rs. {tickprice-(deal.discountPercent*tickprice/100)}</strong>
        
      </div>
      
      {currentSlot.includes("-") && <div id="movieaddbutton" className="col-6 col-lg-12">
          <div className="d-flex justify-content-center">
            <div className="p-2">
              <button
                onClick={() => removeFromCart(deal._id)}
                className="btn btn-sm btn-primary"
                style={{
                  backgroundColor: "purple",
                  border: "purple",
                }}
              >
                - Remove
              </button>
            </div>
            <div className="p-2" style={{ paddingTop: "10px !important" }}>
              {qty?qty:""}
            </div>
            <div className="p-2">
              <button
                onClick={() =>
                  addToCart(
                    deal._id,
                    deal.name+" ("+date+")-("+currentSlot+")",
                    tickprice - (tickprice * deal.discountPercent) / 100,
                    currentslotqty
                  )
                }
                className="btn btn-sm btn-primary"
                style={{
                  backgroundColor: "purple",
                  border: "purple",
                }}
              >
                Add +
              </button>
            </div>
          </div>
        </div>}
  
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
                    deal.price - (deal.price * deal.discountPercent) / 100,
                    deal.qty
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
                {type !=='Movies'?<small>
                  <span className="text-muted">Valid For :</span> <strong> 1 Person</strong> |{" "}
                  <span className="text-muted">Valid on :</span><strong> {Object.keys(time).map((key)=> <strong> {key} |</strong>
        )} </strong> <br/>
                  
                  <span className="text-muted">Timings :</span><strong> {time["Sun"]} </strong><OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <button style={{backgroundColor:"inherit",color:"gray",border:"none",textDecoration:"underline"}}>SEE ALL</button></OverlayTrigger>
                </small>:""}
                

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
