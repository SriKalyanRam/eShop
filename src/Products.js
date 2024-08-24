import React from "react";

function Products({ id, title, price, rating, image }) {
  return (
    <div className="d-flex flex-column ">
      <h2>{title}</h2>
      <strong>${price}</strong>
      <p>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span>⭐</span>
          ))}
      </p>
      <div className="d-flex flex-column align-items-center mt-2">
        <img
          src={`/Images/${image}`}
          className="w-50"
          style={{ height: "250px" }}
          alt="Pc"
        ></img>
        <button className="btn btn-warning w-auto mt-2 ">Add Product</button>
      </div>
    </div>
  );
}

export default Products;
