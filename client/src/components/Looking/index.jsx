import { useState } from 'react'

const Looking = () => {
    const [latitude, setLatitude] = useState(12.9684064)
    const [longitude, setLongitude] = useState(77.6445793)

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        }, () => console.log)
    }

    const onSubmit = (e) => {
        console.log(FormData, latitude, longitude)
        return false
    }
    return (
        <div>
            <form action='http://localhost:8000/rides' method='POST' onSubmit={onSubmit}>
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
                            defaultValue={{ latitude, longitude }}
                            name="source"
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='add a destination'
                            defaultValue={{ latitude, longitude }}
                            name="destination"
                        />
                    </div>
                </div>
                <div>
                    <button onClick={geoLocate()}>Locate me</button>
                </div>
                <div>
                    <input type="submit" value='Confirm ride' />
                </div>
            </form>
        </div>
    )
}

export default Looking
