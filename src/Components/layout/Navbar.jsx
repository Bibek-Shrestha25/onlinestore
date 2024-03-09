import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg-slate">
        <a className="navbar-brand" href="#">
          <h1 className="display-4 mb-0 font-weight-bold">
            Online<span style={{ color: "blue" }}>Store</span>
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Home" className="nav-link font-weight-bold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold">Products</a>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link font-weight-bold">
                Services
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle font-weight-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/category/groceries" className="dropdown-item">
                  Groceries
                </Link>
                <Link to="/category/electronics" className="dropdown-item">
                  Electronics
                </Link>
                <Link to="/category/fashion" className="dropdown-item">
                  Fashion
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link font-weight-bold">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link font-weight-bold">
                About us
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/Login" className="nav-link font-weight-bold">
                <i className="fas fa-user"></i> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link font-weight-bold">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link font-weight-bold">
                <i className="bi bi-cart4"></i> Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      
         
        
      
    </>
  );
};

export default Navbar;
