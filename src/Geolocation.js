import React, { Component } from 'react';
import axios from 'axios';

export default class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            coords: 'Coords undefined',
            status: ''
        }

        this.geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 30000, 
            timeout           : 27000
          };
    }

    reverseGeoCode = (position) =>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCC-HgXX2I5MIbJuXQDGsgG5TegMyTA1Vo`)
        .then(response => {
            let city = `${response.data.results[3].address_components[0].long_name}, ${response.data.results[3].address_components[3].long_name}`;

            this.setState({
                'city': city
            })

            // debugging purposes
            console.log(response.data.results[5].formatted_address)
        });
    }
 
    geolocationSuccess = (position) => { 
        this.setState({
            coords: { latitude: position.coords.latitude, longitude: position.coords.longitude }
        })

        return this.reverseGeoCode(position)
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
       return ((this.state.status !== '') 
        ? (<>
            <div> {this.state.status} </div>
            <div></div>
            </>)

        : (<>
            <div> {this.state.coords.latitude}, {this.state.coords.longitude} </div>
            <div>{this.state.city}</div>
         </>))
    }
}
