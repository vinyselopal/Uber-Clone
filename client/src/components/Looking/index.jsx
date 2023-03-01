import { useState } from "react"

const Looking = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        }, () => console.log)
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
                    <input type='text' placeholder='add a pick up location'></input>
                </div>
                <div>
                    <input type='text' placeholder='add a destination'></input>
                </div>
            </div>
            <div>
                <button onClick={geoLocate()}>Set location on map</button>
            </div>
            <div>
                <button>Set location on map</button>
            </div>
        </div>
    )
}

export default Looking