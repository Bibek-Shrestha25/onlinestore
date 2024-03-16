import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  // const products = [
  //   { title: "Samsung", Price: "1000" },
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  // ];
  let [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch("https://dummyjson.com/product")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container mt-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-5 gap-4">
        {/* Left side for filters */}
        <div className="bg-slate-300 lg:col-span-1 col-span-4 p-5 min-h-screen rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2 underline">
              Deals
            </h2>
            <ul className="text-lg text-blue-700">
              <li>
                <Link to="#" className="hover:text-blue-900">
                  Daily Deals
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-900">
                  Most Popular
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-900">
                  Flash Sales
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-900">
                  New Year Offer
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Category</h2>
            <ul className="text-lg text-blue-700">
              <li>
                <input type="checkbox" className="me-1" id="cat1" />
                <label htmlFor="cat1">Mobiles</label>
              </li>
              <li>
                <input type="checkbox" className="me-1" id="cat2" />
                <label htmlFor="cat2">Laptops</label>
              </li>
              <li>
                <input type="checkbox" className="me-1" id="cat3" />
                <label htmlFor="cat3">Beauty Products</label>
              </li>
              <li>
                <input type="checkbox" className="me-1" id="cat4" />
                <label htmlFor="cat4">Fitness</label>
              </li>
              <li>
                <input type="checkbox" className="me-1" id="cat5" />
                <label htmlFor="cat5">Home</label>
              </li>
              <li>
                <input type="checkbox" className="me-1" id="cat6" />
                <label htmlFor="cat6">Garden</label>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">
              Price Range
            </h2>
            <ul className="text-lg text-blue-700">
              <li>
                <input type="radio" className="me-1" id="price1" name="price" />
                <label htmlFor="price1">Upto Rs.1000</label>
              </li>
              <li>
                <input type="radio" className="me-1" id="price2" name="price" />
                <label htmlFor="price2">Upto Rs.10000</label>
              </li>
              <li>
                <input type="radio" className="me-1" id="price3" name="price" />
                <label htmlFor="price3">Upto Rs.50000</label>
              </li>
              <li>
                <input type="radio" className="me-1" id="price4" name="price" />
                <label htmlFor="price4">Upto Rs.100000</label>
              </li>
              <li>
                <input type="radio" className="me-1" id="price5" name="price" />
                <label htmlFor="price5">Above Rs.100000</label>
              </li>
            </ul>
          </div>
        </div>
        {/* Right side for products */}
        <div className="bg-slate-200 lg:col-span-3 col-span-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {products.length > 0 &&
            products.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card border border-gray-700 rounded-lg shadow-md"
                >
                  <img
                    src={item.images[0]}
                    alt=""
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-3">
                    <h2 className="text-xl font-semibold mb-2">
                      Title: {item.title}
                    </h2>
                    <h3 className="text-lg text-blue-700 mb-2">
                      Price: ${item.price}
                    </h3>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
