import React from 'react';
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebaseConfig';

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
 
 
  const register =async()=>{
    try {
      const user =await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      console.log(user)
      alert(` ${user?user.user.email:null} Registerd successfuly ! please click on login btn`);
    } catch (error) {
      console.log(error.message);
    }
   

  }
  return (
    
    <div className='container '>
    <h1> Registration Form</h1>
    <input
            className="input"
            type="text"
            placeholder="username..."
          />
          
          <input
            className="input"
            type="email"
            placeholder="email..."
            onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          />
         
         <input
            className="input"
            type="number"
            placeholder="Contact No..."
          />
          <input
            className="input"
            type="password"
            placeholder="Set password..."
            onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          />

            <button className='button' onClick={register}> Create User</button>
   
    </div>       
    
  )
}

export default Register