import { useState,useEffect } from 'react';
import axios from "axios"
import './App.css';



function App() {
  const [students,setStudents] = useState([])

  useEffect(()=>{
    getStudents();

  },[])

  async function getStudents () {
    try{
      const students = await axios.get("/testdb");
      console.log (students)
    } catch (error){
      console.log (error)
    }
  }



  return (
    <div className="App">
      <h1>Login page</h1>
      
    </div>
  );
}

export default App;
