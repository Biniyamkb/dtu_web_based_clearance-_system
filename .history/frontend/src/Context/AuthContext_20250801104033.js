import React, { useState, useEffect, useContext } from "react";

import getAuth from "../util/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

//create a provider componenet

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

  useEffect(() => {
    const loggedInUser = getAuth();

    loggedInUser.then((response) => {
      if (response.user_token) {
        setIsLogged(true);
        if (response.role != "1") {
          setIsAdmin(true);
        }
        setUser(response);
      }
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
