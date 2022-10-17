import React, { useState } from "react";
import 'animate.css';
import Home from "./componets/home";
// import Backhome from "./componets/backhome";
// import Login from "./componets/login";
import "./App.css";
import Register from "./componets/regsiter";

function App() {
  const [page,setPage]= useState(false)
  return (
    <div className="App">
         
         
           {page===false?
            <div className="reg">
                           <div>
                              <h1>Already have Account</h1>
                           </div>
                              <div>
                                  <button  className="button" onClick={()=>setPage(!page)}>Login</button>
                              </div>
                              <Register />
              </div>             
                          
            :
            <div className="reg">
                        <div>
                          <h1>Welcome to homepage</h1>
                        </div>
                        <div className="animate__animated animate__flipInY ">
                        <Home />
                        </div>
            </div>
            }
    </div>
  );
}

export default App;
