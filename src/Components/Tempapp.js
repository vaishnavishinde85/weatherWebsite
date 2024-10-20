import React, { useState,useEffect } from "react";
import "./CSS/style.css";

const Tempapp=()=>{
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState(" ");

     useEffect ( ()=>{
        const fetchApi= async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4b23c6ad4ad5a8753335f8f8258c4d57`;
        const res = await fetch(url);
        const resJson = await res.json();
        setCity(resJson.main);
        };
        fetchApi();

    },[search])
   return( <>
        <div className="box">
        <div className="inputData">
            <input type="search" value={search} className="inputFeild" onChange={(event)=>{
                setSearch(event.target.value);
            }}/>
        </div>
        {
            !city?(<p className="errorMsg">No Data found</p>):
            (<div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">{city.temp}°Cel</h1>
            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
            )}
        </div>
       
    </>
   );
}

export default Tempapp;
