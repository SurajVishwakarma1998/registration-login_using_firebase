import React, {  useState } from "react";
import Login from "./login";
import 'animate.css';
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebaseConfig";


function Home() { 
  // const username ="suraj";
  // const password = "suraj123";
  const [msg, setMsg] = useState("login");
  const [useremailState, setUseremailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

   const[signin,SetSignin]=useState(false);

   const login=async()=>{
    try {
      const user = await signInWithEmailAndPassword(
        auth,
       useremailState,
       passwordState
      );
      console.log(user.user);
      SetSignin(true);
    } catch (error) {
      console.log(error.message);
      SetSignin(false);
      setMsg("try again to login");
    }
  };
    // if(username ===userNameState && password===passwordState){
    //    SetSignin(true);
    // }else{
    //   SetSignin(false);
    //   setMsg("try again to login");
    // }
   
  return (
    <>
      {signin===false?   
      <div className="container">
         
          <h1>{msg}</h1>
          <input
            className="input"
            type="text"
            placeholder="Email..."
            onChange={(e)=>setUseremailState(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="password..."
            onChange={(e)=>setPasswordState(e.target.value)}
          />
          <button className="button" onClick={login}>
            submit
          </button>
        </div> 
        :  
          <div className="animate__animated animate__flipInY ">
             <Login/> 
          </div>

          }
    </>
     
       
    
  );
}

export default Home;