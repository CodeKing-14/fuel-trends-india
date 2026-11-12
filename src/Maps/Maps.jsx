import { useContext } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FuelContext } from '../Providers/FuelProvider';

// Approximate coordinates for state capitals / major cities used as markers
const CAPITAL_COORDS = {
    "Andhra Pradesh": [16.5417, 80.5150],
    "Arunachal Pradesh": [27.1025, 93.6920],
    "Assam": [26.1445, 91.7362],
    "Bihar": [25.6140, 85.1414],
    "Chhattisgarh": [21.2514, 81.6296],
    "Goa": [15.4909, 73.8278],
    "Gujarat": [23.2156, 72.6369],
    "Haryana": [29.0588, 76.0856],
    "Himachal Pradesh": [31.1048, 77.1734],
    "Jharkhand": [23.3441, 85.3096],
    "Karnataka": [12.9716, 77.5946],
    "Kerala": [8.5241, 76.9366],
    "Madhya Pradesh": [23.2599, 77.4126],
    "Maharashtra": [19.07598, 72.87766],
    "Manipur": [24.8170, 93.9368],
    "Meghalaya": [25.5788, 91.8933],
    "Mizoram": [23.7271, 92.7176],
    "Nagaland": [25.6740, 94.1077],
    "Odisha": [20.2961, 85.8245],
    "Punjab": [30.7333, 76.7794],
    "Rajasthan": [26.9124, 75.7873],
    "Sikkim": [27.3314, 88.6130],
    "Tamil Nadu": [13.0827, 80.2707],
    "Telangana": [17.3850, 78.4867],
    "Tripura": [23.8315, 91.2868],
    "Uttar Pradesh": [26.8467, 80.9462],
    "Uttarakhand": [30.3165, 78.0322],
    "West Bengal": [22.5726, 88.3639],
    // Union territories / others
    "Delhi": [28.6139, 77.2090],
    "Chandigarh": [30.7333, 76.7794],
    "Puducherry": [11.9416, 79.8083],
    "Andaman and Nicobar Islands": [11.6670, 92.7356],
    "Lakshadweep": [10.5676, 72.6417],
    "Jammu and Kashmir": [34.0837, 74.7973],
    "Ladakh": [34.1526, 77.5771],
};

function IndiaMap() {
    const { fuelData } = useContext(FuelContext);
    const states = fuelData?.petrol ?? [];

    return (
        <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "75vh", width: "95%", maxWidth: "1200px", margin: "0 auto" }}
        >
            {/* use a plain/light basemap */}
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />

            {/* render a marker for each state capital that we have coordinates for */}
            {states.map((s) => {
                const name = s.state || s.territory || s.location || s.name;
                const coords = CAPITAL_COORDS[name];
                if (!coords) return null;

                return (
                    <CircleMarker
                        key={name}
                        center={coords}
                        radius={8}
                        pathOptions={{ color: '#2b6cb0', fillColor: '#2b6cb0', fillOpacity: 0.8 }}
                    >
                        <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                            <div style={{ fontSize: 12 }}>
                                <strong>{name}</strong>
                                <div>Petrol: {s.petrol ?? 'N/A'} INR</div>
                                <div>Diesel: {s.diesel ?? 'N/A'} INR</div>
                            </div>
                        </Tooltip>
                    </CircleMarker>
                );
            })}
        </MapContainer>
    );
}

export default IndiaMap;