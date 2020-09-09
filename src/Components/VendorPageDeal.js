import React, { Fragment, useState,useEffect } from "react";
import {Badge,OverlayTrigger,Popover,Modal,Button,Form} from 'react-bootstrap';
import logo from "../assets/logo.png";
import { Markup } from 'interweave';
import swal from 'sweetalert';
import moment from 'moment';


const VendorPageDeal = ({ deal, qty, addToCart, removeFromCart, type }) => {
 
  //Hotel
  const [checkin, setcheckin]=useState("");
  const [checkout, setcheckout]=useState("");
  const [adult,setAdult]=useState(deal.adult);
  const [child,setChild]=useState(deal.child);
  const [isavlroom,setisavlroom]=useState(false)
  const [mealprice,setmealprice]=useState(0);
  const [mealdesc,setmealdesc]=useState("");
  const [showbooknow,setshowbooknow]=useState(true);
  //const [extraAdult,setextraAdult]=useState(0);
  //const [extraChild,setextraChild]=useState(0);

  const finalhoteldeal=(e) => {
    e.preventDefault();
    if(!(checkin && checkout)) {
      return swal({
                      title: "Pls Select Checkin and Checkout date!",
                      text: "",
                      icon: "error",
                      button: "Close",
                    });  
    }

  
    
      if(!room_check_avl()) {
          return swal({
                          title: "Sorry! Room not available",
                          text: "",
                          icon: "error",
                          button: "Close",
                        });  

            }
    
    var finalprice=0;
    var no_of_days=new Date(checkout).getDate()-new Date(checkin).getDate()+1;
    if(no_of_days<deal.minimum_nights){
      return swal({
                      title: `Minimum booking of ${deal.minimum_nights} nights is required!`,
                      text: "",
                      icon: "info",
                      button: "Close",
                    });  
    }
    var np=(deal.price_per_night-((deal.price_per_night*deal.discountPercent)/100))*no_of_days;
    var mp=mealprice*no_of_days;
    var ea=(adult-deal.adult)*deal.maxAdultPrice*no_of_days;
    var ec=(child-deal.child)*deal.maxChildPrice*no_of_days;
    finalprice=np+mp+ea+ec;
    addToCart(deal._id,deal.name+"( "+no_of_days+" nights )"+"-"+mealdesc,finalprice,-1,getDatesArray(checkin,checkout));
    setshowbooknow(false);


  }

  const room_check_avl=()=>{
    if(!(checkin.length && checkout.length)){
      return swal({
                      title: "Pls Select check in and check out date",
                      text: "",
                      icon: "error",
                      button: "Close",
                    });
    }
    
    const dtarr=getDatesArray(checkin,checkout);
    //console.log(dtarr)
    var flag=0;
      deal.dates_available.map((dt)=>{
        if (dtarr.includes(dt.day.toString())){
          
          if(dt.qty===0){
            flag=1
            return
          }
        }
      })
      if (flag==1) return false;
    
    return true;
  }

  const addmeal=(e)=>{
    e.preventDefault();

    var a=document.getElementById('meal-select').value.trim();
    if (a=== 'select'){
      return swal({
                      title: "Pls Select appropriate meal!",
                      text: "",
                      icon: "error",
                      button: "Close",
                    }); 
    }
    setmealdesc(a);
    var b=a.indexOf("@")
    var c=parseInt(a.substring(b+1,a.length))
    setmealprice(c);
  }

  const removemeal=(e)=>{
    e.preventDefault();
    setmealdesc("");
    setmealprice(0);


  }

  const checkavailability=(e)=>{
    e.preventDefault();
    if(!(checkin.length && checkout.length)){
      return swal({
                      title: "Pls Select check in and check out date",
                      text: "",
                      icon: "error",
                      button: "Close",
                    });
    }
    
    const dtarr=getDatesArray(checkin,checkout);
    //console.log(dtarr)
    var flag=0;
      deal.dates_available.map((dt)=>{
        if (dtarr.includes(dt.day.toString())){
          
          if(dt.qty===0){
            flag=1
            return
          }
        }
      })
      if (flag==1) return setisavlroom(false);
    
    return setisavlroom(true);
  }

  const getDatesArray= (start, end) => {
        start=new Date(start)
        start.setDate(start.getDate()-1)
        let initialTime = moment(start).format();
        let endTime = moment(end).format();
        let arrTime = [];
      
        for (
          let q = initialTime;
          moment(q).isBefore(endTime); // q = moment().add(1, "day").format()

        ) {
          q = moment(q).add(1, "day").format();
        
          arrTime.push(moment(q).format("YYYY-MM-DD"));
        }
        return arrTime;
      };

  const handlecheckin=(e)=>{
    if(new Date(e.target.value) < checkDate || !(new Date(e.target.value)<=new Date(deal.valid.to) && new Date(e.target.value)>=new Date(deal.valid.from))) {
             return swal({
                      title: `pls select between ${deal.valid.from} and ${deal.valid.to}`,
                      text: "",
                      icon: "error",
                      button: "Close",
                    });
            }
    if(checkout.length){
      if(!(new Date(e.target.value)<=new Date(checkout))){
         return swal({
                      title: `pls select between ${deal.valid.from} and ${checkout}`,
                      text: "",
                      icon: "error",
                      button: "Close",
                    });
            
      }
    }
    
    setcheckin(e.target.value);
  }

  const handlecheckout=(e)=> {
    if(!checkin.length){
       return swal({
                      title: "Pls select checkin date first",
                      text: "",
                      icon: "error",
                      button: "Close",
                    });
    }
    if(new Date(e.target.value) < checkDate || !(new Date(e.target.value)<=new Date(deal.valid.to) && new Date(e.target.value)>=new Date(checkin))) {
             return swal({
                      title: `pls select between ${checkin} and ${deal.valid.to}`,
                      text: "",
                      icon: "error",
                      button: "Close",
                    });
            }
    setcheckout(e.target.value);

  }

  const increaseadult=(e)=>{
    e.preventDefault();
    if((adult+1)<=deal.maxAdult){
      setAdult(adult+1);
    }
    return;
  }

  const decreaseadult=(e)=>{
     e.preventDefault();
    if(adult-1>=deal.adult){
      setAdult(adult-1);
    }
    return;
  }

  const increasechild=(e)=>{
    e.preventDefault();
    if((child+1)<=deal.maxChild){
      setChild(child+1);
    }
    return;
  }

  const decreasechild=(e)=>{
     e.preventDefault();
    if(child-1>=deal.child){
      setChild(child-1);
    }
    return;
  }

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

    if (g.value==="Select") {
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


  //Hotel Deal Functionality



  const HotelDeal = () => {
    return (
      <>
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
          <div className="col-12 col-md-3">
            <div className="row">
              <img
              alt={deal.name}
              src={`http://localhost:3124/uploads/${deal.img}`}
              className="img-fluid"
              style={{ borderRadius: "5px", width: "100%" }}
              />
            </div>
            <strong style={{fontSize:".85rem"}}>Amenities</strong>
            <div style={{backgroundColor:"#f4f4f4",marginTop:"2px",borderRadius:"3px"}} className="row p-1">
              <ul style={{listStyleType: "none"}}>
              {deal.amenities.split(",").map((am)=>
                  <li className="text-muted" style={{fontSize:".75rem"}}>
                    <span>&#10003;</span> {am}
                  </li>
                )}
              </ul>
            </div>  
            <div style={{marginTop:"5%"}}>
            <button onClick={handleShow} 
                  className="btn btn-primary"
                  style={{ backgroundColor: "inherit", border: "1px solid purple", color:"purple" }}
                >
                  <strong>View Details</strong>
                </button>
                </div>
              
          </div>
          <div className="col-12 col-md-9">
            <div style={{marginLeft:"0.5px"}}  className="row">
              <strong>{deal.name}</strong>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <strong style={{fontSize:".80rem"}}>Occupancies</strong><br/>
                <span style={{fontSize:".80rem"}} className="text-muted">Adult:</span> {deal.adult}
                <span style={{fontSize:".80rem"}} className="text-muted">|Child:</span> {deal.child}<br/>
                <strong style={{fontSize:".80rem"}}>Max Occupancies</strong><br/>
                <span style={{fontSize:".80rem"}} className="text-muted">Max Adult:</span> {deal.maxAdult}
                <span style={{fontSize:".80rem"}} className="text-muted">|Max Child:</span> {deal.maxChild}
              </div>

              <div className="col-12 col-md-3">
                <strong style={{fontSize:".80rem"}}>Inclusions</strong><br/>
                <ul style={{listStyleType: "none"}}>
                  {deal.inclusions.split(",").map((am)=>
                      <li className="text-muted" style={{fontSize:".80rem"}}>
                        <span>&#10003;</span> {am}
                      </li>
                    )}
                  </ul>

              </div>

              <div className="col-12 col-md-5">
                
                <strong style={{fontSize:".80rem"}}>Per night</strong><br/>
                <Badge style={{float:"right"}} variant="info">{deal.discountPercent}% OFF</Badge>
                <del style={{fontSize:".70rem"}} className="text-muted">Rs. {deal.price_per_night}</del>{" "}
                <strong style={{fontSize:".85rem"}}>Rs. {deal.price_per_night-((deal.price_per_night*deal.discountPercent)/100)}</strong>
                
          
              </div>

            </div>
            <hr/>
            <div className="row mt-1">
              <div className="col-12 col-md-6">
                <strong>Check in</strong>
                <input className="form-control" value={checkin} type="date" onChange={(e)=>handlecheckin(e)}/><br/>
                <button className="btn btn-danger" onClick={(e)=>checkavailability(e)}>Check Availability</button>
              </div>
              <div className="col-12 col-md-6">
                <strong>Check out</strong>
                <input className="form-control" value={checkout} type="date" onChange={(e)=>handlecheckout(e)}/><br/>
                {isavlroom?<strong style={{color:"green"}}>Available</strong>:<strong style={{color:"red"}}>Not Available</strong>}

              </div>
              
            </div>
            <hr/>
            <div className="row mt-2">
              <div className="col-12 col-md-4">
              <strong>Adult: </strong>
                  <button
                    onClick={(e) => decreaseadult(e)}
                    className="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "purple",
                      border: "purple",
                    }}
                  >
                    -
                  </button>{" "}
                  <span>{adult}</span>{" "}
                    <button
                    onClick={(e) => increaseadult(e)}
                    className="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "purple",
                      border: "purple",
                    }}
                  >
                    +
                  </button><br/>
                    <small className="text-muted"><i>add extra adult @ Rs.{deal.maxAdultPrice}</i></small>
              </div>
              <div className="col-12 col-md-4">
                <strong st>Child: </strong>
                  <button
                    onClick={(e) => decreasechild(e)}
                    className="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "purple",
                      border: "purple",
                    }}
                  >
                    -
                  </button>{" "}
                  <span>{child}</span>{" "}
                    <button
                    onClick={(e) => increasechild(e)}
                    className="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "purple",
                      border: "purple",
                    }}
                  >
                    +
                  </button><br/>
                  <small className="text-muted"><i>add extra child @ Rs.{deal.maxChildPrice}</i></small>
                    
              </div>
              <div className="col-12 col-md-4">
                
                {(adult-deal.adult)?<><small style={{color:"orange"}}>Extra Adult : </small><small><strong>{adult-deal.adult}</strong></small></>:""}<br/>
                {(child-deal.child)?<><small style={{color:"orange"}}>Extra Child : </small><small><strong>{child-deal.child}</strong></small></>:""}


              </div>
              
            </div>
            <hr/>
            <div className="row ">
              <div className="col-12 col-md-8">
                <div style={{marginLeft:"0.5px"}} className="row">
                  <strong >Add Meal</strong>
                </div>
                <div className="row mt-1">
                    <div className="col-12 col-md-5">
                      <select id="meal-select" className="form-control" >
                      <option selected>select</option>
                      {deal.meal.map(d=>
                        <option>{d.meal_type +"-@"+d.meal_price}</option>
                      )}
                      </select>
                      <small style={{color:"orange"}}>{mealdesc}</small> 
                    </div>
                    <div className="col-12 col-md-3">
                      {!mealprice?<button onClick={(e)=>addmeal(e)} className="btn btn-sm btn-primary">Add</button>:
                      <button onClick={(e)=>removemeal(e)} className="btn btn-sm btn-danger">Remove</button>}
                    </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mt-4">
                  {showbooknow?<button 
                  onClick={(e)=>finalhoteldeal(e)}


                  className="btn btn-info btn-block">Book Now</button>:

                  <button 
                  onClick={()=>{

                    removeFromCart(deal._id)
                    setshowbooknow(true);
                  }}


                  className="btn btn-danger btn-block">Cancel</button>}

                  
              </div>

            </div>
          </div>

            
        </div>
      </>
    );
  };


   const ActivityDeal = () => {
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
                    currentslotqty,
                    []
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
                    deal.qty,
                    []
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
      {type==='Hotel' && <HotelDeal />}
        {type!=='Hotel' &&<div
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
                {(type !=='Movies' && type !=='Hotel')?<small>
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
        </div>}
      </div>
    </Fragment>
  );
};

export default VendorPageDeal;
