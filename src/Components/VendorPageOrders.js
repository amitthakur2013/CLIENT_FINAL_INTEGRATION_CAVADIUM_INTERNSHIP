import React, { useState, useEffect } from "react";
import OrderDealItem from "./OrderDealItem";
import { Link } from "react-router-dom";
import axios from 'axios';

const VendorPageOrders = ({ cart }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartKeys, setCartKeys] = useState([]);
 if(localStorage.getItem("user")){
    var user=JSON.parse(localStorage.getItem("user")).data;
  }
  useEffect(() => {
   if(localStorage.getItem("user")){
        let cartDetails=[]
        
        Object.keys(cart).map(key=>{
          let a={};
          a["id"]=key; 
          a["name"]=cart[key].name;
          a["price"]=cart[key].price;
          a["qty"]=cart[key].qty;
          cartDetails.push(a);
        })
        console.log(cartDetails);

        (async function () {
          await axios.post(`http://localhost:3124/api/customer/cart/${user._id}`,{
            cartDetails
          },{withCredentials:true})
        })();
    }
    const cartKeys = Object.keys(cart);
    setCartKeys(cartKeys);
    if (!cartKeys.length) return;
    const amt = cartKeys.reduce(
      (val, key) => val + cart[key].price * cart[key].qty,
      0
    );
    setTotalAmount(amt);
  }, [cart]);

  return (
    <>
      <div>
        <div
          className="card"
          style={{
            borderRadius: "3px",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
        <div className="p-2" style={{backgroundColor:"#E0E0E0",width:"100%"}}>
            <h5 className="card-title text-center">
              <strong>Your Order</strong>
            </h5>
          </div>
          <div className="card-body">
          
            <div style={{ marginTop: "15px" }}>
              {cartKeys.map((key) => {
                return <OrderDealItem key={key} id={key} item={cart[key]} />;
              })}
            </div>
            <div className="dropdown-divider"></div>
            <p className="card-text" style={{ padding: "5px 5px 0px 5px" }}>
              <b className="text-muted">Total Amount:</b> <span style={{float:"right"}}> <strong>Rs. {totalAmount}</strong></span><br/>
              <small className="text-muted">Inc. of all taxes</small>
            </p>
            {cartKeys.length && <button
              className="btn btn-primary"
              style={{
                margin: "5px 0px 5px 0px",
                borderRadius: "0px",
                borderColor: "purple",
                backgroundColor: "purple",
              }}
            >
              <Link to="/checkout" style={{ color: "white" }}>
                Proceed To Checkout
              </Link>
            </button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorPageOrders;
