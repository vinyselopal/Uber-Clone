import GeoCodingInput from "../GeoCodingInput"

import { LocationContext } from "../../pages/Home"
import { useContext } from "react"
import { searchDriversAPI } from "../../apis"
const RideForm = () => {
    const { source, destination, setSource, setDestination } = useContext(LocationContext)

    const searchDrivers = () => {
        console.log(source.length, destination.length)
        if (source.length && destination.length) {
            const ride = {
                user_id: 1,
                source,
                destination
            }
            const response = searchDriversAPI(ride)
        }
    }

    return (
        <div id='ride-form'>
            <div>
                <h2>
                    Get a ride
                </h2>
            </div>
            <div>
                <GeoCodingInput locationType='source' />
                <GeoCodingInput locationType='destination' />
            </div>
            <div>
                <button onClick={searchDrivers}>Search</button>
            </div>
        </div>
    )
}

export default RideForm