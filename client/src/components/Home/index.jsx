import { useState } from 'react'
import { searchDriversAPI } from '../../apis.js'
import MapComponent from '../MapComponent'

const Home = () => {
    const [source, setSource] = useState(null)
    const [destination, setDestination] = useState(null)

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setSource([position.coords.latitude, position.coords.longitude])
        }, () => console.log)
    }

    const searchDrivers = () => {
        const ride = {
            source,
            destination // include vehicle type and payment amount later
        }
        const response = searchDriversAPI(ride)

    }
    return (
        <div>

            <div>
                <div>
                    <h2>
                        Get a ride
                    </h2>
                </div>
                <div>
                    <div>
                        <input
                            type='text'
                            placeholder='Pick up location'
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='Dropoff location'
                        />
                    </div>
                </div>
                <div>
                    <button onClick={geoLocate}>Locate me</button>
                </div>
                <div>
                    <button onClick={searchDrivers}>Search</button>
                </div>
            </div>
            <div>
                <MapComponent position={source} />
            </div>
        </div>
    )
}

export default Home
