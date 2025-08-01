// import React, { useState, useEffect, useContext } from "react";

// import getAuth from "../util/auth";

// const AuthContext = React.createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// //create a provider componenet

// export const AuthProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [user, setUser] = useState(null);

//   const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

//   useEffect(() => {
//     const loggedInUser = getAuth();

//     console.log(loggedInUser);
//     console.log("loggied user ");
//     loggedInUser.then((response) => {
//       console.log(response);
//       console.log("new");
//       if (response.user_token) {
//         setIsLogged(true);
//         if (response.role !== "student") {
//           setIsAdmin(true);
//         }
//         setUser(response);
//       }
//     });
//   }, []);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

import React, { useState, useEffect, useContext } from "react";
import getAuth from "../util/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Corrected 'Children' to 'children'
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

  useEffect(() => {
    const fetchUser = async () => {
      // Wrap getAuth in an async function
      const loggedInUser = await getAuth(); // Await the promise
      if (loggedInUser.user_token) {
        setIsLogged(true);
        setIsAdmin(loggedInUser.role !== "student"); // Simplified logic
        setUser(loggedInUser);
      }
    };
    fetchUser();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; // Corrected 'Children'
};
