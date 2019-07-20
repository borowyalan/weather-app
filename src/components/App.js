import React from 'react'
import logo from '../assets/logo.png'

import GeolocationDisplay from './GeolocationDisplay'
import { GeolocationProvider }  from './GeolocationProvider'
import SplitPaneResponsive from './SplitPaneResponsive'

import styled from 'styled-components/macro'

function App() {

    const mobile = false;
    return (
        <Container>
            <GeolocationProvider>

                <SplitPaneResponsive
                    split={mobile ? 'horizontal' : 'vertical'}
                >
                    <FlexPane>
                        <LogoContainer>
                            <Logo src={logo}/>
                            <p style= {{padding: '1em'}}>Weather App made by Borowy Alan</p>
                        </LogoContainer>
                        <GeolocationDisplay/>
                    </FlexPane>
                    
                    <WeatherPane>
                    </WeatherPane>

                </SplitPaneResponsive>
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
    justify-content: space-around;
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
