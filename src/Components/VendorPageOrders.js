import React, { useState, useEffect } from "react";
import OrderDealItem from "./OrderDealItem";

const VendorPageOrders = ({ cart }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartKeys, setCartKeys] = useState([]);
  useEffect(() => {
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
            borderRadius: "10px",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <div className="card-body">
            <h5 className="card-title text-center">
              <strong>Your Order</strong>
            </h5>
            <div style={{ marginTop: "15px" }}>
              {cartKeys.map((key) => {
                return <OrderDealItem key={key} id={key} item={cart[key]} />;
              })}
            </div>
            <div className="dropdown-divider"></div>
            <p className="card-text" style={{ padding: "5px 5px 0px 5px" }}>
              Total Amount: Rs {totalAmount}
            </p>
            <button
              className="btn btn-primary"
              style={{
                margin: "5px 0px 5px 0px",
                borderRadius: "0px",
                borderColor: "purple",
                backgroundColor: "purple",
              }}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorPageOrders;
