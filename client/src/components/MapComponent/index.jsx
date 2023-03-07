import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useEffect, useRef } from 'react'

import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch'

const MapComponent = ({ position }) => {
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
                <Marker position={position || [12.961489, 77.6441696]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <EsriLeafletGeoSearch useMapBounds={false} position="topleft"
                    eventHandlers={{
                        requeststart: () => console.log("Started request..."),
                        requestend: () => console.log("Ended request..."),
                        results: (r) => console.log(r)
                    }}
                    providers={{
                        arcgisOnlineProvider: {
                            token: 'AAPKe9a4f3fa4277451d840029c268d29c589V39xPFRZv7cMWh9SHLIZ_w7KkP1EeHVmuGfbmMBcMK83RAa_GN1DqJ2D3RdgnlK',
                            label: "ArcGIS Online Results",
                            maxResults: 10
                        }
                    }} />
            </MapContainer>
        </div >
    )
}

export default MapComponent

