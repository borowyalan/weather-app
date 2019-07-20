import React from 'react'
import './Resizer.css'
import logo from '../assets/logo.png'

import SplitPane from 'react-split-pane'
import GeolocationDisplay from './GeolocationDisplay'
import WeatherForecast from './WeatherForecast'
import { GeolocationProvider }  from './GeolocationProvider'

import styled from 'styled-components/macro'

function App() {

    const mobile = true;
    return (
        <Container>
            <GeolocationProvider>

                <SplitPane
                    split={mobile ? 'horizontal' : 'vertical'}
                    minSize={mobile ? 300 : 350}
                    maxSize={mobile ? 450 : 700}
                >
                    <FlexPane>
                        <LogoContainer>
                            <Logo src={logo}/>
                            <p style= {{padding: '1em'}}>Weather App made by Borowy Alan</p>
                        </LogoContainer>
                        <GeolocationDisplay/>
                    </FlexPane>
                    
                    <WeatherPane>
                        <WeatherForecast/>
                    </WeatherPane>
                    
                </SplitPane>
            </GeolocationProvider>

        </Container>
        
    );
}

export default App;

const Container = styled.div`
    display: flex;
    align-items: center;

    min-height: 100vh;

    ${'' /* background-color: grey; */}
`

const FlexPane = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 100%;

    background-color: white;
`

const WeatherPane = styled(FlexPane)`
    justify-content: center;
    align-items: center;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2em;
`

const Logo = styled.img`
    width: 50%;
    height: auto;
    max-height: 15em;
    max-width: 15em;
`
