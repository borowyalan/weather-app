import styled from 'styled-components/macro'
import { device } from "../../util/breakpoints"

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

export default LogoContainer;