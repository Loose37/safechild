import React, { useState,useEffect, useRef } from 'react';
import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth"
import { async } from '@firebase/util';
import axios from 'axios';


export function Staffpage (props) {
  const {user,setUser} = props;
  const[allRoutes,setAllRoutes] = useState([])
  const[selecteChild,setSelectedChild] = useState()
  const[selectedChildren,setSelectedChildren] = useState()
  const[selectedRoute,setSelectedRoute] = useState("route_1")

const current = new Date()
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  },[]);
  
  
  useEffect(() => {
    getAllRoutes()
  },[])

  useEffect(() => {
    getAllChildren()
  },[selectedRoute])


  async function getAllRoutes(){
    try{
      const fetchedRoutes = await axios.get("/routes")
      const routes = fetchedRoutes.data
      // console.log ("🍎",routes)
      setAllRoutes(routes);
    }catch(error){
      console.log (error);
    }
  };

  async function getAllChildren(){
    try{
      const fetchedChildren = await axios.post("/children", {route:selectedRoute})
      const children = fetchedChildren.data
      console.log (children)
      setSelectedChildren(children);
      console.log (children)
    }catch (error) {
      console.log (error)
    }
  }

  // getAllChildren()




  function selectRoute1 (){
    setSelectedRoute("route_1")
  };
  function selectRoute2 (){
    setSelectedRoute("route_2")
  };


  console.log ("🌍" ,selectedRoute)




  return(
    <div>
      <h1>This is the Staff Page</h1>
      <div className="routes_view">
       <h1>This are your routes for {date}</h1>
       {allRoutes.map(route => <p>{route.all_routes}</p>)}
       <button className='route_1_button' onClick={(e) =>{
         selectRoute1()
       }
        }>Show route 1 </button>  
       <button className='route_2_button' onClick={(e) => {
          selectRoute2()
       }}>Show route 2 </button>

      </div>

      <div className='events_view'>
        
        <h1>Route events</h1>
        <div className='children_gallery'>
          <h2>Children on this Route</h2>
          <div className='children_names_container'>
            <div className='children_name_list'>
              insert names list

            </div>
            <div className='children_images'>
              insert images list
            </div>
          </div>
        </div>

        <div className='actions_gallery'>
          insert selected child name + img + actions
        </div>




      </div>

    </div>

  )
}



