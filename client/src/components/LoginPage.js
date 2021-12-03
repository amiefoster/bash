import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import logo from "../images/logo-1.png";
import Footer from "./Footer";


function LoginPage({ setUser = () => console.log("") }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="row justify-content-center header-container">
            <div className="col-sm-6 header-left">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="col-sm-6 header-right">Login to make planz!</div>
          </div>

          <div className="col-md-6">
            {showLogin ? (
              <>
                <LoginForm setUser={setUser} />

                <p className="login-box-switch text-center">
                  Don't have an account? &nbsp;
                  <button
                    className="new-detail-button "
                    onClick={() => setShowLogin(false)}
                  >
                    Signup
                  </button>
                </p>
              </>
            ) : (
              <>
                <SignupForm setUser={setUser} />

                <p className="login-box-switch text-center">
                  Already have an account? &nbsp;
                  <button
                    className="new-detail-button"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
