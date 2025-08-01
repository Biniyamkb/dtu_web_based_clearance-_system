import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";

import getAuth from "../../../util/auth";



const PrivateAuthRoute = ({ roles, children }) => {
  console.log(roles, "roles");
  console.log(children, "childeren");
  const [isChecked, setIsChecked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthotized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const loggedInUser = getAuth();
    loggedInUser.then((response) => {
      console.log(response, "response from ");
      console.log("test test");
      if (response.user_token) {
        setIsLogged(true);
        if (roles && roles.length > 0 && roles.includes(response.role)) {
          setIsAuthorized(true);
        }
      }
      setIsChecked(true);
    });
  }, [roles]);
  console.log(isLogged);
  console.log(isAuthotized);

  if (isChecked) {
    if (!isLogged) {
      return <Navigate to="/login" />;
    }
    if (!isAuthotized) {
      return <Navigate to="/unauthorized" />;
    }
  }
  
};

export default PrivateAuthRoute;
