import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-7">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-4xl font-bold text-black-500">
              Online<span className="text-blue-500">Store</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <Link to="/home" className="font-bold text-black-30">
                Home
              </Link>
              <Link to="/products" className="font-bold text-black-300 ">
                Products
              </Link>
              <Link to="/services" className="font-bold text-black-300">
                Services
              </Link>

              <Link to="/contact" className="font-bold text-black-30">
                Contact
              </Link>
              <Link to="/about" className="font-bold text-black-30">
                About Us
              </Link>
            </div>
            <div className="ml-4 flex items-center">
              <input
                className="rounded-l-lg p-1 border-t border-b border-l text-gray-800 border-black-200 bg-green"
                placeholder="Search"
              />
              <button className="px-2 py-1 rounded-r-lg bg-blue-500 text-white font-bold uppercase border-t border-b border-r">
                <svg className="h-7 w-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25a1 1 0 101.41-1.41l-4.25-4.25v-.01zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="ml-4 flex items-center">
              <Link to="/login" className="font-bold text-black-30">
                <i className="fas fa-user"></i> Login
              </Link>
              <Link to="/register" className="ml-4 font-bold text-black-300 ">
                <i className="fas fa-user-plus"></i> Register
              </Link>
              <Link to="/cart" className="ml-4 font-bold text-black-300">
                <i className="bi bi-cart4"></i> Cart
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button className="text-gray-20 focus:outline-none"></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
