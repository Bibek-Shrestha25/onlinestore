import React from "react";

const Login = () => {
  return <>
  <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card login-container">
              <div class="card-header text-center">
                <h3>Login</h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              </div>
              <div class="card-footer text-center">
                Don't have an account? <a href="">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>;
};

export default Login;
