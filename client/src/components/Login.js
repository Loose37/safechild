import React, { useState,useEffect } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../firebase-config";
import { async } from '@firebase/util';
import {db} from "../firebase-config"
import { Navigate, useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 
import axios from 'axios';






export function Login () {

  // const [registerEmail,setRegisterEmail] = useState("");
  // const [registerPassword,setRegisterPassword] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  const [user,setUser] = useState({})
  const [role,setRole] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        getCurrentUserRole()
    });

  }, [])

 


  async function getCurrentUserRole () {
    try{
      const userRoles = await axios.get("/roles")
      // console.log (userRoles.data)
      const fetchedUsers = userRoles.data
      // console.log (fetchedUsers)
      // fetchedUsers.map((x)=>console.log (x.email))
      fetchedUsers.map((fetchedUser)=>{
         if (fetchedUser.email === user.email){
          console.log (user.email)
          setRole(fetchedUser.role)
         }});
      
    }catch(error){
      console.log (error);
    }
  };

  console.log (role)


  async function logout () {
    try{
      await signOut(auth);
    } catch (error){
      console.log (error);
    }
  };

  // async function register() { // creates account AND logs in automatically.
  //   try{
  //     const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  //     console.log (user);
  //   }catch (error){
  //     console.log (error);
  //   }
  // };

  async function login() {
    try{
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    }catch (error){
      console.log (error);
    }
  };
  
  if (user){

    console.log (user.email)
  }


  return (
    <div>
      
      <h1>This is the Login page</h1>
        {/* <div>

          <h3> Register User</h3>
          <input placeholder='Email...' onChange={(e) => {setRegisterEmail(e.target.value)}}/>
          <input placeholder='Password...' onChange={(e) => {setRegisterPassword(e.target.value)}} />
          <div>
            <button onClick={register}> Create User</button>
          </div>
        </div> */}

        <div>
          <h3> Login</h3>
          <input placeholder='Email...'onChange={(e) => {setLoginEmail(e.target.value)}} ></input>
          <input placeholder='Password' onChange={(e) => {setLoginPassword(e.target.value)}}></input>
          <div>
            <button onClick={login}> Login </button>
          </div>
        </div>
        <div>
          <h4> User Logged in:</h4>
          {user ? user.email : `No user logged in yet  ` }
          <div>
            <button onClick={logout}> Sign Out</button>
          </div>
        </div>


    </div>
  )
}


