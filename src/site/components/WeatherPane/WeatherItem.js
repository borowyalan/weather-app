import React from 'react'
import styled from 'styled-components/macro'
import { device } from "../../util/breakpoints"

export default function WeatherItem(props) {
    return (
        <Wrapper>
            <Temperature> {props.temperature}&#176; </Temperature>
            <Description> {props.description} </Description>
        </Wrapper>
    )
}

// const Wrapper = styled.div`

// `

const Temperature = styled.div`
    font-size: 3em;
`

const Description = styled.div`
    font-size: 2em;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 80%;
    border: solid 4px #d2e5f7;
    border-radius: 1.5em;

    ${'' /* padding: 2.5em; */}
    margin-bottom: 1.3em;

    @media ${device.laptop} {
        width: 80%
    }
`