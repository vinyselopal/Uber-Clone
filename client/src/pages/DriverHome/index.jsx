import { useEffect } from 'react'
import { io } from 'socket.io-client'

const DriverHome = () => {
  const socket = io('ws://localhost:3000', { cors: { origin: 'http://localhost:3000' }, transports: ['websocket'] })

  socket.on('allotRide', (ride) => {
    console.log(ride)
  })

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = [position.coords.longitude, position.coords.latitude]
        console.log('location', latlng)
        socket.emit('available', latlng)
      })
    }, 5000)

    return () => clearTimeout(timeoutID)
  }, [])

  return (
    <h1>Driver Home</h1>
  )
}

export default DriverHome
