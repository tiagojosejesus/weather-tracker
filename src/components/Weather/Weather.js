import React from "react";
import "./Weather.scss";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="container">
      {weatherData.map((weather) => (
        <>
          {weather.loading || !weather.data ? (
            <></>
          ) : (
            <>
              <div>
                {weather.data.forecast.forecastday.map((days) => (
                  <div className="weather-container">
                    <img src={days.day.condition.icon} alt=""></img>
                    <div className="date">Date: {days.date}</div>
                    <div className="info">
                      Minimum Temperature: {days.day.mintemp_c} ºC
                    </div>
                    <div className="info">
                      Maximum Temperature: {days.day.maxtemp_c} ºC
                    </div>
                    <div className="info">
                      Chance of Rain: {days.day.daily_chance_of_rain} %
                    </div>
                    <div className="info">
                      Precipitation: {days.day.totalprecip_mm} mm
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {weather.data.forecast.forecastday.map((days) => (
                  <div className="weather-container">
                    <img src={days.day.condition.icon} alt=""></img>
                    <div className="date">Date: {days.date}</div>
                    <div className="info">
                      Minimum Temperature: {days.day.mintemp_c} ºC
                    </div>
                    <div className="info">
                      Maximum Temperature: {days.day.maxtemp_c} ºC
                    </div>
                    <div className="info">
                      Chance of Rain: {days.day.daily_chance_of_rain} %
                    </div>
                    <div className="info">
                      Precipitation: {days.day.totalprecip_mm} mm
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Weather;
