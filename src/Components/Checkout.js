import React,{useState,useEffect} from "react";
import axios from 'axios';

export const Checkout = () => {
  let user=JSON.parse(localStorage.getItem("user")).data;
  const [amt,setAmt]=useState(0)
  const [cartItem,setCartItem]=useState([])
  const [useCredit,setUseCredit]=useState(false)

  useEffect(async ()=>{
  	try{
	  	const resp=await axios.get(`http://localhost:3124/api/customer/cart/${user._id}`,{withCredentials:true});
	  	await setCartItem(resp.data);
	  	var am=resp.data.reduce((val,key)=>{
	  		return val+parseInt(key.price)
	  	},0);
	  	setAmt(am);
	  } catch(err) {
	  	console.log(err);
	  }
  },[])

  return (
    <>
      <div id="wrapper" style={{ marginTop: "200px" }}>
        <div className="container">
          {/* <h1>Checkout :</h1> */}
          <div
            className="card"
            style={{
              borderRadius: "5px",
              //   boxShadow: "-6px -6px 16px #d1cdc7, 6px 16px 16px #d1cdc7",
              boxShadow: "5px 5px 20px #d1cdc7",
            }}
          >
            <div
              className="p-2"
              style={{
                backgroundColor: "purple",
                color: "white",
                width: "100%",
                borderRadius: "5px",
              }}
            >
              <h1 className="display-2 text-center">Your Order</h1>
            </div>
            <div className="card-body">
              <div style={{ marginTop: "15px" }}></div>
              <div className="dropdown-divider"></div>

              <table className="table">
                <tr className="thead-light">
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
                {cartItem.map(ct=>
                <tr>
                  <td>{ct.name}</td>
                  <td>{ct.qty}</td>
                  <td>{ct.price}</td>
                </tr>)}
                
              </table>
              <p className="card-text" style={{ padding: "5px 5px 0px 5px" }}>
                <b className="text-muted">Total Amount:</b>{" "}
                <span style={{ float: "" }}>
                  {" "}
                  <strong>Rs. {amt}</strong>
                </span>
                <br />
                <small className="text-muted">Inc. of all taxes</small>
              </p>
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Apply Promo code</label>
                  <input className="form-control" type="text" />
                </div>
                <button className="btn btn-success">Apply</button>
                <br />
                <br />
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    onChange={(e)=>setUseCredit(!useCredit)}
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Use Credit <b style={{color:"green"}}>(Available Credit : <span style={{color:"black"}}>{!useCredit?user.credit:((user.credit-amt)>=0?(user.credit-amt):0)}</span>)</b>
                  </label>
                </div>
              </form>
              <p>
                {" "}
                <h3>Final Price : {useCredit ? amt-user.credit:amt}</h3>
              </p>
              <button
                className="btn btn-primary btn-lg"
                style={{
                  margin: "5px 0px 5px 0px",
                  borderRadius: "5px",
                  borderColor: "purple",
                  backgroundColor: "purple",
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
