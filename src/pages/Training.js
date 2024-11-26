import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Training.module.css';
import L from 'leaflet';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Training() {
  // List of training locations
  const locations = [
    { name: 'Singapore', coords: [1.3521, 103.8198] },
    { name: 'Seoul, South Korea', coords: [37.5665, 126.978] },
    { name: 'Sofia, Bulgaria', coords: [42.6977, 23.3219] },
    { name: 'Frankfurt, Germany', coords: [50.1109, 8.6821] },
    { name: 'Istanbul, Turkey', coords: [41.0082, 28.9784] },
    { name: 'Oslo, Norway', coords: [59.9139, 10.7522] },
    { name: 'Tunis and Carthage, Tunisia', coords: [36.8065, 10.1815], details: 'Training investigative journalists' },
    { name: 'Bangladesh', coords: [23.685, 90.3563] },
  ];

  return (
    <div className={styles.trainingContainer}>
      <h1>International Training</h1>
      <p>
        I’ve had the privilege of training journalists and professionals in locations around the world. Here’s a map of where I’ve worked.
      </p>
      
      {/* Interactive Map */}
      <MapContainer
        center={[20, 10]} // Starting view centered on a global perspective
        zoom={2}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.coords}>
            <Popup>
              <strong>{location.name}</strong>
              {location.details && <p>{location.details}</p>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </div>
  );
}

export default Training;
