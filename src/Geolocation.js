import React, { Component } from 'react'

export default class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 'loading...',
            longitude: 'loading...',
            coords: 'Coords undefined'
        }
    }

    geolocationSuccess = (position) => { 
        this.setState({
            coords: { latitude: position.coords.latitude, longitude: position.coords.longitude }
        })
    }

    componentDidMount(){
        if (!('geolocation' in navigator)) {
            return 'Sorry, geolocation is not supported in your browser'
        } else {
            return (
                navigator.geolocation.getCurrentPosition(this.geolocationSuccess)
            );
        }
    }

    render() {
        return(
        <>
         <div> {this.state.coords.latitude}, {this.state.coords.longitude} </div>
         <div>Geolocation city</div>
        </>
        );
    }
}
