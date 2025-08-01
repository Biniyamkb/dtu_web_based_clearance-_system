import React, { useState, useEffect, useContext, Children } from "react";

import getAuth from "../util/auth";

const AuthContext = React.createContext();

export const useAuth=()=>{
    
}

//create a provider componenet

export const AuthProvider = ({ Children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

  useEffect(() => {
    const loggedInUser = getAuth();
    loggedInUser.then((response) => {
      if (response.user_token) {
        setIsLogged(true);
        if (response.role != "student") {
          setIsAdmin(true);
        }
        setUser(response);
      }
    });
  });

  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
};
