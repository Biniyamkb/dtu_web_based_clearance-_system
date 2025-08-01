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
                        placeholder="User last name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="User_phone"
                        placeholder="User phone (555-555-5555)"
                        required
                      />
                    </div>

                    



  return (
    <div className="form-group col-md-12">
      <select name="User_role" className="custom-select-box" onChange={handleRoleChange} value={userRole}>
        <option value="">Select User Role</option>
        <option value="1">Student</option>
        <option value="2">Library</option>
        <option value="3">Student's Cafeteria</option>
        <option value="4">Dormitory</option>
        <option value="5">Department Head</option>
        <option value="6">Student Service Directorate</option>
        <option value="7">Registrar</option>
      </select>

      {/* Conditionally render department selection if Department Head is selected */}
      {userRole === '5' && (
        <div className="mt-3">
          <select
            name="Department"
            className="custom-select-box"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
          >
            <option value="">Select Department</option>
            <option value="1">Computer Science</option>
            <option value="2">Information Technology</option>
            <option value="3">Software Engineering</option>
            {/* Add more departments as needed */}
          </select>
        </div>
      )}
    </div>
  );
};

export default UserRoleSelect;

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
