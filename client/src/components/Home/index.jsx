import { useState, useEffect } from 'react'
import { searchDriversAPI } from '../../apis.js'
import MapComponent from '../MapComponent'
import RideForm from '../RideForm'

const Home = () => {
    const [source, setSource] = useState([])
    const [destination, setDestination] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setSource([position.coords.latitude, position.coords.longitude])
        }, () => console.log)
    }, [])

    return (
        <div>
            <RideForm source={source} destination={destination} setSource={setSource} setDestination={setDestination} />
            <MapComponent source={source} destination={destination} setSource={setSource} setDestination={setDestination} />
        </div>
    )
}

export default Home
