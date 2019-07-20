import React from 'react'
import './Resizer.css'
import SplitPane from 'react-split-pane'
import MediaQuery from 'react-responsive'


export default function SplitPaneResponsive(props) {
    return (
        <>
            <MediaQuery maxWidth={600}>
                <SplitPane 
                    split="horizontal"
                    minSize={280}
                    maxSize={450}
                >{props.children}
                </SplitPane>
            </MediaQuery>
            <MediaQuery minWidth={600}>
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