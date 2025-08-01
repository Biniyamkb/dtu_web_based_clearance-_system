import React, { useState, useEffect, useContext, Children } from "react";

import getAuth from "../util/auth";

const AuthContext = React.createContext();

//create a provider componenet

export const AuthProvider = ({ Children }) => {
  const [isLogged, setIslogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIslogged, user };


useEffect(()=>{

    const loggedInUser=getAuth();
    loggedInUser.then((response))
})


  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
};
