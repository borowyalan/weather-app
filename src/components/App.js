import React from 'react'
import '../App.css'
import logo from '../assets/logo.png'

import SplitPane from 'react-split-pane'
import Geolocation from './Geolocation'
import WeatherContainer from './WeatherContainer'
import { GeolocationProvider }  from './GeolocationProvider'

import styled from 'styled-components/macro'

function App() {

    return (
        <Container>
            <GeolocationProvider>

                <SplitPane
                    split='vertical'
                    minSize={350}
                    maxSize={1000}
                >
                    <FlexColumnLeft>
                        <img src={logo} className="App-logo" alt="App-logo"/>
                        <Geolocation/>
                    </FlexColumnLeft>
                    
                    <FlexColumnRight>
                        <WeatherContainer/>
                    </FlexColumnRight>
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

    background-color: grey;
`

const FlexColumn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    background-color: white;
`
const FlexColumnLeft = styled(FlexColumn)`
    ${'' /* width: 40%;
    margin-right: 1%; */}
`

const FlexColumnRight = styled(FlexColumn)`
    ${'' /* margin-left: 1%; */}
`
