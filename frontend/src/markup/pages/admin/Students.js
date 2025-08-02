import React from "react";
import { useAuth } from "../../../Context/AuthContext";
import LoginForm from "../Login";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import UserLIst from "./UsersList/UsersList";

function Students() {
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side menubar">
                <AdminMenu />
              </div>
              <div className="col-md-9 admin-right-side menubarr">
                <UserLIst />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You are not authorized to acces this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Students;
