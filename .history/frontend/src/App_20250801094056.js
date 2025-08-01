import React from "react";
import { Routes, Route } from "react-router";
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddUser from "./markup/pages/admin/AddUser";
import Unauthorized from "./markup/pages/Unauthorized";
import Footer from "./markup/components/Footer/Footer";
import Header from "./markup/components/Header/Header";
import PrivateAuthRoute from "./markup/components/Auth/privateAuthRoute";
//admin pages
import Students from "./markup/pages/admin/Students";
import "./assets/templete_assets/css/bootstrap.css";
import "./assets/templete_assets/css/style.css";
import "./assets/templete_assets/css/responsive.css";
import "./assets/templete_assets/css/color.css";
// Import the custom css file
import "./assets/styles/custom.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/stdnets" element={<Students />} />
        <Route path="/admin/add-user" element={<AddUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
