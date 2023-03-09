import { useState, useContext, useEffect } from 'react'
import { LocationContext } from '../../pages/Home'

const GeoCodingInput = ({ locationType }) => {
    const [suggestions, setSuggestions] = useState([])
    const [address, setAddress] = useState('')

    const { setSource, setDestination } = useContext(LocationContext)

    useEffect(() => {
        if (locationType === 'source') {
            navigator.geolocation.getCurrentPosition((position) => {
                const latlng = [position.coords.longitude, position.coords.latitude]
                setSource(latlng)
                const address = getAddressFromLatlng(latlng)
            }, () => console.log)
        }
    }, [])

    const getAddressFromLatlng = async (location) => {
        const geoSearchAPIKEY = import.meta.env.VITE_GEOSEARCH_API_KEY
        const geoSearchAPI = new URL('https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json')

        geoSearchAPI.searchParams.set('location', location)
        geoSearchAPI.searchParams.set('token', geoSearchAPIKEY)

        const response = await fetch(geoSearchAPI.toString())
        const parsedResponse = await response.json()

        setAddress(parsedResponse.address.LongLabel)
    }

    const getAddressFromKeyword = async (place) => {
        const geoSearchAPIKEY = import.meta.env.VITE_GEOSEARCH_API_KEY
        const geoSearchAPI = new URL('https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json')

        geoSearchAPI.searchParams.set('SingleLine', place)
        geoSearchAPI.searchParams.set('token', geoSearchAPIKEY)

        const response = await fetch(geoSearchAPI.toString())
        const suggestions = await response.json()

        return suggestions.candidates
    }

    const getSuggestions = async (event) => {
        const place = event.target.value
        setAddress(place)
        const suggestions = await getAddressFromKeyword(place)
        setSuggestions(suggestions)
    }

    const setLocation = (suggestion, event) => {
        const position = [
            suggestion.location.y,
            suggestion.location.x
        ]
        console.log(position)
        if (locationType === 'source') {
            setSource(position)
        }
        else setDestination(position)
        setAddress(suggestion.address)
        setSuggestions([])
    }

    return (
        <div>
            <div>
                <input placeholder={`set the ${locationType}`} onChange={getSuggestions} value={address} />
            </div>
            {
                suggestions
                    ? (
                        <div>
                            <ul>
                                {
                                    suggestions.map((suggestion, index) => (
                                        <li key={index} onClick={() => setLocation(suggestion)}>
                                            {suggestion.address}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                    : null
            }

        </div>
    )
}

export default GeoCodingInput