import axios from 'axios'


export async function reverseGeocode(position) {
    return await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCC-HgXX2I5MIbJuXQDGsgG5TegMyTA1Vo&result_types=locality|country`)
    .then(response => {
        const componentsList = response.data.results[0].address_components
        let returnValue = {}

        // return response;
        // find particular components from the response and save them to state
        for(let i=0; i < componentsList.length-1; i++ ) {
            let component = componentsList[i];

            switch(component.types[0]){
               case 'locality':
                    // this.setState({
                    //     'city': component.long_name,
                    // })
                    returnValue.city = component.long_name
                    break
               case 'country':
                    // this.setState({
                    //     'country': component.long_name
                    // })
                    returnValue.country = component.long_name
                    break
               default:
                    break;
            }
        }
        return returnValue;
    })
}