import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'
import dotenv from 'dotenv'



const DisplayWeather = () => {


    //  Interface for Weather Object Retrieved from API

    interface Weather {

        location:{
            name: string
            country: string
            localtime: string
        }

        current: {
            temp_f: string
            wind_mph: number
            precip_in: number
            cloud: number
            gust_mph: number

            condition: {
                text: string
                icon: string
            }
        }

    }

    // Axios call to Weather API, retrieving current data, auto generated 
    //for the user's location based on IP address 

    const [weather, setWeather] = useState<Weather>();


    //masking api key in typescript was more involved 
    //than I anticipated...but would use an env variable to insert it into the url, before pushing code to git hub. 


    useEffect(() => {
        axios
        .get(`http://api.weatherapi.com/v1/current.json?key=ccae3b333f694ca982d233810233103&q=auto:ip&aqi=no`)
        .then((response)=> {
            console.log(response.data);
            setWeather(response.data);
        })
            .catch((err) => {
            console.log(err.response)
        });
        }, [])


    return (

        <div className="weather-container">

            <div className="location">
                <h1> {weather?.location.name} </h1>
            </div>


            <div className="temp">

                <span>
                {weather?.current.temp_f} &deg;, {weather?.current.condition.text}
                </span>

                <span className="weather-icon"> <img src={weather?.current.condition.icon}/> </span>

            </div>

            <div className="weather-misc">
                Wind: {weather?.current.wind_mph} MPH - Cloud Cover: {weather?.current.cloud} %
            </div>

                


        </div>

    )
};


export default DisplayWeather;