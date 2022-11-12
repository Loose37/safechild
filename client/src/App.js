import { useState,useEffect } from 'react';
import axios from "axios"
import './App.css';



function App() {
  const [students,setStudents] = useState([])

  useEffect(()=>{
    getStudents();

  },[])

  async function getStudents (){
    const students = await axios.get("http://localhost:4000/testdb");
    console.log (students)
  }



  return (
    <div className="App">
      <h1>Login page</h1>
      
    </div>
  );
}

export default App;
