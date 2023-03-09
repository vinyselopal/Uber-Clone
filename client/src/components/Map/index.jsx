import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap } from 'react-leaflet'
import React, { useEffect, useRef, useContext } from 'react'
import RoutingMachine from '../RoutingMachine'
import { LocationContext } from '../../pages/Home'

const Map = () => {
    const { source, destination } = useContext(LocationContext)

    return (
        <div id='map'>
            <MapContainer
                style={{
                    height: 500, width: "100 %"
                }}
                center={[12.961489, 77.6441696]} zoom={13} scrollWheelZoom={false} >
                {
                    source.length && destination.length
                        ? (
                            <RoutingMachine source={source} destination={destination} />
                        )
                        : null
                }
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    source.length
                        ? (
                            <Marker position={source}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        )
                        : null
                }
                {
                    destination.length
                        ? (
                            <Marker position={destination}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        )
                        : null
                }


            </MapContainer>
        </div >
    )
}

export default Map

