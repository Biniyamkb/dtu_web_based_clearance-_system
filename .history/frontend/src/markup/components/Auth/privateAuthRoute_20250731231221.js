import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";

import getAuth from "../../../util/auth";

const PrivateAuthRoute = ({ roles, childre }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthotized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const loggedInUser = getAuth();
    loggedInUser.then((response) => {
      if (response.user_token) {
        setIsLogged(true);
        if(roles && roles.lengt>0 && roles.includes(response.))
      }
    });
  });
};
