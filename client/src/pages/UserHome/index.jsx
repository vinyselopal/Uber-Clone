import Map from '../../components/Map'
import RideForm from '../../components/RideForm'
import { searchDriversAPI } from '../../apis.js'

import { useState, useEffect, createContext } from 'react'

export const LocationContext = createContext()
const Home = () => {
  const [source, setSource] = useState([])
  const [destination, setDestination] = useState([])

  return (
    <div>
      <LocationContext.Provider value={{ source, destination, setSource, setDestination }}>
        <RideForm />
        <Map />
      </LocationContext.Provider>
    </div>
  )
}

export default Home
