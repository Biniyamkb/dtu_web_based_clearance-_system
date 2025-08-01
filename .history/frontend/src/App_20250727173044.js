import React from "react";
import { Routes, Route } from "react-router";
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddUser from "./markup/pages/admin/AddUser";

function App() {
  return (
    <Routes>
     <Route path="/" element ={<Home}

    </Routes>
  );
}

export default App;
