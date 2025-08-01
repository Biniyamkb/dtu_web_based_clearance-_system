import React from "react";
import { Routes, Route } from "react-router";
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddUser from "./markup/pages/admin/AddUser";

import "./assets/templete_assets/css/bootstrap.css";
import "./assets/templete_assets/css/style.css";
import "./assets/templete_assets/css/responsive.css";
import "./assets/templete_assets/css/color.css";
// Import the custom css file
import "./assets/styles/custom.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/add-user" element={<AddUser />} />
    </Routes>
  );
}

export default App;
