import React from "react";
import { useAuth } from "../../../Context/AuthContext";
import LoginForm from "../Login";
function Students() {
  const { isLogged, isAdmin } = useAuth();
  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <h1>list of student</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You are not authorized to acces this page</h1>
        </div>
      );
    }
  }
  else{
    return(
        <div>
        
        </div>
    )
  }
}

export default Students;
