import styled from 'styled-components/macro'
import { device } from "../../util/breakpoints"

const Logo = styled.img`
    width: 50%;
    height: auto;
    max-height: 6em;
    max-width: 6em;
    padding: 1em;
    padding-bottom: 0.7em;

    @media ${device.laptop} {
        max-height: 14em;
        max-width: 14em;
    }
`

export default Logo;

