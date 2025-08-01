import React, { useState } from "react";

function AddUser(props) {
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
                <form>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="User_email"
                        placeholder="User email"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="User_first_name"
                        placeholder="User first name"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="User_last_name"
                        placeholder="Father name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="User_phone"
                        placeholder="User phone 09123450.."
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <select name="User_role" className="custom-select-box">
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
                        placeholder="User password"
                      />
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
