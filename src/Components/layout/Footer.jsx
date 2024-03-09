import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-dark text-white">
        <div class="container py-5  ">
          <div class="row">
            <div class="col-md-4">
              <h5>About Us</h5>
              <p>Our shop provide high utility quality of products.</p>
            </div>
            <div class="col-md-4">
              <h5>Contact Us</h5>
              <ul class="list-unstyled">
                <li>Phone: +977 9862931608</li>
                <li>Email: sthabibek2468@gmail.com</li>
                <li>Address: Lagankhel, Lalitpur</li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Follow Us</h5>
              <ul class="list-unstyled">
                <li>
                  <i class="bi bi-facebook">
                    <a href="#">Facebook</a>
                  </i>
                </li>
                <li>
                  <i class="bi bi-twitter">
                    <a href="#">Twitter</a>
                  </i>
                </li>
                <li>
                  <i class="bi bi-instagram">
                    {" "}
                    <a href="#">Instagram</a>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center py-3">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
