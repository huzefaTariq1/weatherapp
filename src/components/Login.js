import React from 'react'
import {
    Link
  } from "react-router-dom";
  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import {useUserAuth} from '../context/userAuthContex'

import { async } from '@firebase/util';
  



function Login() {


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("");

  const {Login,googleSignIn}=useUserAuth();

  const navigate=useNavigate()


  async function handleSubmit(e){
      e.preventDefault()

    

     try{
         await Login(email,password)
         navigate("/home")
     }
     catch(error){
       setError(error.message)
     }
      
  }
   
  async function handleGoogleSignIn(e){
      e.preventDefault()
      try{
        await googleSignIn()
        navigate('./home')
      }
      catch(error){
          setError(error.message)
      }
  }





  return (
    <div className='main'>
      
       <center> <h1 className='h1'>Login </h1> </center>

       <div > 
{error && <p className='error'>{error}</p>}
</div>
    

<form onSubmit={handleSubmit}>
    <label>
        Email: 
        <input placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} type={"text"}></input>
    </label>
 <br></br>
    <div style={{marginTop:"30px"}}>    
    <label >
        password: 
        <input placeholder='Enter Pasword' value={password} onChange={(e)=>setPassword(e.target.value)} type={"text"}></input>
    </label>
    </div>

    
    <center><button className='button' type={"submit"}>Login</button></center> 
</form>

{/* <div className='a2'>
<center> <button className='button1' onClick={handleGoogleSignIn} >Login With Google</button></center>
</div> */}



 <center> <button onClick={handleGoogleSignIn} class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google
        </button>
        </center>
  



        <p className='dont'>dont have account <Link to="/signup">Signup</Link> </p>
      
    </div>
    
  )
}

export default Login