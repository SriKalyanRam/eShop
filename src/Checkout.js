import React from "react";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="container-fluid">
      <div className="row mt-2 min-vh-100">
        <div className="col-9 ">
          <img src="/Images/amaads.jpg " className="w-100 h-25 mt-2"></img>
          <div className="mt-3">
            <h3>Check Out Page</h3>
            <CheckoutProducts />
            <CheckoutProducts />
          </div>
        </div>

        <div className="col-3 mt-3 ">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
