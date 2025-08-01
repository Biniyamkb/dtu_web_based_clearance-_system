import React from "react";
// Import the AddUserForm component
import AddUserForm from "../../components/AddUserForm/AddUserForm";
// Import the AdminMenu component
import AdminMenu from "../../components/";

function AddUser(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <AddUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
