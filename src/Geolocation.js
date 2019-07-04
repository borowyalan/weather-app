import React, { Component } from 'react';
import axios from 'axios';

export default class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: '',
            coords: 'Coords undefined',
            status: ''
        }

        this.geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 30000, 
            timeout           : 27000
          };
    }

    reverseGeocode = (position) =>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCC-HgXX2I5MIbJuXQDGsgG5TegMyTA1Vo&result_types=locality|country`)
        .then(response => {
            let componentsList = response.data.results[0].address_components
            
            // find particular components from the response and save them to state
            for(let i=0; i < componentsList.length-1; i++ ) {
                let component = componentsList[i];

                switch(component.types[0]){
                   case 'locality':
                        this.setState({
                            'city': component.long_name
                        })
                        break
                   case 'country':
                        this.setState({
                            'country': component.long_name
                        })
                        break
                   default:
                        break;
                }

            }
        });
    }
 
    geolocationSuccess = (position) => { 
        this.setState({
            coords: { latitude: position.coords.latitude, longitude: position.coords.longitude }
        })

        return this.reverseGeocode(position)
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
            <div>{this.state.city}, {this.state.country}</div>
         </>))
    }
}
