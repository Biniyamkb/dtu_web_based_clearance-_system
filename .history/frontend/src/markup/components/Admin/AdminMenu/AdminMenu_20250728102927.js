import React from 'react';

function AdminMenu(props) {
  return (
    <div>
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group">
        <a href="/admin" className="list-group-item">Dashboard</a>
        <a href="/admin/user" className="list-group-item">Orders</a>
        <a href="/admin/report" className="list-group-item">New order</a>
        <a href="/admin/add-user" className="list-group-item">Add employee</a>
        <a href="/admin/stafs" className="list-group-item"></a>
        <a href="/admin/add-stundent" className="list-group-item">Add Studnets</a>
        <a href="/admin/requests" className="list-group-item">requests</a>
        <a href="/admin/services" className="list-group-item">Services</a>
      </div>
    </div>
  );
}

export default AdminMenu;