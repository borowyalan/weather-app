import React from 'react'
import './Resizer.css'
import SplitPane from 'react-split-pane'
import MediaQuery from 'react-responsive'


export default function SplitPaneResponsive(props) {
    return (
        <>
            <MediaQuery maxWidth={450}>
                {props.children}
            </MediaQuery>
            <MediaQuery minWidth={450}>
                <SplitPane 
                    split="vertical"
                    minSize={350}
                    maxSize={700}
                >{props.children}
                </SplitPane>
            </MediaQuery>
        </>
    );
}