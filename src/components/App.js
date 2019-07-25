import React from 'react'
import logo from '../assets/logo.png'

import GeolocationDisplay from './GeolocationDisplay'
import { GeolocationProvider }  from './GeolocationProvider'
import SplitPaneResponsive from './SplitPaneResponsive'

import { device } from "../util/breakpoints"
import styled from 'styled-components/macro'

function App() {

    return (
        <Container>
            <GeolocationProvider>
               <SplitPaneResponsive
                        style={{display: 'hidden'}}
                    >
                        <FlexPane>
                            <LogoContainer>
                                <Logo src={logo}/>
                                <MadeBy> 
                                    Weather App made by Borowy Alan
                                 </MadeBy>
                            </LogoContainer>
                            <GeolocationDisplay/>
                        </FlexPane>
                        
                        <WeatherPane>
                            <div>dsf</div>
                        </WeatherPane>

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

    min-height: 100vh;

    background-color: gray;

    @media ${device.tablet} {
    }
`

const FlexPane = styled.div`
    display: flex;
    flex-direction: column;

    background-color: yellow;

    @media ${device.laptop} {
        justify-content: space-around;

        width: 100%;
        height: 100%;
    }

    @media ${device.tablet} {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-around;
    }

`

const WeatherPane = styled(FlexPane)`
    justify-content: space-around;
    align-items: center;
    flex: 1;
    ${'' /* box-sizing: border-box; */}


    height: auto;
    width: 100%

    margin-top: 2vh;

    background-color: green;

    @media ${device.laptop} {
        margin-top: 0;
    }
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 2em;
`

const Logo = styled.img`
    width: 50%;
    height: auto;
    max-height: 10em;
    max-width: 10em;

    @media ${device.laptop} {
        max-height: 14em;
        max-width: 14em;
    }
`

const MadeBy = styled.p`

`