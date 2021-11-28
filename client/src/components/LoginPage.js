import React from "react";
import { useState } from "react";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import logo from '../images/logo.png'


function LoginPage({ setUser = () => console.log('') }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>

      <div className="container">
        <div className="row justify-content-center">
            
            <div class="row justify-content-center header-container">
              <div class="col-sm-6 header-left"><img src={logo} className="logo" /></div>
              <div class="col-sm-6 header-right">Nav Links go here</div>
            </div>

          <div className="col-md-6">

            {showLogin ? (
              <>
                <LoginForm setUser={setUser} />

                <p className="login-box-switch text-center">
                  Don't have an account? &nbsp;
                  <button className="login-button-switch signout-button" onClick={() => setShowLogin(false)}>
                    Sign Up
                  </button>
                </p>
              </>
            ) : (
              <>
                <SignupForm setUser={setUser} />

                <p className="login-box-switch text-center">
                  Already have an account? &nbsp;
                  <button className="login-button-switch signout-button" onClick={() => setShowLogin(true)}>
                    Log In
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )

}

export default LoginPage;