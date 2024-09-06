import React, { useEffect, useState } from "react";
import Thermometer from "react-thermometer-component";
import { HUMIDITY_IMAGE, WIND_SPEED_IMAGE } from "../const";
const WeatherData = ({ data }) => {
  const [displayData, setDisplayData] = useState({});
  useEffect(() => {
    console.log(data);
    setDisplayData((prevData) => {
      return {
       
        humidity: data.main.humidity,
        //rain: data.rain["1h"],
        temp: convertKelvinToCelcius(data.main.temp),
        tempMax: convertKelvinToCelcius(data.main.temp_max),
        tempMin: convertKelvinToCelcius(data.main.temp_min),
        windSpeed: data.wind.speed,
      };
    });
  },[data]);
  if(!displayData){
    return(<></>)
  }

function convertKelvinToCelcius(kelvinTemp){
  const celsiusValue = kelvinTemp-273.15 ;
  return (celsiusValue.toFixed(2))
}

  return (
    <div className="showData">
      <div className="displayData">
        <div className="data">
          <img
            className="Image"
            src={HUMIDITY_IMAGE}
          />
          <h4>Humidity :</h4>
          {displayData.humidity}%
        </div>

        <div className="data">
          <Thermometer
            className="thermometer"
            theme="light"
            value={displayData.temp}
            max="100"
            steps="3"
            format="°C"
            size="large"
            height="300"
          />
          <div>
            <h4>Temperatue :</h4> {displayData.temp}°C
          </div>
        </div>
        <div className="data">
          <Thermometer
            className="thermometer"
            theme="light"
            value={displayData.tempMin}
            max="100"
            steps="3"
            format="°C"
            size="large"
            height="300"
          />
          <div>
            <h4>Minimum Temperatue :</h4> {displayData.tempMin}°C
          </div>
        </div>
        <div className="data">
          <Thermometer
            className="thermometer"
            theme="light"
            value={displayData.tempMax}
            max="100"
            steps="3"
            format="°C"
            size="large"
            height="300"
          />
          <div>
            <h4>Maximum Temperature :</h4> {displayData.tempMax}°C
          </div>
        </div>
        <div className="data">
          <img
            className="Image"
            src={WIND_SPEED_IMAGE}
          />
          <h4>Wind Speed:</h4>
          {displayData.windSpeed}m/s
        </div>
      </div>
    </div>
  );
};

export default WeatherData;


