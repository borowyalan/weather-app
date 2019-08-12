import React, { useContext } from 'react'
import GeolocationContext from '../Geolocation/GeolocationProvider'

import styled from 'styled-components/macro'
import { device } from "../../util/breakpoints"

import FlexPane from '../FlexPane'
import WeatherItemsContainer from './WeatherItemsContainer';
import Header from './Header';

export default function Index() {

    const weather = useContext(GeolocationContext)

    return (
        <>
            <WeatherPaneContainer>
                <Header> Weather Forecast </Header>
                <WeatherItemsContainer 
                    currentWeather={weather.currentWeather}
                    forecastedWeather={weather.forecastedWeather}
                    />
            </WeatherPaneContainer>
        </>
    )
}

const WeatherPaneContainer = styled(FlexPane)`
    margin: 0 0.6em 0.7em 0.6em;

    @media ${device.laptop} {
        margin: 0;
        border-radius: 0 1em 1em 0;
        justify-content: space-evenly;
    }
`