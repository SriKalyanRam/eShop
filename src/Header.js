import react from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";
import Checkout from "./Checkout";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none d-flex">
            <i className="bi bi-shop-window text-warning fs-4 me-2"> </i>
            <a className="navbar-brand ">eShop</a>
          </Link>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append bg-warning">
              <span className="input-group-text bg-warning" id="basic-addon2">
                <i className="bi bi-search"> </i>
              </span>
            </div>
          </div>
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                <small>Hello</small> <strong>Guest</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                <small>Your</small> <strong>Shop</strong>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout" aria-current="page">
                <i className="bi bi-basket" fs-4></i>
                <span>0</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
