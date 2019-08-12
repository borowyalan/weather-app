import React from 'react'

import { GeolocationProvider }  from './Geolocation/GeolocationProvider'
import SplitPaneResponsive from './SplitPaneResponsive'
import LogoPane from './LogoPane'
import WeatherPane from './WeatherPane'

import { device } from "../util/breakpoints"
import styled from 'styled-components/macro'

function App() {

    return (
        <Container>
            <GeolocationProvider>
               <SplitPaneResponsive>

                        <LogoPane/>
                        <WeatherPane/>

                </SplitPaneResponsive>
            </GeolocationProvider>
        </Container>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;

    min-height: 100%;
    background-color: lightblue;

    overflow-y: hidden;

    @media ${device.laptop} {
        box-sizing: border-box;
    }
`

// const LogoPane = styled(FlexPane)`
//     margin: 0.7em 0.6em 0.6em 0.6em;

//     @media ${device.laptop} {
//         margin: 0;
//         border-radius: 1em 0 0 1em;
//     }
// `

// const WeatherPane = styled(FlexPane)`
//     justify-content: space-around;
//     align-items: center;
//     flex: 1;

//     background-color: white;

//     margin: 0 0.6em 0.7em 0.6em;
//     @media ${device.laptop} {
//         margin: 0;
//         border-radius: 0 1em 1em 0;
//     }
// `