import React from "react";
import Products from "./Products";
import Footer from "./Footer";

function MyComponent(props) {
  return (
    <div>
      <div className="w-100 ">
        <img
          src="/Images/ecommerce.jpg"
          className="w-100 "
          style={{ height: "400px" }}
        ></img>
      </div>

      <div className="products bg-light p-3">
        <div className="p-3 d-flex ">
          <div className="w-50 p-2 bg-white m-2 col">
            <Products
              id={1223}
              title={"This is seven Generation Computer (PC)"}
              image="pc.jpg"
              rating={4}
              price={240}
            />
          </div>
          <div className="w-50 p-2 bg-white m-2 col">
            <Products
              id={1223}
              title={"This is a chair"}
              image="chair.jpg"
              rating={3}
              price={120}
            />
          </div>
        </div>

        <div className="p-3 d-flex ">
          <div className="w-50 p-2 bg-white m-2 col">
            <Products
              id={1223}
              title={"This is a Tab"}
              image="tablet.jpg"
              rating={2}
              price={40}
            />
          </div>
          <div className="w-50 p-2 bg-white m-2 col">
            <Products
              id={1223}
              title={"This is Digital Watch"}
              image="watch.jpg"
              rating={4}
              price={210}
            />
          </div>

          <div className="w-50 p-2 bg-white m-2 col">
            <Products
              id={1223}
              title={"This is analog watch"}
              image="analog.jpg"
              rating={5}
              price={70}
            />
          </div>
        </div>

        <div className="p-3  ">
          <div className=" p-2 bg-white m-2 d-flex  justify-content-center  ">
            <Products
              id={1223}
              title={"This is a jacket"}
              image="jacket.jpg"
              rating={4}
              price={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
