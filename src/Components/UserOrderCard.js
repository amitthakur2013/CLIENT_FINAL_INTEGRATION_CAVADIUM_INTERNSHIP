import React,{useState, useEffect} from "react";
import axios from 'axios';
import moment from 'moment';

const UserOrderCard = () => {

  const [order,setOrder]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3124/api/orders/orders",{withCredentials:true})
    .then((data) =>{
      setOrder(data.data);
      console.log(data);
    })
  },[])

  async function generatePdf(dt) {
  let btn1=document.querySelector('#generate')
  let btn2=document.querySelector('#ready')
  btn1.textContent="Loading...";
   const resp=await axios.post(`http://localhost:3124/api/viewpdf/generatePDF/${dt._id}`,{
      "pId":dt.deal._id,
    "merchant":dt.outlet.businessName,
    "address_line1":"hfyuyu yfii yf",
    "state":"maharashtra",
    "zip_code":"713322",
    "vchr_code":dt.redeemCode,
    "vchr_amt":dt.price,
    "adult":dt.deal.adult,
    "child":dt.deal.child,
    "status":dt.status,
    "valid_from":dt.deal.valid.from,
    "valid_to":dt.deal.valid.to,
    "from_date":dt.deal.valid.from,
    "to_date":dt.deal.valid.to,
    "image":dt.deal.img
    },{withCredentials:true})
    btn1.style.display="none";
    btn2.style.display="block";
    
  }


  return (
    <>
      <div
        class="col-sm-12"
        id="vouchertable"
        style={{ background: "white", marginTop: "20px" }}
      >
      {order.map((dt)=>
        <div class="row">
          <div class="col-sm-2">
            <img
              class="voucherimg"
              src="/themes/media/merchant/banner/bbq_2020_07_10_21_56.jpg"
            />
          </div>

          <div class="col-sm-5">
            <h3>{dt.outlet?dt.outlet.businessName:"KFC"}</h3>
            <a href="/details/jagadish">
              <button type="button" class="btn btn-success">
                View Offer Page
              </button>
            </a>
            <p class="vouchertxt">
              Purchased Date:{" "}
              <span>
                <b>{moment(dt.purchasedOn).format('LLLL')}</b>
              </span>
            </p>
            <p class="vouchertxt">
              Order Id:{" "}
              <span>
                <b>{dt._id}</b>
              </span>
            </p>
            <p class="vouchertxt">
              From Date:{" "}
              <span>
                <b>{dt.deal.valid.from}</b>
              </span>
            </p>
            <p class="vouchertxt">
              To Date:{" "}
              <span>
                <b>{dt.deal.valid.to}</b>
              </span>
            </p>
            <p class="vouchertxt">
              Total Adults:{" "}
              <span>
                <b>{dt.deal.adult}</b>
              </span>
            </p>
            <p class="vouchertxt">
              Total Child:{" "}
              <span>
                <b>{dt.deal.child}</b>
              </span>
            </p>
          </div>
          <div class="col-sm-12" style={{ marginTop: "10px" }}>
            <div style={{ overflowX: "auto" }}>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <b>VOUCHER ID:</b>
                      <span class="voucherid"> {dt.redeemCode}</span>
                    </th>
                    <th>
                      <b>STATUS:</b>
                      <span class="voucherid">
                        {" "}
                        <img
                          src="http://all4you.co.in/active.png"
                          style={{ width: "50px" }}
                        />
                      </span>
                    </th>
                    <th>
                      <b>USE BY:</b>
                      <span class="voucherid">{dt.deal.valid.to}</span>
                    </th>
                    <th>
                     
                        <button id="generate" onClick={()=>generatePdf(dt)}
                          type="button"
                          style={{ marginTop: "-6px" }}
                          class="btn btn-success"
                        >
                          Generate PDF
                        </button>
                        <button  id="ready" type="button"
                          style={{ marginTop: "-6px" , display:"none"}}
                          class="btn btn-success">
                        <a style={{color:"white",textDecoration:"none"}} target="_blank" href={`http://localhost:3124/api/viewpdf/fetch-pdf/${dt._id}`}>View</a>
                        </button>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <b>OPTION</b>
                    </td>
                    <td></td>
                    <td>
                      <b>PRICE</b>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td> </td>
                    <td>₹ {dt.deal.price}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          </div>
        </div>)}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default UserOrderCard;
