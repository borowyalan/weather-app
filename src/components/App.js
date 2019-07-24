import React from 'react'
import logo from '../assets/logo.png'

import GeolocationDisplay from './GeolocationDisplay'
import { GeolocationProvider }  from './GeolocationProvider'
import SplitPaneResponsive from './SplitPaneResponsive'

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
                                <p style= {{padding: '1em'}}>Weather App made by Borowy Alan</p>
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

    background-color: gray;


    @media(min-width: 450px){

        min-height: 100vh;

    }
`

const FlexPane = styled.div`
    

    height: 35vh;
    background-color: blue;

    @media(min-width: 450px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
        height: 100%;

    }

`

const WeatherPane = styled(FlexPane)`
    justify-content: space-around;
    align-items: center;

    height: 63vh;
    margin-top: 2vh;

    background-color: green;
    
    @media(min-width: 450px){
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
    width: 40%;
    height: auto;
    max-height: 15em;
    max-width: 15em;
`
