import React, { Component } from 'react';
import { GeolocationConsumer } from './GeolocationProvider'

export default class Geolocation extends Component {

    render() {
       return (
           <GeolocationConsumer>
                {({latitude, longitude, city, country}) => (
                    <div>
                        {latitude}, {longitude}, {city}, {country}
                    </div>
                )}
           </GeolocationConsumer>
       )
    }
}
