'use client';

import { useEffect, useRef, useState } from "react";

export default function Map({ propertiesData, onBoundsChange }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    let mounted = true;

    const loadMap = async () => {
      try {
        // Dynamically load leaflet
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');

        // Fix default marker icons
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });

        // Clean up any existing map
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        // Wait for the container to be ready
        if (!mapRef.current || !mounted) return;

        // Initialize map
        const map = L.map(mapRef.current, {
          zoomControl: true,
          scrollWheelZoom: true,
        }).setView([39.8283, -98.5795], 4);

        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        // Clear existing markers
        markersRef.current.forEach(marker => {
          if (marker && map.hasLayer(marker)) {
            marker.removeFrom(map);
          }
        });
        markersRef.current = [];

        // Add markers for each property
        propertiesData.forEach(property => {
          const marker = L.marker([property.lat, property.lng])
            .addTo(map)
            .bindTooltip(property.price, {
              permanent: true,
              direction: 'top',
              offset: [0, -10]
            });
          markersRef.current.push(marker);
        });

        // Handle bounds change
        const handleMoveEnd = () => {
          if (mounted) {
            const bounds = map.getBounds();
            onBoundsChange(bounds);
          }
        };

        map.on('moveend', handleMoveEnd);
        
        // Initial bounds check
        setTimeout(() => {
          if (mounted && map) {
            handleMoveEnd();
            // Force a resize to ensure proper rendering
            setTimeout(() => {
              if (mounted && map) {
                map.invalidateSize();
              }
            }, 100);
          }
        }, 500);

        setIsLoaded(true);

      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    loadMap();

    // Cleanup function
    return () => {
      mounted = false;
      if (mapInstanceRef.current) {
        markersRef.current.forEach(marker => {
          if (marker && mapInstanceRef.current.hasLayer(marker)) {
            marker.removeFrom(mapInstanceRef.current);
          }
        });
        markersRef.current = [];
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [propertiesData, onBoundsChange]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        setTimeout(() => {
          mapInstanceRef.current.invalidateSize();
        }, 150);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height: '100%', 
        width: '100%',
        minHeight: '300px',
        backgroundColor: '#f0f0f0'
      }} 
    >
      {!isLoaded && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: '#666',
          fontSize: '16px'
        }}>
          Loading map...
        </div>
      )}
    </div>
  );
}