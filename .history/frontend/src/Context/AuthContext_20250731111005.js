import React, { useState, useEffect, useContext } from "react";

import getAuth from "../util/auth";

const AuthContext=React.createContext();

//create a provider componenet 

export const AuthProvider=