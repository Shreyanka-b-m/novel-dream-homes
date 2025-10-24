'use client';

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMapEvent } from "react-leaflet";
import L from "leaflet";
import propertiesData from "@/data/properties";
import styles from "./page.module.css";

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Component to handle map bounds change
function MapEvents({ onBoundsChange }) {
  const map = useMapEvent("moveend", () => {
    const bounds = map.getBounds();
    onBoundsChange(bounds);
  });
  return null;
}

export default function PropertiesPage() {
  const [visibleProperties, setVisibleProperties] = useState(propertiesData);

  const handleBoundsChange = (bounds) => {
    const filtered = propertiesData.filter((p) =>
      bounds.contains([p.lat, p.lng])
    );
    setVisibleProperties(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mapSection}>
        <MapContainer
          center={[37.0902, -95.7129]} // Default to center of USA
          zoom={4}
          scrollWheelZoom={true}
          className={styles.mapContainer}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {propertiesData.map((property) => (
            <Marker key={property.id} position={[property.lat, property.lng]}>
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                {property.price}
              </Tooltip>
            </Marker>
          ))}
          <MapEvents onBoundsChange={handleBoundsChange} />
        </MapContainer>
      </div>
      <div className={styles.listSection}>
        {visibleProperties.length === 0 ? (
          <p>No properties in view</p>
        ) : (
          visibleProperties.map((property) => (
            <div key={property.id} className={styles.card}>
              <h3>{property.name}</h3>
              <p>{property.address}</p>
              <p className={styles.price}>{property.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
