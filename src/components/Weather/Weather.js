import React from "react";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div>
      {weatherData.map((weather) => (
        <div>
          {weather.loading || !weather.data ? (
            <p>loading...</p>
          ) : (
            <div>
              {weather.data.forecast.forecastday.map((days) => (
                <div className="weather-container">
                  <img src={days.day.condition.icon} alt=""></img>
                  <p>Date: {days.date}</p>
                  <p>Minimum Temperature: {days.day.mintemp_c} ºC</p>
                  <p>Maximum Temperature: {days.day.maxtemp_c} ºC</p>
                  <p>Chance of Rain: {days.day.daily_chance_of_rain} %</p>
                  <p>Precipitation: {days.day.totalprecip_mm} mm</p>
                  <p></p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Weather;
