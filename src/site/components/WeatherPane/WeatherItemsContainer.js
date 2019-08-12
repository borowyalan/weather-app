import React from 'react'

import styled from 'styled-components/macro'
import { device } from "../../util/breakpoints"
import WeatherItem from './WeatherItem'

export default function WeatherItemsContainer(props) {

    console.log(props.currentWeather)
    console.log(props.forecastedWeather)

    // restrict view to (3) items

    if (props.forecastedWeather) {
         const weatherItems = props.forecastedWeather.list.filter((item, index) => index < 3);

        return (
            <Container>
               {weatherItems.map((item, index) => {
                  return <WeatherItem
                            key = {index}
                            temperature = {item.main.temp}>
                                {item.weather[0].description}
                        </WeatherItem>
               })}
           </Container>
        )
    } else {
        return 'Getting your weather...'
    }
    
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`

// const WeatherItem = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;

//     width: 80%;
//     border: solid 4px #d2e5f7;
//     border-radius: 1.5em;

//     padding: 2.5em;
//     margin-bottom: 1.3em;

//     @media ${device.laptop} {
//         width: 80%
//     }
// `
// `${props.currentWeather.main.temp}, ${props.currentWeather.weather[0].description}`
