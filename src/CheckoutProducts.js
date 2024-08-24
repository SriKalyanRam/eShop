import React from "react";

function CheckoutProducts() {
  return (
    <div className="d-flex mt-2">
      <div style={{ width: 160 }}>
        <img src="/Images/pc.jpg" className="w-100"></img>
      </div>

      <div className="ms-2">
        <h4>Title</h4>
        <span>$12</span>
        <p>⭐⭐⭐</p>
        <button className="btn btn-sm btn-warning rounded-0 ">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
