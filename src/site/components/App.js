import React from 'react'
import logo from '../../assets/logo.svg'

import GeolocationDisplay from './GeolocationDisplay'
import { GeolocationProvider }  from './GeolocationProvider'
import SplitPaneResponsive from './SplitPaneResponsive'

import { device } from "../util/breakpoints"
import styled from 'styled-components/macro'

function App() {

    return (
        <Container>
            <GeolocationProvider>
               <SplitPaneResponsive>
                        <LogoPane>
                            <LogoContainer>
                                <Logo src={logo}/>
                                <MadeBy> 
                                    Weather&nbsp;App
                                 </MadeBy>
                            </LogoContainer>
                            <GeolocationDisplay/>
                        </LogoPane>
                        
                        <WeatherPane>
                            {/* <WeatherContainer>

                            </WeatherContainer> */}
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

    min-height: 100%;
    background-color: lightblue;

    @media ${device.laptop} {
        box-sizing: border-box;
    }
`

const FlexPane = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: solid 1px white;
    border-radius: 1em;
    background-color: white;
    box-shadow: 14px 14px 14px -10px rgba(0,0,0,0.15);

    box-sizing: border-box;

    @media ${device.laptop} {
        justify-content: space-around;
        height: 100%;
    }
`

const LogoPane = styled(FlexPane)`
    margin: 0.7em 0.6em 0.6em 0.6em;

    @media ${device.laptop} {
        margin: 0;
        border-radius: 1em 0 0 1em;
    }
`

const WeatherPane = styled(FlexPane)`
    justify-content: space-around;
    align-items: center;
    flex: 1;

    background-color: white;

    margin: 0 0.6em 0.7em 0.6em;
    @media ${device.laptop} {
        margin: 0;
        border-radius: 0 1em 1em 0;
    }
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    width: 90%;

    border-radius: 0.7em;

    @media ${device.laptop} {
        flex-direction: column;
    }
`

const Logo = styled.img`
    width: 50%;
    height: auto;
    max-height: 6em;
    max-width: 6em;
    padding: 1em;
    padding-bottom: 0.7em;

    @media ${device.laptop} {
        max-height: 14em;
        max-width: 14em;
    }
`

const MadeBy = styled.p`
    font-size: 1.8em;
    padding-right: 1em;
`