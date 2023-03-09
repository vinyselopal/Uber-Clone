import { useState, useEffect } from 'react'
import { searchDriversAPI } from '../../apis.js'
import Map from '../../components/Map'
import RideForm from '../../components/RideForm'

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
            <Map source={source} destination={destination} setSource={setSource} setDestination={setDestination} />
        </div>
    )
}

export default Home
