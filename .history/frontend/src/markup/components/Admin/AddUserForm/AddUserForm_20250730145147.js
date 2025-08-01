import React, { useState } from "react";
import userService from "../../../../services/user.service";

function AddUser(props) {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [father_name, setfaherName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState(1);
  //error
  const [emailError, setEmailError] = useState("");
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [fatherNameRequired, setfatherNameRequired] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    let valid = true; //falg
    if (!first_name) {
      setFirstNameRequired("first name is required");
      valid = false;
    } else {
      setFirstNameRequired("");
    }

    if (!father_name) {
      setfatherNameRequired("first name is required");
      valid = false;
    } else {
      setfatherNameRequired("");
    }

    //email is equired
    if (!email) {
      setEmailError("Email is required");
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
      first_name,
      father_name,
      phone_number,
      password,
      role,
    };

    const newUser = userService.createUser(formData);

    newUser
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setServerError(data.error);
        } else {
          setSuccess(true);
          setServerError("");

          //redirect to the employees page after 2 seconde
          setTimeout(() => {
            // window.location.href="/admin/addUser";
            window.location = "/";
          }, 2000);
        }
      })

      //Handle catch
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toSting();
        setServerError(resMessage);
      });
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new User</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError && (
                        <div className="validation-error">{serverError}</div>
                      )}
                      <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="User email"
                      />
                      {emailError && (
                        <div className="validation-error">{emailError}</div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="first_name"
                        value={first_name}
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder="User first name"
                      />
                      {firstNameRequired && (
                        <div className="validation-error">
                          {firstNameRequired}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="User_last_name"
                        value={father_name}
                        onChange={(event) => setfaherName(event.target.value)}
                        placeholder="Father name"
                        required
                      />
                      {fatherNameRequired && (
                        <div className="validation-error">
                          {fatherNameRequired}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="User_phone"
                        value={phone_number}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="User phone 09123450.."
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <select
                        name="User_role"
                        value={role}
                        onChange={(event) => setrole(event.target.value)}
                        className="custom-select-box"
                      >
                        <option value="student">Student</option>
                        <option value="liberary">Liberary</option>
                        <option value="studnet cafteria">
                          Student's Cafteria
                        </option>
                        <option value="dormitory">Dormitery </option>
                        <option value="depatmetn">Departmenet Head </option>
                        <option value="stu serivce">
                          Studnet Service Directorate
                        </option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="User password"
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
                        <span>Add User</span>
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

export default AddUser;
