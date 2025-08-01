import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";

import getAuth from "../../../util/auth";

const PrivateAuthRoute = ({ roles, childre }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthotized, setIsAuthorized] = useState(false);
};
