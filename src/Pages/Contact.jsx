import React from "react";

const Contact = () => {
  return (
    <>
      <div class="container mt-6">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center mb-4">Contact Us</h2>
            <form>
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="email">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style={{margin:"20px"}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
