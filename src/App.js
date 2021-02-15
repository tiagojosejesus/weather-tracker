import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [inputDays, setInputDays] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [weatherData, setWeatherData] = useState([
    { data: null, loading: true },
  ]);
  return (
    <div>
      <Form
        inputCity={inputCity}
        setInputCity={setInputCity}
        inputDays={inputDays}
        setInputDays={setInputDays}
        inputValues={inputValues}
        setInputValues={setInputValues}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
      <Weather weatherData={weatherData} setWeatherData={setWeatherData} />
    </div>
  );
}

export default App;
