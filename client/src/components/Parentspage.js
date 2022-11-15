import React, { useState,useEffect } from 'react';
import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth"


export function Parentspage (props) {
 const {user,setUser} = props;


 useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  
  })
},[]);

  

  return(
    <div className="parents_page">
      <h1>This is the Parents Page</h1>

      
     

    </div>

  )
}
