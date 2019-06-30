import React, { Component } from 'react'

export default class Geolocation extends Component {
    constructor(props){
        super(props)
        this.state = {
          longitude: '',
          latitude: ''
        }
    }

    
    let latitude = ''
    let longitude = ''
  
    navigator.geolocation.getCurrentPosition(function(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }
  
    
    render() {
        return (
            <div>
                <GeolocationAvailability />
            </div>
        )
}

