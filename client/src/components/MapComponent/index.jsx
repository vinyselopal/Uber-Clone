import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
import React, { useEffect, useRef } from 'react'

const MapComponent = ({ source, destination, setSource, setDestination }) => {
    console.log('source', source, 'destination', destination)
    return (
        <div id='map'>
            <MapContainer
                style={{
                    height: 500, width: "100 %"
                }}
                center={[12.961489, 77.6441696]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    source
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
                    destination
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

export default MapComponent

