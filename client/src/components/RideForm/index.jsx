import GeoCodingInput from "../GeoCodingInput"

const RideForm = ({ source, destination, setSource, setDestination }) => {
    const searchDrivers = () => {
        const ride = {
            source,
            destination // include vehicle type and payment amount later
        }
        const response = searchDriversAPI(ride)
    }

    return (
        <div id='ride-form' style={{ position: 'relative', zIndex: 100, top: 0 }}>
            <div>
                <h2>
                    Get a ride
                </h2>
            </div>
            <div>
                <GeoCodingInput setSource={setSource} setDestination={setDestination} locationType='source' />
                <GeoCodingInput setSource={setSource} setDestination={setDestination} locationType='destination' />
            </div>
            <div>
                <button onClick={searchDrivers}>Search</button>
            </div>
        </div>
    )
}

export default RideForm