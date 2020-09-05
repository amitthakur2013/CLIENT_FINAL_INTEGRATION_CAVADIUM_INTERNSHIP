import React, { Fragment } from "react";

const OrderDealItem = ({ item, id }) => {
  if (item.qty === 0) return null;
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <div className="p-2">
            <h6 className="text-muted">
              <strong>{item.name}</strong>
            </h6>
          </div>
          <div className="p-2">
            <h6 className="text-muted">
              Rs . {item.price} x{item.qty}
            </h6>
          </div>
          <div className="p-2">
            <h6>
              <strong>Rs .{item.qty * item.price}</strong>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDealItem;
