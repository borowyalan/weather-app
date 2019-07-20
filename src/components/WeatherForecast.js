import React, { useContext } from 'react'
import GeolocationContext from './GeolocationProvider'
import WeatherForecastItem from './WeatherForecastItem';

export default function WeatherContainer() {

    const context = useContext(GeolocationContext)
    console.log(context.dailyForecast[0]);

    return (
        <>
            3 Days Forecast
            {context.dailyForecast !== '' && context.dailyForecast.map((dayForecast, index) => (
               <WeatherForecastItem
                   weatherDescription = {dayForecast.weather[0].description}
                   key={index}
               />
            ))}
        </>
    )
}
