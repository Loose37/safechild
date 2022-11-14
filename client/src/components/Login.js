import React, { useState,useEffect } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth}from "../firebase-config";
import { async } from '@firebase/util';
import { Navigate } from 'react-router-dom';


export function Login () {

  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  const [user,setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

  }, [])


  async function logout () {
    try{
      await signOut(auth);
    } catch (error){
      console.log (error);
    }
  };

  async function register() { // creates account AND logs in automatically.
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log (user);
    }catch (error){
      console.log (error);
    }
  };

  async function login() {
    try{
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    }catch (error){
      console.log (error);
    }
  };


  return (
    <div>
      
      <h1>This is the Login page</h1>
        <div>

          <h3> Register User</h3>
          <input placeholder='Email...' onChange={(e) => {setRegisterEmail(e.target.value)}}/>
          <input placeholder='Password...' onChange={(e) => {setRegisterPassword(e.target.value)}} />

          <button onClick={register}> Create User</button>
        </div>

        <div>
          <h3> Login</h3>
          <input placeholder='Email...'onChange={(e) => {setLoginEmail(e.target.value)}} ></input>
          <input placeholder='Password' onChange={(e) => {setLoginPassword(e.target.value)}}></input>

          <button onClick={login}> Login </button>
        </div>
        <div>
          <h4> User Logged in:</h4>
          {user ? user.email : `No user logged in yet  ` }
          <button onClick={logout}> Sign Out</button>
        </div>


    </div>
  )
}


