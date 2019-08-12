import styled from 'styled-components/macro'
import { device } from "../util/breakpoints"

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

export default FlexPane;