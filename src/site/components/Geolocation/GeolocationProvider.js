import React, { Component, createContext } from 'react';
import axios from 'axios';
import { reverseGeocode } from '../../util/reverseGeocode';

const GeolocationContext = createContext({
    latitude: '',
    longitude: '',
    city: 'Unknown',
    country: '',
    forecastedWeather: [],
    currentWeather: []
})

export class GeolocationProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            city: 'Unknown',
            country: '',
            status: '',
            forecastedWeather: '',
            currentWeather: ''
        }

        this.geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 30000, 
            timeout           : 27000
          };
    }

    // fetch lambda function 'getapi.js'
    getWeather = (latitude, longitude) => {
        try {
            axios.get(`/.netlify/functions/getapi?latitude=${latitude}&longitude=${longitude}`)
            .then(response => {
                console.log(response.data)
                return response
        })
        } catch(err) {
            console.log(err)
            
        }
        
    }
 
    geolocationSuccess = (position) => { 

        reverseGeocode(position)
        .then(response => {
            this.setState({
                'city': response.city,
                'country': response.country,
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
            })
        })

        this.getWeather(position.coords.latitude, position.coords.longitude)
    }

    geolocationError = () => {
        this.setState({
            'status': 'Unable to retrieve your location' 
        })
    }

    componentDidMount(){
        if (!('geolocation' in navigator)) {
            return 'Sorry, geolocation is not supported in your browser'
        } else {
            return (
                navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError, this.geo_options)

            );
        }
    }

    render() {
        return(
            <GeolocationContext.Provider value={this.state}>
                {this.props.children}
            </GeolocationContext.Provider>
        );
    }
}

export const GeolocationConsumer = GeolocationContext.Consumer;
export default GeolocationContext