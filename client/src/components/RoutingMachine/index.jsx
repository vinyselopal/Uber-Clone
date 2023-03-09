import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core"

const createRoutineMachineLayer = ({ source, destination }) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(source[0], source[1]),
            L.latLng(destination[0], destination[1])
        ],
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;