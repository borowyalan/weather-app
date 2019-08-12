import React from 'react'

import LogoContainer from './LogoContainer'
import Logo from './Logo'
import MadeBy from './MadeBy'
import GeolocationDisplay from '../Geolocation/GeolocationDisplay'

import FlexPane from '../FlexPane'
import logo from '../../../assets/logo.svg'

import styled from 'styled-components/macro'
import { device } from "../../util/breakpoints"


export default function Index() {
    return (
        <LogoPane>
            <LogoContainer>
                <Logo src={logo}/>
                    <MadeBy> 
                       Weather&nbsp;App
                    </MadeBy>
            </LogoContainer>
            <GeolocationDisplay/>
        </LogoPane>
    )
}

const LogoPane = styled(FlexPane)`
    margin: 0.7em 0.6em 0.6em 0.6em;

    @media ${device.laptop} {
        margin: 0;
        border-radius: 1em 0 0 1em;
    }
`