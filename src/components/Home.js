
import React from 'react'
import { useEffect } from 'react'
import { useRef,useState } from 'react'


function Home() {

  const inputcity=useRef() 
  const [cityname,setCityName]=useState("karachi")
  const [data,setData]=useState()
  const weatherapi=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4c47ff6542dc4246382ca9fac101da42&units=metric`

  
  useEffect(()=>{
    async function getWeatherApiData (){
        try{
        const response=await fetch(weatherapi)
        const json=await response.json()
        setData (json)
        }catch(err){
          console.log('could not fetch')
        }
    }
    getWeatherApiData ()
  },[weatherapi]) 

  function handleSubmit(e){
    e.preventDefault()
    setCityName(inputcity.current.value)
   
 }




 

 var objToday = new Date(),
 weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
 dayOfWeek = weekday[objToday.getDay()],
 domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
 dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
 months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
 curMonth = months[objToday.getMonth()],
 curYear = objToday.getFullYear(),
 curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
 curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
 curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + ""+ curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " " + curMonth + ", " + curYear;




let imageURL ="";

if (data && data.cod==200){
  if (data && data?.weather[0]?.description
    ===  "scattered clouds")
   imageURL = "images/clouds.png";
   else if (data && data?.weather[0]?.description === "clear sky") {
     imageURL = "images/clear.png";
   }
   else if (data && data?.weather[0]?.description === "few clouds") {
     imageURL = "images/clouds.png";
   }
   else if (data && data?.weather[0]?.description === "broken clouds") {
     imageURL = "images/clouds.png";
   }
   else if (data && data?.weather[0]?.description === "shower rain") {
     imageURL = "images/rain.png";
   }
   else if (data &&data?.weather[0]?.description === "rain") {
     imageURL = "images/rain.png";
   }
   else if (data &&data?.weather[0]?.description === "thunderstorm") {
     imageURL = "images/storm.png";
   }
   else if (data &&data?.weather[0]?.description === "snow") {
     imageURL = "images/snowflake.png";
   }
   else if (data &&data?.weather[0]?.description === "mist") {
     imageURL = "images/windy.png";
   }
   else if (data &&data?.weather[0]?.description === "smoke") {
     imageURL = "images/smoke.png";
   }
   else{
     imageURL = "images/general.png";
   }
   
}
 
   







  return (
<div>
<div className="min-h-screen flex items-center justify-center">
<div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
  <form onSubmit={handleSubmit}>
  <div className="group">
  <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
  <input placeholder="Search" type="search" className="input" ref={inputcity}/>
</div>
  </form>

						<div className="font-bold text-xl"> {data && data.cod===200?data?.name:"city not found"}</div>       
						<div className="text-sm text-gray-500">{today}</div>
						{/* <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
<svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
						</div> */}
            <div className="mt-6 text-6xl self-center inline-flex items-center justify-center">
              <img src={imageURL} width={100} alt="icon"/>
            </div>
						<div className="flex flex-row items-center justify-center mt-6">
							<div className="font-medium text-4xl md:text-6xl">{data &&data.cod===200? data?.main?.temp.toFixed(1):""}°C</div>
							<div className="flex flex-col items-center ml-6">
								<div>{data &&data.cod===200?data?.weather[0]?.description:""}</div>
								<div className="mt-1">
									<span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
									<span className="text-sm font-light text-gray-500">MIN{data &&data.cod===200?data?.main?.temp_min:""}°C</span>
								</div>
								<div>
									<span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
									<span className="text-sm font-light text-gray-500">MAX{data &&data.cod===200?data?.main?.temp_max:""}°C</span>
								</div>
							</div>
						</div>
						<div className="flex flex-row flex-wrap justify-between mt-6">
            <div className="flex flex-col items-center">
								<div className="font-medium text-sm">Feels Like</div>
                <img src="images/hot.png" width={35}></img>
								<div className="text-sm text-gray-500">{data &&data.cod===200?data?.main?.feels_like:""}°C</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
                <img src='images/wind.png' width={35} alt="wind icon"></img>
								<div className="text-sm text-gray-500"> {data &&data.cod===200?data?.wind?.speed:""}k/h</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Humidity</div>
                <img src="images/humidity.png" width={35}></img>
								<div className="text-sm text-gray-500">{data &&data.cod===200?data?.main?.humidity:""}%</div>
							</div>
						</div>
					</div>
</div>
</div>
  )
}

export default Home