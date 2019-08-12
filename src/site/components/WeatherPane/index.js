import styled from 'styled-components/macro'
import { device } from "../../util/breakpoints"

import FlexPane from '../FlexPane'


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

export default WeatherPane;