import React, { useState, useEffect } from "react";
import axios from "axios";
import VendorPageCarousel from "./VendorPageCarousel";
import VendorPageDescription from "./VendorPageDescription";
import VendorPageOrders from "./VendorPageOrders";
import VendorPageDeal from "./VendorPageDeal";
import swal from 'sweetalert';

const VendorPage = ({ match }) => {
  const [deals, setDeals] = useState([]);
  const [vendor, setVendor] = useState({});
  const [cart, setCart] = useState({});

  const [showmap, setShowmap] = useState(false);
  const handleClosemap = () => setShowmap(false);
  const handleShowmap = () => setShowmap(true)

  const addToCart = (id, name, price,avl_qty) => {
    if(!localStorage.getItem("user")){
      return swal({
        title: "Please LogIn to Add to Cart!",
        text: "",
        icon: "error",
        button: "Close",
      });
    }
    const qty = (cart[id] ? cart[id].qty : 0) + 1;
    if(qty>avl_qty){
      return swal({
        title: "Out of Stock!",
        text: "",
        icon: "error",
        button: "Close",
      });
    }
    if (qty>=6) {
      return swal({
        title: "You cannot buy more than 5 at a time",
        text: "",
        icon: "info",
        button: "Close",
      });
    }
    const newCart = { ...cart };

    newCart[id] = {
      name,
      qty,
      price,
    };
    setCart(newCart);
  };
  const removeFromCart = (id) => {
    if (!cart[id]) return;
    let { qty } = cart[id];

    qty--;
    if (qty < 0) qty = 0;
    const newCart = { ...cart };
    newCart[id].qty = qty;

    if (qty <= 0) {
      delete cart[id];
    }

    setCart(newCart);
  };

  useEffect(() => {
    (async function () {
      const { data: deals } = await axios.get(
        `http://localhost:3124/api/deal/merchant/${match.params.id}`
      );

      setDeals(deals);
      const { data: vendor } = await axios.get(
        `http://localhost:3124/api/merchant/view/${match.params.id}`
      );

      setVendor(vendor);
    })();
  }, []);
  // console.log("images -vendor", vendor.images);
  return (
    <>
      <div id="wrapper">
        <div className="container">
          <div className="menu"></div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12 col-lg-8">
              <VendorPageCarousel images={vendor.images} />
            </div>
            <div className="col-12 col-lg-4">
              <VendorPageDescription vendor={vendor} handleShowmap={handleShowmap} handleClosemap={handleClosemap} showmap={showmap}/>
            </div>
          </div>

          <div
            className="row"
            style={{ marginTop: "50px", marginBottom: "20px" }}
          >
            <div className="col-12 col-lg-8">
              {!deals.length && <h1>No deals available</h1>}
              {deals &&
                deals.map((deal) => (
                  <VendorPageDeal
                    qty={(cart[deal._id] && cart[deal._id].qty) || 0}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    key={deal._id}
                    deal={deal}
                    type={deal.category.name}
                  />
                ))}
            </div>
            <div style={{position:"relative"}} className="col-12 col-lg-4">
              <VendorPageOrders cart={cart} />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default VendorPage;
