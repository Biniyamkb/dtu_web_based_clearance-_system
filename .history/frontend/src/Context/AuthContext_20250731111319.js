import React, { useState, useEffect, useContext, Children } from "react";

import getAuth from "../util/auth";

const AuthContext = React.createContext();

//create a provider componenet

export const AuthProvider = ({ Children }) => {
  const [isLogged, setIslogged] = useState(false);
  const [isaddmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const value={isLogged,isAdmin}
};
