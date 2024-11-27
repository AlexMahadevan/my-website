import React, { useState, useEffect } from 'react';
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
  // Counter state for number of people trained
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const target = 9250; // Replace with your actual target number
    const increment = Math.ceil(target / 100); // Increment value
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCounter(current);
    }, 30); // Speed of increment (30ms)

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // List of training locations
  const locations = [
    { name: 'Madrid, Spain', coords: [40.4168, -3.7038], details: 'Launch of media literacy program and research.' },
    { name: 'Barcelona, Spain', coords: [41.3851, 2.1734], details: 'How to engage Gen Z with fact-checking.' },
    { name: 'Sarajevo, Bosnia', coords: [43.8563, 18.4131], details: 'Integrating generative AI into fact-checking.' },
    { name: 'Singapore', coords: [1.3521, 103.8198], details: 'Studying emerging technologies and Gen Z.' },
    { name: 'Seoul, South Korea', coords: [37.5665, 126.978], details: 'An analysis of crowdsourced fact-checking on X.' },
    { name: 'Sofia, Bulgaria', coords: [42.6977, 23.3219], details: 'U.S. Embassy launch of media literacy program.' },
    { name: 'Istanbul, Turkey', coords: [41.0082, 28.9784], details: 'Launch of media literacy program and research & polarization workshop.' },
    { name: 'Oslo, Norway', coords: [59.9139, 10.7522], details: 'Emerging technologies workshops.' },
    { name: 'Tunis, Tunisia', coords: [36.8065, 10.1815], details: 'OSINT for investigative journalists.' },
    { name: 'Dhaka, Bangladesh', coords: [23.8103, 90.4125], details: 'Media literacy workshops for middle and high schoolers.' },
    { name: 'Casper, Wyoming', coords: [42.8501, -106.3252], details: 'Media literacy for journalists and generative AI training.' },
    { name: 'Washington, DC', coords: [38.9072, -77.0369], details: 'Generative AI workshops.' },
    { name: 'Jekyll Island, Georgia', coords: [31.0765, -81.4184], details: 'TikTok and generative AI workshops.' },
    { name: 'Montgomery, Alabama', coords: [32.3792, -86.3077], details: 'The ethics of generative AI use.' },
    { name: 'Austin, Texas', coords: [30.2672, -97.7431], details: 'TikTok workshops at SXSW.' },
    { name: 'Las Vegas, Nevada', coords: [36.1699, -115.1398], details: 'Fact-checking on any beat.' },
    { name: 'Boston, Massachusetts', coords: [42.3601, -71.0589], details: 'Reaching Gen Z.' },
    { name: 'Raleigh, North Carolina', coords: [35.7796, -78.6382], details: 'The ethics of Generative AI use.' },
  ];

  return (
    <div className={styles.trainingContainer}>
      <h1>International Training</h1>
      <p>
        I've been lucky to run workshops and programs in dozens of cities around the world on everything from generative AI to TikTok and reaching Gen Z.
      </p>

      {/* Counter Above Map */}
      <div className={styles.counter}>
        <h2>Journalists and citizens trained</h2>
        <p className={styles.counterNumber}>{counter.toLocaleString()}</p>
        <p className={styles.counterSubtext}>Based on in-person and virtual workshops around the world.</p>
      </div>

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
