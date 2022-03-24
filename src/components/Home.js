import { async } from '@firebase/util'
import React from 'react'
import { useEffect } from 'react'
import { useRef,useState } from 'react'
import { useUserAuth } from '../context/userAuthContex'
import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'

function Home() {

  const inputcity=useRef() 
  const [cityname,setCityName]=useState("karachi")
  const [data,setData]=useState()
  const weatherapi=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4c47ff6542dc4246382ca9fac101da42&units=metric`
  const [error,setError]=useState("")
  const {logout}=useUserAuth()
  const [icon,setIcon]=useState()


  const navigate=useNavigate()

  useEffect(()=>{
    async function getWeatherApiData (){
        try{
        const response=await fetch(weatherapi)
        const json=await response.json()
        setData (json)
        setIcon(json?.weather[0]?.icon)
        }catch(err){
          setError(err.message)
        }
    }
    getWeatherApiData ()
  },[weatherapi]) 

  function handleSubmit(e){
    e.preventDefault()
    setCityName(inputcity.current.value)
   
 }

 async function handleLogout(){
   try{
     await logout()
     navigate("/")
   }catch(err){
    console.log(err.message)
   }
 }


 console.log(data)
 console.log(data?.main?.temp)
 
 console.log(error,"error")
 //console.log(data?.weather[0]?.icon)
 console.log(icon)





  return (
    <div>
    {/* <div className='main'>
  <form onSubmit={handleSubmit}>
            <label>
                <span style={{fontSize:"20px"}}>Enter City Name</span>
                <input  placeholder='Enter Your City Name' type={"text"} ref={inputcity} ></input>
            </label>
           <center>  <button className='button' type='subimit'>Search City</button> </center>
        </form>
    </div>
     
     <div className='show'>
     <p style={{textAlign:"center"}}>City: <span style={{fontSize:"30px"}}> {data?.name}</span></p>  <p style={{textAlign:"center"}}>Counrty: <span style={{fontSize:"30px"}}> {data?.sys?.country}</span></p>
     <p style={{textAlign:"center"}}>Temp: <span style={{fontSize:"35px"}}> {data?.main?.temp} <span>&#176;</span> C </span></p>
     <p style={{textAlign:"center"}}>Feels Like:<span style={{fontSize:"35px"}}>  {data?.main?.feels_like}</span></p>
     <p></p>
     </div>
   
     <center>  <button className="log" onClick={handleLogout}>Logout</button></center> */}


      <div className={styles.main}>
           
       <div className='card'> 
       
              <div className={styles.inputbox}>
              <form onSubmit={handleSubmit}>
                <input className={styles.input1} placeholder='Enter City'  ref={inputcity} ></input>
                <center>  <button style={{ display: "none"}} className='button' type='subimit'>Search City</button> </center>
              </form>
              </div>

<div className={styles.sub}>

              <div>
               <center> <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}  width={200} alt="weather icon"></img></center>
              </div>
            <div style={{margin:"10px 0"}} >
              <h1>weather</h1>
              <h1>Temp:{data?.main?.temp} <span>&#176;</span> C</h1>
            </div>

            <div className={styles.subitems}>
              <div className={styles.asd}></div> 
            
              <div>wind
                <center><img src='images/wind.png' width={40}></img></center>
                {data?.wind?.speed}
              </div>

              <div>
                <p style={{margin:"0px 0px 3px 0px"}}>humidity</p>
               <center>  <img src="images/humidity.png" width={35}></img> </center>
                 <p style={{margin:"5px 0 0 12px"}}> {data?.main?.humidity} %</p>
              </div>
            </div>

            </div>

         </div>    
      </div>

     <center>  <button className="log" onClick={handleLogout}>Logout</button></center> */
    </div>
  
  )
}

export default Home