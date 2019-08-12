import React, { Component } from 'react';
import { GeolocationConsumer } from './GeolocationProvider'

export default class GeolocationDisplay extends Component {

    render() {
       return (
           <GeolocationConsumer>
                {({latitude, longitude, city, country}) => (
                    <p style={{textAlign: 'center',}}>
                        {latitude}, {longitude}, {city}, {country}
                    </p>
                )}
           </GeolocationConsumer>
       )
    }
}
