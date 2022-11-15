import React, { useState,useEffect } from 'react';
import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth"
import { async } from '@firebase/util';
import axios from 'axios';


export function Staffpage (props) {
  const {user,setUser} = props;
  const[allRoutes,setAllRoutes] = useState([])
  const[selectedRoute,setSelectedRoute] = useState()




  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  },[]);
  
  
  useEffect(() => {
    getAllRoutes()

  },[])


  async function getAllRoutes(){
    try{
      const fetchedRoutes = await axios.get("/routes")
      const routes =fetchedRoutes.data
      // console.log ("🍎",routes)
      setAllRoutes(routes);
    }catch(error){
      console.log (error);
    }
  };


console.log (allRoutes,"🌍")







  return(
    <div>
      <h1>This is the Staff Page</h1>

      <div className="routes_view">
       <h1>This are your routes for today</h1>
       {allRoutes.map(route => <p>{route.all_routes}</p>)}
       <button className='route_1_button'>Show route 1 </button>
       <button className='route_1_button'>Show route 2 </button>

      </div>

      <div className='events_view'>
        
        <h1>Route events</h1>
        <div className='children_gallery'>
          <h2>Children on this Route</h2>
          <div className='children_names'>Names</div>
          <div className='children_images'>Images</div>
        </div>

        <div className='actions_gallery'>

        </div>




      </div>

    </div>

  )
}

