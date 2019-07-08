import React, { useContext } from 'react'
import GeolocationContext from './GeolocationProvider'

export default function WeatherContainer() {

    const context = useContext(GeolocationContext)
    console.log(context)


    return (
        <div>
            {context.city}, {context.country}
        </div>
    )
}
