import React from "react";
import { Link } from "react-router";
function AdminMenu(props) {
  return (
    <div>
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group">
        <a href="/admin" className="list-group-item">
          Dashboard
        </a>
        <a href="/admin/user" className="list-group-item">
          users
        </a>
        <a href="/admin/report" className="list-group-item">
          New Report
        </a>
        <a href="/admin/add-user" className="list-group-item">
          Add User
        </a>
        <a href="/admin/stafs" className="list-group-item">
          Stafs
        </a>
        <a href="/admin/add-stundent" className="list-group-item">
          Add Studnets
        </a>
        <a href="/admin/requests" className="list-group-item">
          requests
        </a>
        <Link href="/studnets" className="list-group-item">
          students list
        </a>
      </div>
    </div>
  );
}

export default AdminMenu;
