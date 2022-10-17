import React, { useState } from "react";
import {signOut} from "firebase/auth";
import { auth } from "./firebaseConfig";

function Login(props) {
 const[gotoHome,setGotohome]=useState(true)
 const logout = async () => {
    await signOut(auth);
    setGotohome(false)
  };

  return (
    <>
        {gotoHome?
          <div className="container">
              <h1>Thank you for loging</h1>
              <h1>Welcome to home page now you can use premimum facility from us. </h1>
              <button className="button" onClick={logout}> Logout</button>
            </div>
        : null}
   </>
// onClick={()=>setGotohome(false)}
    
  );
}

export default Login;
