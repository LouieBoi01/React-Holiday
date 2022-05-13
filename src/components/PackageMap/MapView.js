import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { packageData } from '../../data/data';
import 'leaflet/dist/leaflet.css';
import { useParams } from 'react-router-dom';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

export function MapView(props) {

    let params = useParams();
    let id = params.packageid;
    const packages = packageData.find((packages) => packages.id === id);

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [26, 36],
        iconAnchor: [13, 36]
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    const markers = packageData.map((data) => {
        return (
            <Marker position={[packages.latitude, packages.longitude]}>
                <Popup>
                    {packages.location}
                </Popup>
            </Marker>
        );
    });
    return (
    <MapContainer
        center={[packages.latitude, packages.longitude]}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "50vh", width: "100%" }}
    >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
    </MapContainer>
    );



}
