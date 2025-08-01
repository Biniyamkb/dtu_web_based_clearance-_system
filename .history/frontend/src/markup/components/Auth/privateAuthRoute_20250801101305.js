import React, { useState, useEffect, Children } from "react";
import { Navigate } from "react-router";

import getAuth from "../../../util/auth";

console.log(getAuth.user);
console.log("from private atth route getAuth function ");

const PrivateAuthRoute = ({ roles, childre }) => {
  console.log(roles,"roles")
  console.log()
  const [isChecked, setIsChecked] = useState("");
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

  if (isChecked) {
    if (!isLogged) {
      return <Navigate to="/login" />;
    }
    if (!isAuthotized) {
      return <Navigate to="/unauthorized" />;
    }
  }
  return Children;
};

export default PrivateAuthRoute;
