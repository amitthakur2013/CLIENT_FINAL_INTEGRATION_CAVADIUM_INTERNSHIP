import React,{useState,useEffect} from "react";
import axios from 'axios';
import swal from 'sweetalert';

export const Checkout = () => {
  let user=JSON.parse(localStorage.getItem("user")).data;
  const [amt,setAmt]=useState(0);
  const [cartItem,setCartItem]=useState([]);
  const [useCredit,setUseCredit]=useState(false);
  const [code,setCode]=useState("");
  const [pap,setPap]=useState(false);
  //const [finalprice,setFinalprice]=useState(0);

  useEffect(()=>{
   const getct= async()=>{
      try{
      const resp=await axios.get(`http://localhost:3124/api/customer/cart/${user._id}`,{withCredentials:true});
      await setCartItem(resp.data);
      var am=resp.data.reduce((val,key)=>{
        return val+(key.price*parseInt(key.qty))
      },0);
      setAmt(am);
    } catch(err) {
      console.log(err);
    }
   }
   getct()
  },[])

  const placeOrder=(e)=>{
  	e.preventDefault();
  	alert("hmm");
  }

  const clearCart=async (e) => {
    e.preventDefault();
    if(pap){
      removePromo(e);
    }
    try{
      const resp=await axios.delete(`http://localhost:3124/api/customer/cart/${user._id}`,{withCredentials:true});
      console.log(resp);
      setCartItem([]);
      setUseCredit(false);
      setAmt(0);
      setCode("");
      document.getElementById("exampleCheck1").checked=false;
    } catch(err) {
      console.log(err);
    }
  }

  const applyPromo=(e)=>{
  	e.preventDefault();
  	if(!code.length) {
  		return swal({
		        title: "Code cannot be blank",
		        text: "",
		        icon: "error",
		        button: "Close",
		      });
  	}
  	var cart=[]
  	
  	cartItem.map((ct)=>{
  		var x={}
  		x["deal"]=ct.id
  		x["customer"]=user._id
  		x["price"]=ct.price*ct.qty
  		x["promocode"]=""
  		x["discountedPrice"]=0
  		cart.push(x);
  	})
  	
  	axios.post("http://localhost:3124/api/promocode/apply",{
  		cart,
  		totalPrice:amt,
  		code
  	},{withCredentials:true})
  	.then((resp)=>{
  		console.log(resp);
  		if(resp.data.object){
		  		var m=resp.data.object.cart.reduce((val, key)=>{
		  			return val+key.discountedPrice
		  		},0);
		  		setAmt(m);
		  		setPap(true);
		  		return swal({
		        title: resp.data.message,
		        text: "",
		        icon: "success",
		        button: "Close",
		      });
  		} else {
  			setPap(false);
  			return swal({
		        title: resp.data,
		        text: "",
		        icon: "error",
		        button: "Close",
		      });
  		}
  	})
  	.catch((err)=>console.log(err));
  }

  const removePromo=(e) => {
  	e.preventDefault();
  	//setPap(false);
  	var cart=[]
  	
  	cartItem.map((ct)=>{
  		var x={}
  		x["deal"]=ct.id
  		x["customer"]=user._id
  		x["price"]=ct.price*ct.qty
  		x["promocode"]=""
  		x["discountedPrice"]=0
  		cart.push(x);
  	})
  	axios.post("http://localhost:3124/api/promocode/remove",{
  		cart,
  		totalPrice:amt,
  		code
  	},{withCredentials:true})
  	.then((resp)=>{
  		console.log(resp);
  		if(resp.data.object){
		  		var m=resp.data.object.cart.reduce((val, key)=>{
		  			return val+key.discountedPrice
		  		},0);
		  		setAmt(m);
		  		setPap(false);
		  		return /*swal({
		        title: resp.data.message,
		        text: "",
		        icon: "success",
		        button: "Close",
		      });*/
  		} else {
  			setPap(true);
  			return swal({
		        title: resp.data,
		        text: "",
		        icon: "error",
		        button: "Close",
		      });
  		}
  	})
  	.catch((err)=>console.log(err));

  }

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
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total Price</th>
                </tr>
                {cartItem.map(ct=>
                <tr>
                  <td>{ct.name}</td>
                  <td>{ct.price}</td>
                  <td>{ct.qty}</td>
                  <td>{ct.price*ct.qty}</td>
                  
                </tr>)}
                
              </table>
              <p className="card-text" style={{ padding: "5px 5px 0px 5px" }}>
                <b className="text-muted">Total Amount:</b>{" "}
                <span style={{ float: "" }}>
                  {" "}
                  <strong>Rs. {amt}</strong>{!pap?"": <span style={{color:"orange"}}>( Promocode Applied )</span>}
                </span>
                <br />
                <small className="text-muted">Inc. of all taxes</small>
              </p>
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Apply Promo code</label>
                  <input className="form-control" type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
                </div>
                {!pap && <button onClick={(e)=>applyPromo(e)} className="btn btn-success">Apply</button>}
                {"  "}
                {pap && <button onClick={(e)=>removePromo(e)} className="btn btn-danger">Remove</button>}
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
                <h3>Final Price : Rs. {(useCredit && cartItem.length) ? amt-user.credit:amt}</h3>
              </p>
              {cartItem.length?<button onClick={(e)=>placeOrder(e)}
                className="btn btn-primary btn-lg"
                style={{
                  margin: "5px 0px 5px 0px",
                  borderRadius: "5px",
                  borderColor: "purple",
                  backgroundColor: "purple",
                }}
              >
                Place Order
              </button>:""}{"  "}
              {cartItem.length ?<button onClick={(e)=>clearCart(e)}
                className="btn btn-primary btn-lg"
                style={{
                  margin: "5px 0px 5px 0px",
                  borderRadius: "5px",
                  borderColor: "red",
                  backgroundColor: "red",
                }}
              >
                Clear Cart
              </button>:""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
