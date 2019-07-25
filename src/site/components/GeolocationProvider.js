import React, { Component, createContext } from 'react';
import axios from 'axios';
import { reverseGeocode } from './util/reverseGeocode';

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

    getWeather = (position) => {
        axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=9bd94d4345bd3e88206217430456a10b&units=metric`),
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=9bd94d4345bd3e88206217430456a10b&units=metric`)
        ])
        .then(axios.spread((currentWeatherResponse, forecastResponse) => {
            this.setState({
                'currentWeather': currentWeatherResponse.data,
                'forecastedWeather': forecastResponse.data
            })
        }));
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

        this.getWeather(position)
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