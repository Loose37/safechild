import { useState,useEffect } from 'react';
import axios from "axios"
import './App.css';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth}from "./firebase-config";
import { async } from '@firebase/util';


function App() {
  const [students,setStudents] = useState([]);
  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  const [user,setUser] = useState({})

  onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser)
  })

  useEffect(()=>{
    getStudents();

  },[])

  async function getStudents () {
    try{
      const students = await axios.get("/testdb");
      console.log (students.data)
    } catch (error){
      console.log (error)
    }
;  }

  async function logout () {
    try{
      await signOut(auth);
    } catch (error){
      console.log (error)
    }
  };

  async function register() { // creates account AND logs in automatically.
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log (user)
    }catch (error){
      console.log (error)
    }
  };


  return (
    <div className="App">
      <h1>Login page</h1>
      <div>

        <h3> Register User</h3>
        <input placeholder='Email...' onChange={(e) => {setRegisterEmail(e.target.value)}}/>
        <input placeholder='Password...' onChange={(e) => {setRegisterPassword(e.target.value)}} />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login</h3>
        <input placeholder='Email...'></input>
        <input placeholder='Password'></input>

        <button> Login </button>
      </div>
      <div>
        <h4> User Logged in:</h4>
        {user ? user.email : `No user logged in yet` }
        <button onClick={logout}> Sign Out</button>
      </div>


    </div>
  );
}

export default App;
