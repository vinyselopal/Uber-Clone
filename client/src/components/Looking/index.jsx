import { useState } from 'react'
import { confirmBooking } from '../../apis.js'

const Looking = () => {
    const [source, setSource] = useState(null)
    const [destination, setDestination] = useState(null)

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setSource({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        }, () => console.log)
    }

    const createRide = () => {
        const ride = {
            source,
            destination // include vehicle type and payment amount later
        }
        const response = confirmBooking(ride)

    }
    return (
        <div>
            <div>
                <h2>
                    Where can we pick you up?
                </h2>
            </div>
            <div>
                <div>
                    <input
                        type='text'
                        placeholder='add a pick up location'
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='add a destination'
                    />
                </div>
            </div>
            <div>
                <button onClick={geoLocate}>Locate me</button>
            </div>
            <div>
                <button onClick={createRide}>Confirm booking</button>
            </div>
        </div>
    )
}

export default Looking
