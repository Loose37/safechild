import React, { useState } from "react"


export function Parentspage () {
  const[currentView,SetCurrentview] = useState("routes_view")

  

  return(
    <div className="parents_page">
      <h1>This is the Parents Page</h1>

      <div className="Routes_view">
       <h1>This are your routes for today</h1>

        
      

      </div>
     

    </div>

  )
}
