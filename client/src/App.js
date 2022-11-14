import { useState,useEffect } from 'react';
import axios from "axios"
import './App.css';
// import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
// import {auth}from "./firebase-config";
// import { async } from '@firebase/util';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Login} from './components/Login';
import { Parentspage } from './components/Parentspage';
import { Staffpage } from './components/Staffpage';


function App() {
  const [students,setStudents] = useState([]);
  // const [registerEmail,setRegisterEmail] = useState("");
  // const [registerPassword,setRegisterPassword] = useState("");
  // const [loginEmail,setLoginEmail] = useState("");
  // const [loginPassword,setLoginPassword] = useState("");
  const [user,setUser] = useState({})

//   useEffect(() => {
//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     });

//   }, [])



  useEffect(() => {
    getStudents();

  },[])

 

  async function getStudents () {
    try{
      const students = await axios.get("/testdb");
      console.log (students.data);
    } catch (error){
      console.log (error);
    }
  }

//   async function logout () {
//     try{
//       await signOut(auth);
//     } catch (error){
//       console.log (error);
//     }
//   };

//   async function register() { // creates account AND logs in automatically.
//     try{
//       const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//       console.log (user);
//     }catch (error){
//       console.log (error);
//     }
//   };

//   async function login() {
//     try{
//       await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//     }catch (error){
//       console.log (error);
//     }
//   };


  return (
    <div className="App">
      {/* <h1>Home Page</h1> */}
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login
        
          />} />
          <Route path="/parents" element={<Parentspage/>} />
          <Route path="/staff" element={<Staffpage/>} />

          
        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
