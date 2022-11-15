import React, { useState,useEffect } from 'react';
import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth"
import { async } from '@firebase/util';
import axios from 'axios';


export function Staffpage (props) {
  const {user,setUser} = props;
  const[allRoutes,setAllRoutes] = useState("")




  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  },[]);


  // async function getAllRoutes(){
  //   try{
  //     const fetchedRoutes = await axios.get("/routes")
  //     const routes =fetchedRoutes.data
  //     setAllRoutes(routes);
  //   }catch(error){
  //     console.log (error);
  //   }
  // };










  return(
    <div>
      <h1>This is the Staff Page</h1>

      <div className="routes_view">
       <h1>This are your routes for today</h1>

      </div>

      <div className='events_view'>
        <h1>children events</h1>

      </div>

    </div>

  )
}

