import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./css/style.css";
import WeatherData from "./WeatherData";
import { API_URL } from "../const";

const API_KEY = process.env.REACT_APP_API_KEY || "";

function CityForm() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const getWeatherReport = async () => {
    const url = `${API_URL}?q=${city}&appid=${API_KEY}`;
    let data = null;
    try {
      const response = await fetch(url);
      if (response.status == 200) {
        data = await response.json();
        setWeatherData(data);
      }else{
        alert("Failed to fetch data")
      }
    } catch (expception) {
    } finally {
      setCity("");
    }
  };

  return (
    <div className="card">
      <h1>Check Weather</h1>
      <Box sx={{ width: 500, maxWidth: "100%", padding: "30px" }}>
        <TextField
          fullWidth
          label="Enter City"
          id="fullWidth"
          className="inp_box"
          onChange={(e) => setCity(e.target.value)}
        />

        <div className="submit-button">
          <Button
            variant="contained"
            disableElevation
            onClick={getWeatherReport}
          >
            Get Weather Report
          </Button>
        </div>
        {weatherData && <WeatherData data={weatherData} />}
      </Box>
    </div>
  );
}

export default CityForm;
