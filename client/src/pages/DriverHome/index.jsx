import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const DriverHome = () => {
  const [ride, setRide] = useState(null)
  const socket = io('ws://localhost:3000', { cors: { origin: 'http://localhost:3000' }, transports: ['websocket'] })

  socket.on('allotRide', (ride) => {
    console.log(ride)
    setRide(ride)
  })

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = [position.coords.longitude, position.coords.latitude]
        console.log('location', latlng)
        const data = {
          location: latlng,
          driverID: '640ea01dcfb881713386f9db'
        }
        socket.emit('available', data)
      })
    }, 5000)

    return () => clearTimeout(timeoutID)
  }, [])

  return (
    <div>
      <h1>Driver Home</h1>
      {
        ride
          ? (
            <div>
              <h2>
                Ride Alloted
              </h2>
              <div>userID:{ride.user_id}</div>
              <div>source: {ride.source.address}</div>
              <div>destination: {ride.destination.address}</div>
            </div>
          )
          : null
      }
    </div>
  )
}

export default DriverHome
