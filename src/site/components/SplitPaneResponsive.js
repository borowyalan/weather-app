import React from 'react'
import './Resizer.css'
import SplitPane from 'react-split-pane'
import MediaQuery from 'react-responsive'

import { size } from '../util/breakpoints'

export default function SplitPaneResponsive(props) {
    return (
        <>
            <MediaQuery maxWidth={size.laptop}>
                {props.children}
            </MediaQuery>
            <MediaQuery minWidth={size.laptop}>
                <SplitPane 
                    split="vertical"
                    minSize={350}
                    maxSize={600}
                >{props.children}
                </SplitPane>
            </MediaQuery>
        </>
    );
}