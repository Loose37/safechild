import React, { useState,useEffect, useRef } from 'react';
import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth"
import axios from 'axios';
import { Timestamp } from 'firebase/firestore';


export function Staffpage (props) {
  const {user,setUser} = props;
  const[allRoutes,setAllRoutes] = useState([])
  const[selectedChild,setSelectedChild] = useState("")
  const[selectedChildren,setSelectedChildren] = useState([])
  const[selectedRoute,setSelectedRoute] = useState("route_1")
  const[response,setResponse] =useState("")

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
      // console.log (children)
      setSelectedChildren(children);
      // console.log (selectedChildren)
    }catch (error) {
      console.log (error)
    }
  }


  function selectRoute1 (){
    setSelectedRoute("route_1")
  };
  function selectRoute2 (){
    setSelectedRoute("route_2")
  };

  

  async function childGotOnBus(){
    try {
      const childEvent = await axios.post("/events",{event:"got_on_bus",route:selectedRoute,time:current,ID:selectedChild.student_unique_ID},);  
      const res = childEvent.data
      // setResponse(res)
      console.log (res)
    } catch (error) {
      console.log (error)
    }
  }




  return(
    <div>
      <h1>Welcome {user.email} you are signed in as Staff</h1>
      <div className="routes_view">
       <h3>This are your routes for {date}</h3>
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
        
        {/* <h1>Route events</h1> */}
        <div className='children_gallery'>
          <h2>Children on Route {selectedRoute}</h2>
          <div className='children_names_container'>
            <div className='children_name_list'>
              {selectedChildren.map(child => 
                <div>              
                  <p>{`${child.first_name} ${child.last_name} ${child.image} `}</p>
                  <button className='select_child_button' onClick={(e)=>setSelectedChild(child)}>Select this child</button>
                </div>  
              )}
            </div>
            
          </div>
        </div>

        <div className='actions_gallery'>

          Selected Child:
          {<p>{`${selectedChild.first_name} ${selectedChild.last_name} ${selectedChild.image}`}</p>}
          <button onClick={(e)=>childGotOnBus()}>Child got on bus</button>
          <button>Child got off bus</button>
          <button>Child got to class</button>
          <button>Child got out of class</button>

        </div>




      </div>

    </div>

  )
}



