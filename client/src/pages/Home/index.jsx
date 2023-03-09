import { useState, useEffect, createContext } from 'react'
import { searchDriversAPI } from '../../apis.js'
import Map from '../../components/Map'
import RideForm from '../../components/RideForm'

export const LocationContext = createContext()
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
            <LocationContext.Provider value={{ source, destination, setSource, setDestination }}>
                <RideForm />
                <Map />
            </LocationContext.Provider>
        </div >
    )
}

export default Home
