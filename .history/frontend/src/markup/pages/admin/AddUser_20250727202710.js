import React from "react";

function AddUser(props) {
  const departments = [
    { id: 1, name: "Computer Science and Engineering" },
    { id: 2, name: "Electronics and Communication Engineering" },
    { id: 3, name: "Mechanical Engineering" },
    { id: 4, name: "Civil Engineering" },
    { id: 5, name: "Electrical Engineering" },
    { id: 6, name: "Information Technology" },
    { id: 7, name: "Chemical Engineering" },
    // Add more departments as needed
  ];

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

                   <div className="form-group col-md-12">
      <select name="User_role" className="custom-select-box">
        <option value="1">Student</option>
        <option value="2">Library</option>
        <option value="3">Student's Cafeteria</option>
        <option value="4">Dormitory</option>
        <option value="5">Department Head</option>
        <option value="6">Student Service Directorate</option>
        <option value="7">Registrar</option>
        <option value="8">Select Department</option>
        {departments.map(department => (
          <option key={department.id} value={department.id}>
            {department.name}
          </option>
        ))}
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
