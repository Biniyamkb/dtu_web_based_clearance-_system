import React from "react";
import { useAuth } from "../../../Context/AuthContext";
import LoginForm from "../Login";
function Students() {
const {isLogged,isAdmin}=useAuth();
if(isLogged){
    if(isAdmin){
        return(

        )
    }
}

 
}

export default Students;
