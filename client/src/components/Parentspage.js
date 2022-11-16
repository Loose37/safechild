import React, { useState,useEffect } from 'react';
import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth"
import {useNavigate} from "react-router-dom"


export function Parentspage (props) {
  const {user,setUser} = props;
  const [history,setHistory] = useState([])
  const current = new Date();  
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const navigate = useNavigate()

 useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
},[]);

  


  return(
    <div className="parents_page">
      <h1>Welcome {user.email}</h1>
      <h3>{date}</h3>
      <button onClick={(e)=>{
        navigate("/")
        }}>Back to Login Page</button>

      <div className='events_history'>

      </div>

      <button className='refresh_history'>Click here to refresh your child's history</button>
      
  

    </div>

  )
}
