import React, { useState } from "react";

function AddUser(props) {
  const [user_email, setEmail] = useState("");
  const [User_first_name, setFirstName] = useState("");
  const [user_Father_name, setfaherName] = useState("");
  const [user_phone_number, setPhoneNumber] = useState("");
  const [user_password, setPassword] = useState("");
  const [company_role_id, setCompany_role_id] = useState(1);
  //error
  const [emailError, setEmailError] = useState("");
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true; //falg
    if (!User_first_name) {
      setFirstNameRequired("first name is required");
      valid = false;
    } else {
      setFirstNameRequired("");
    }
    //email is equired
    if (!employee_email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!employee_email.includes("@")) {
      setEmailError("invalid email format");
    } else {
      const regex = /^\S+@\S+\.S+$/;
      if (!regex.test(user_email)) {
        setEmailError("invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
  if(!user_password ||user_password.length<6){
    setPasswordError("password must be at leaset 6 characters")
  }

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
                        value={User_first_name}
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder="User first name"
                      />
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
