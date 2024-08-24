import React from "react";

function Subtotal() {
  return (
    <div className="bg-light p-4">
      <p>SubTotal(0 item) : $0</p>
      <input type="checkbox" /> This order contains a gift
      <div>
        <button className="btn btn-warning rounded-0 w-100 mt-2">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
