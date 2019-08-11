import React from 'react'
import './Resizer.css'
import SplitPane from 'react-split-pane'
import MediaQuery from 'react-responsive'

import { size, device } from '../util/breakpoints'
import styled from 'styled-components/macro'

export default function SplitPaneResponsive(props) {
    return (
        <>
            <MediaQuery maxWidth={size.laptop}>
                {props.children}
            </MediaQuery>
            
            <MediaQuery minWidth={size.laptop}>
                <SplitPaneWithResizer 
                    split="vertical"
                    minSize={350}
                    maxSize={600}
                >{props.children}
                </SplitPaneWithResizer>
            </MediaQuery>
        </>
    );
}

const SplitPaneWithResizer = styled(SplitPane)`
    .Resizer {
    background: #000;
    opacity: .2;
    z-index: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;

        &.vertical {
            width: 15px;
            margin: 0 -5px;
            border-left: 5px solid rgba(255, 255, 255, 0);
            border-right: 5px solid rgba(255, 255, 255, 0);
            cursor: col-resize;
        }

        &.vertical:hover {
            border-left: 5px solid rgba(0, 0, 0, 0.5);
            border-right: 5px solid rgba(0, 0, 0, 0.5);
        }

        &.disabled {
            cursor: not-allowed;
        }

        &.disabled:hover {
          border-color: transparent;
        }

        @media(max-width: 450px){
            .Resizer{
                display: none;
            }
        }
    }
    @media ${device.laptop} {
            padding: 2em;
            box-sizing: border-box;
    }
`