import { async } from '@firebase/util'
import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useUserAuth} from '../context/userAuthContex'

function Signup() {
  
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("");

    const {signUp}=useUserAuth();

    const navigate=useNavigate()


    async function handleSubmit(e){
        e.preventDefault()

      

       try{
           await signUp(email,password)
           navigate("/")
       }
       catch(error){
         setError(error.message)
       }
        
    }
     
//   const{ signUp}=useUserAuth()
     
//  async function test(){
//     try{
//         await signUp("khuzefa@gmail.com","123hsags12")
//     }
//     catch(error){
//         console.log(error.message)
//     }
//  }

//  test()
  return (
  //   <div>
  //      <center> <h1>Signup </h1>

  //       <form onSubmit={handleSubmit}>
  //           <label>
  //               Email: 
  //               <input value={email} onChange={(e)=>setEmail(e.target.value)} type={"text"}></input>
  //           </label>
  //        <br></br>
  //           <label>
  //               password: 
  //               <input value={password} onChange={(e)=>setPassword(e.target.value)} type={"text"}></input>
  //           </label>
            
  //           <button type={"submit"}>Submit</button>
  //       </form>

        
  //     {error && <p>{error}</p>}
  //       already have an account <Link to="/">Login</Link>
  //       </center>
  //   </div>
  // )



  <div className='main'>
      
  <center> <h1 className='h1'>Signup </h1> </center>

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


<center><button className='button' type={"submit"}>SignUp</button></center> 
</form>






   <p className='dont'>  already have an account <Link to="/">Login</Link> </p>
 
</div>

)

}

export default Signup