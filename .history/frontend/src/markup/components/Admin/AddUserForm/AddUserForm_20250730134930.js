import React, { useState } from "react";
import userService from "../../../../services/user.service";

function AddUser(props) {
  const [user_email, setEmail] = useState("");
  const [user_first_name, setFirstName] = useState("");
  const [user_Father_name, setfaherName] = useState("");
  const [user_phone_number, setPhoneNumber] = useState("");
  const [user_password, setPassword] = useState("");
  const [company_role_id, setCompany_role_id] = useState(1);
  //error
  const [emailError, setEmailError] = useState("");
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [fatherNameRequired, setfatherNameRequired] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user_email);

    let valid = true; //falg
    if (!user_first_name) {
      setFirstNameRequired("first name is required");
      valid = false;
    } else {
      setFirstNameRequired("");
    }

    if (!user_Father_name) {
      setfatherNameRequired("first name is required");
      valid = false;
    } else {
      setfatherNameRequired("");
    }

    //email is equired
    if (!user_email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!user_email.includes("@")) {
      setEmailError("invalid email format");
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(user_email)) {
        setEmailError("invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    if (!user_password || user_password.length < 6) {
      setPasswordError("password must be at leaset 6 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    }

    console.log(user_email);
    console.log(user_first_name);
    console.log("this is above form data");
      email= user_email,
      firt_name= user_first_name,
      father_name=user_Father_name,
      phone_number=user_phone_number,
      password=user_password,
      role: company_role_id,
    const formData = {
      email: user_email,
      firt_name: user_first_name,
      father_name: user_Father_name,
      phone_number: user_phone_number,
      password: user_password,
      role: company_role_id,
    };
    console.log(formData);
    console.log("this is formdata from addUserform");

    const newUser = userService.createUser(formData);
    console.log(newUser, "hi");
    console.log("htis is newUser data");
    newUser
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("this is inside newUser");
        if (data.error) {
          setServerError(data.error);
        } else {
          setSuccess(true);
          setServerError("");

          // //redirect to the employees page after 2 seconde
          // setTimeout(() => {
          //   // window.location.href="/admin/addUser";
          //   window.location = "/";
          // }, 2000);
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
                        value={user_email}
                        name="User_email"
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
                        name="User_first_name"
                        value={user_first_name}
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
                        value={user_Father_name}
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
                        value={user_phone_number}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="User phone 09123450.."
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <select
                        name="User_role"
                        value={company_role_id}
                        onChange={(event) =>
                          setCompany_role_id(event.target.value)
                        }
                        className="custom-select-box"
                      >
                        <option value="1">Student</option>
                        <option value="2">Liberary</option>
                        <option value="3">Student's Cafteria</option>
                        <option value="4">Dormitery </option>
                        <option value="5">Departmenet Head </option>
                        <option value="6">Studnet Service Directorate</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="User_password"
                        value={user_password}
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
