import React from "react";
import img1 from "../assets/Carousel/1.jpg";

const About_us = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-6 bg-light">
            <div className="p-5">
              <h2>About Our Online Store</h2>
              <p>
                Welcome to our online store! Our quality of products provides
                you with good satisfaction of your needs.
              </p>
              <p>
                "Discover the ultimate online shopping destination! With a vast
                array of products ranging from fashion and electronics to home
                essentials, we bring convenience right to your fingertips. Enjoy
                hassle-free browsing, secure transactions, and swift doorstep
                delivery. Elevate your shopping experience today!"
              </p>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div style={{ width: "80%" }}>
              <img
                src={img1}
                alt=""
                className="img-fluid rounded"
                style={{ height: "20%", width: "100%", margin: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_us;
