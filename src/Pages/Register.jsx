import React from "react";
import { Link } from "react-router-dom";
import '../Components/CSS/Register.css'

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card login-container">
              <div className="card-header text-center">
                <h3>Register</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group d-flex justify-content-between">
                    <div className="flex-grow-1 mr-2">
                      <label htmlFor="fn">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fn"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <label htmlFor="ln">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ln"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="form-group d-flex justify-content-between">
                    <div className="flex-grow-1 ">
                      <label htmlFor="gender">Gender</label>
                      <div className="form-check ">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="other"
                          name="gender"
                          value="other"
                        />
                        <label className="form-check-label" htmlFor="other">
                          Other
                        </label>
                      </div>
                    </div>
                    <div className="flex-grow-1 w-10">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        placeholder="Date of Birth"
                      />
                    </div>
                  </div>

                  <div className="form-group d-flex justify-content-between">
                    <div className="flex-grow-1 mr-2">
                      <label htmlFor="contact">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="contact"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <label htmlFor="address">Address</label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows="1"
                        placeholder="Address"
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-group d-flex justify-content-between">
                    <div className="flex-grow-1 mr-2">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <div className="form-group d-flex justify-content-between">
                    <div className="flex-grow-1 mr-2">
                      <div className="flex-grow-1">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      
                      <label htmlFor="cpassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        placeholder="Confirm Password"
                      />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </form>
              </div>
              <div
                className="card-footer text-center"
                style={{ margin: "20px" }}
              >
                Already have an account? <Link to="/Login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
