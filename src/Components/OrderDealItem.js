import React, { Fragment } from "react";

const OrderDealItem = ({ item, id }) => {
  if (item.qty === 0) return null;
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <div className="p-2">
            <small className="text-muted">
              {item.name}
            </small>
          </div>
          <div className="p-2">
            <small className="text-muted">
              Rs . {item.price} x{item.qty}
            </small>
          </div>
          <div className="p-2">
            <small>
              <strong className="text-muted">Rs. {item.qty * item.price}</strong>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDealItem;
