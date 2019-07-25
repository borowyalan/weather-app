// import React, { useContext } from 'react'
// import GeolocationContext from './GeolocationProvider'
// import WeatherForecastCard from './CurrentWeatherCard';

// import styled from 'styled-components/macro';

// export default function WeatherContainer() {

//     const context = useContext(GeolocationContext)
//     console.log(context);
    

//     const getDayOfTheWeek = (unixEpochTime) => {
//         let day = new Date(unixEpochTime).getDay();
//         let formattedDay = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(day);

//         console.log(unixEpochTime);
//         console.log(new Date(unixEpochTime));
//         console.log(day)
//         console.log(formattedDay);
        
//         return formattedDay;
//     }
    
//         return (
//         <>
//             {/* {context.dailyForecast !== '' && context.dailyForecast.map((dayForecast, index) => 
//                <WeatherForecastCard
//                    weatherDescription = {dayForecast.weather[0].description}
//                    dayOfTheWeek = {getDayOfTheWeek(dayForecast.dt * 1000)}
//                    key={index}
//                />
//             ))} */}
//         </>
//     )
// }

// const Header = styled.div`
    
// `

