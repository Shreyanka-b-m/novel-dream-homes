'use client';

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
// import styles from "./page.module.css";
import styles from "@/app/properties/page.module.css";

// Dynamically import the Map component with no SSR
const Map = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
  loading: () => (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      color: '#666'
    }}>
      Loading map...
    </div>
  )
});

export default function ClientPropertiesPage({ propertiesData }) {
  const [visibleProperties, setVisibleProperties] = useState(propertiesData);

  // Use useCallback to prevent unnecessary re-renders
  const handleBoundsChange = useCallback((bounds) => {
    const filtered = propertiesData.filter((property) =>
      bounds.contains([property.lat, property.lng])
    );
    setVisibleProperties(filtered);
  }, [propertiesData]);

  return (
    <div className={styles.container}>
      <div className={styles.mapSection}>
        <Map 
          propertiesData={propertiesData}
          onBoundsChange={handleBoundsChange}
        />
      </div>
      <div className={styles.listSection}>
        <h2>Properties in View ({visibleProperties.length} of {propertiesData.length})</h2>
        
        {visibleProperties.length === 0 ? (
          <p className={styles.noProperties}>
            No properties found in the current map view. Try zooming or panning to see more properties.
          </p>
        ) : (
          <div className={styles.propertiesList}>
            {visibleProperties.map((property) => (
              <div key={property.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={property.image} 
                    alt={property.name}
                    width={400}
                    height={300}
                    className={styles.cardImage}
                    priority={property.id <= 4}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{property.name}</h3>
                  <p className={styles.address}>{property.address}</p>
                  <p className={styles.price}>{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}