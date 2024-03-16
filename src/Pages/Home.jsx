import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../assets/Carousel/1.jpg";
import img2 from "../assets/Carousel/2.jpg";
import img3 from "../assets/Carousel/3.jpg";

const Home = () => {
  return (
    <>
      <div className="container mt-50">
        <div className="row justify-content-center">
          <div className="col-md-5 mt-10">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              showArrows={true}
            >
              <div>
                <img src={img1} alt="First slide" />
                <p className="legend">First</p>
              </div>
              <div>
                <img src={img2} alt="Second slide" />
                <p className="legend">Second</p>
              </div>
              <div>
                <img src={img3} alt="Third slide" />
                <p className="legend">Third</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
