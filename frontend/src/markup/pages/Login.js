import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginService from "../../services/login.service";

function LoginForm(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setSerevereError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let valid = true;
    if (!email) {
      setEmailError("Please enter you email address first");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("invalid email format");
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        setEmailError("invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    if (!password || password.length < 6) {
      setPasswordError("password must be at leaset 6 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!valid) {
      return;
    }
    const formData = {
      email,
      password,
    };
    console.log(formData);

    const loginUser = loginService.logIn(formData);
    console.log(loginUser);
    console.log("login user for final login User from login contrller");
    loginUser
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          if (response.data.user_token) {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          window.location.replace("/");
        } else {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        setSerevereError("An error has occurred.please try again later.");
      });
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Login to your account</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="employee_email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                      />
                      {emailError && (
                        <div className="validation-error">{emailError}</div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="employee_password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                      />
                      {passwordError && (
                        <div className="validation-error">{passwordError}</div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
