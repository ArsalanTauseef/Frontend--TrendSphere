import React, { useState } from "react";
import axios from "axios";
import "./AuthLogin.css";
import {
  setFullName,
  setEmail,
  setPassword,
  resetSignUpForm,
} from "../../../Utils/ReduxTools/ReduxNexus/Authentications/AuthSignUp";
import { useDispatch, useSelector } from "react-redux";

export const AuthLogin = () => {
  const [IsOverlayClicked, setIsOverlayClicked] = useState(false);
  const handleOverlayState = () => [setIsOverlayClicked((prev) => !prev)];

  const dispatch = useDispatch();

  const {
    fullName: { firstName, lastName },
    email,
    password,
    confirmPassword
  } = useSelector((state) => state.AuthSignUp);

  const executeSignUp = (e) => {
    e.preventDefault();
    dispatch(resetSignUpForm())

    console.log("My object", {
      "full name": { firstName, lastName },
      email: email,
      passkey: {
        password,
        confirmPassword,
      },
    });
  };

  return (
    <main className="targetAuthMain">
      <section className="styleAuthLogin">
        <div
          className={
            IsOverlayClicked
              ? "styleContainer overlay-active"
              : "styleContainer"
          }
        >
          <div className="form-container sign-up-container">
            <form>
              <div>Sign Up</div>
              <div>
                <input
                  type="text"
                  value={firstName}
                  onInput={(e) => {
                    e.target.parentElement.classList.toggle(
                      "has-value",
                      e.target.value !== ""
                    );
                  }}
                  onChange={(e) =>
                    dispatch(setFullName({ firstName: e.target.value }))
                  }
                />
                <label>First Name</label>
                <p>Input field is empty</p>
              </div>
              <div>
                <input
                  type="text"
                  value={lastName}
                  onInput={(e) =>
                    e.target.parentElement.classList.toggle(
                      "has-value",
                      e.target.value !== ""
                    )
                  }
                  onChange={(e) =>
                    dispatch(setFullName({ lastName: e.target.value }))
                  }
                />
                <label>Last Name</label>
                <p>Input field is empty</p>
              </div>
              <div>
                <input
                  type="text"
                  value={email}
                  onInput={(e) =>
                    e.target.parentElement.classList.toggle(
                      "has-value",
                      e.target.value !== ""
                    )
                  }
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
                <label>Email</label>
                <p>Input field is empty</p>
              </div>
              <div>
                <input
                  type="text"
                  value={password}
                  onInput={(e) =>
                    e.target.parentElement.classList.toggle(
                      "has-value",
                      e.target.value !== ""
                    )
                  }
                  onChange={(e) =>
                    dispatch(setPassword({ password: e.target.value }))
                  }
                />
                <label>Enter password</label>
                <p>Input field is empty</p>
              </div>
              <div>
                <input
                  type="text"
                  value={confirmPassword}
                  onInput={(e) =>
                    e.target.parentElement.classList.toggle(
                      "has-value",
                      e.target.value !== ""
                    )
                  }
                  onChange={(e) =>
                    dispatch(setPassword({ confirmPassword: e.target.value }))
                  }
                />
                <label>Confirm password</label>
                <p>Input field is empty</p>
              </div>
              <div>
                <button onClick={(e) => executeSignUp(e)}>Sign Up</button>
              </div>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <div>Sign In</div>
              <div>
                <input
                  type="text"
                  onInput={(e) =>
                    e.target.parentElement.classList.toggle(
                      "has-value",
                      e.target.value !== ""
                    )
                  }
                />
                <label>Email</label>
                <p>Input field is empty</p>
              </div>
              <div>
                <input
                  type="text"
                  onInput={(e) =>
                    e.target.parentElement.classList.toggle(
                      "has-value",
                      e.target.value !== ""
                    )
                  }
                />
                <label>Password</label>
                <p>Input field is empty</p>
              </div>
              <div>
                <button>Sign In</button>
              </div>
            </form>
          </div>
          {/* 
          //////////////
          //////////////
          
            SEPERATOR 

          //////////////
          //////////////
          */}
          <div className="overlay-container">
            <div className="shadow-overlay">
              <div className="overlay-panel overlay-left">
                <h1>Hello...</h1>
                <h3>Already signed up?</h3>
                <p>Click Login to get redirected to login session.</p>
                <div>
                  <button onClick={handleOverlayState}>Sign Up</button>
                </div>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello...</h1>
                <h3>Haven't signed up yet?</h3>
                <p>Head to sign up form by clicking the button below.</p>
                <div>
                  <button onClick={handleOverlayState}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
