import React from 'react'
import '../App.css'
import Geolocation from './Geolocation'
import { GeolocationProvider }  from './GeolocationProvider'
import Logo from './Logo'
import styled from 'styled-components/macro'

function App() {

    return (
        <Container>
            <GeolocationProvider>

                <FlexColumnLeft>
                    <Logo/>
                    <Geolocation/>
                </FlexColumnLeft>
                
                <FlexColumnRight>
                    <div>sadf</div>
                </FlexColumnRight>

            </GeolocationProvider>
        </Container>
    );
}

export default App;


const Container = styled.div`
    display: flex;
    ${'' /* align-items: center; */}

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
    width: 40%;
    margin-right: 1%;
`

const FlexColumnRight = styled(FlexColumn)`
    margin-left: 1%;
`
