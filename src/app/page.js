'use client';

import { useState, useEffect } from 'react';
import useNetwork from '@/data/network';
import { getDistance } from '@/helpers/get-distance';

if (typeof window !== "undefined") {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

export default function Home() {
  const [filter, setFilter] = useState('');
  // Default location: Ellermanstraat 71, 2060 Antwerpen,
  // const defaultLocation = { latitude: 51.22854, longitude: 4.42137 }; incase not in Antwerp change long n lat to these
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const { network, isLoading, isError } = useNetwork();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const stations = network.stations.filter(
    (station) => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
  );

  stations.forEach((station) => {
    station.distance =
      getDistance(
        location.latitude,
        location.longitude,
        station.latitude,
        station.longitude
      ).distance / 1000;
  });

  stations.sort((a, b) => a.distance - b.distance);
  const closestStations = stations.slice(0, 3);

  function mapToSvgCoordinates(lat, lon) {
    const centerLat = location.latitude;
    const centerLon = location.longitude;
    const scale = 60000;
    return {
      x: 189.5 + (lon - centerLon) * scale,
      y: 189.5 - (lat - centerLat) * scale,
    };
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#242424',
        fontFamily: '"Ubuntu Condensed", sans-serif',
        fontStretch: 'condensed',
        overflow: 'hidden',
      }}
    >
      {/* CRT Overlay */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 100,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background:
            `repeating-linear-gradient(
              to bottom,
              rgba(255,255,255,0.04) 0px,
              rgba(255,255,255,0.04) 1px,
              transparent 1.5px,
              transparent 4px
            ),
            repeating-linear-gradient(
              to right,
              rgba(255,255,255,0.01) 0px,
              rgba(255,255,255,0.01) 1px,
              transparent 1.5px,
              transparent 4px
            )`,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      />

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '48px',
          color: '#D24521',
          fontWeight: '400',
          zIndex: 2,
          border: '2px solid #8EE9A4',
          borderColor: 'rgba(142, 233, 164, 0.3)',
          padding: '8px 18px',
          background: 'rgba(36,36,36,0.95)',
          textAlign: 'center',
          minWidth: '220px',
          maxWidth: '90vw',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        Tracking Stations
      </div>

      {/* Current Location */}
      {location.latitude && location.longitude && (
        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#8EE9A4',
            fontWeight: '400',
            fontSize: '16px',
            zIndex: 2,
            border: '2px solid #8EE9A4',
            borderColor: 'rgba(142, 233, 164, 0.3)',
            padding: '6px 14px',
            background: 'rgba(36,36,36,0.95)',
            textAlign: 'center',
            minWidth: '220px',
            maxWidth: '90vw',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Current Location: Lat: {location.latitude.toFixed(2)}, Lon: {location.longitude.toFixed(2)}
        </div>
      )}

      {/* Radar SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 379 379"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '337px',
          height: '337px',
          maxWidth: '337px',
          maxHeight: '337px',
          minWidth: '337px',
          minHeight: '337px',
          border: '5px solid #02E546',
          borderRadius: '50%',
        }}
      >
        <circle cx="189.5" cy="189.5" r="189.5" fill="url(#paint0_radial_3_3)" />
        <circle
          cx="189.5"
          cy="189.5"
          r="5"
          fill="#02E546"
          style={{ pointerEvents: 'none' }}
        />
        {closestStations.map((station, index) => {
          const { x, y } = mapToSvgCoordinates(station.latitude, station.longitude);
          return <circle key={index} cx={x} cy={y} r="5" fill="#B3ED14" />;
        })}
        <defs>
          <radialGradient
            id="paint0_radial_3_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(189.5 189.5) rotate(90) scale(189.5)"
          >
            <stop stopColor="#00A231" />
            <stop offset="1" stopColor="#003C12" />
          </radialGradient>
        </defs>
      </svg>

      {/* Closest Stations Block */}
      <div
        className="text-stations"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '50px',
          transform: 'translate(-50%, 0)',
          textAlign: 'left',
          color: '#8EE9A4',
          fontFamily: 'inherit',
          fontStretch: 'condensed',
          border: '2px solid #8EE9A4',
          borderColor: 'rgba(142, 233, 164, 0.3)',
          padding: '4px 12px',
          background: 'rgba(36,36,36,0.95)',
          width: 'auto',
          minWidth: '220px',
          maxWidth: '90vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 'auto',
          boxSizing: 'border-box',
          overflow: 'visible',
          fontSize: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {closestStations.map((station, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '2px 0',
              padding: '0',
              fontFamily: 'inherit',
              fontStretch: 'condensed',
              fontSize: '16px',
              width: '100%',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontFamily: 'inherit',
                textAlign: 'left',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              Station {station.name}: {Math.round(station.distance * 1000)} meters away
            </span>
            <button
              style={{
                marginLeft: '16px',
                width: 'auto',
                minWidth: '32px',
                height: '32px',
                padding: '0 18px',
                border: '2px solid #8EE9A4',
                borderColor: 'rgba(142, 233, 164, 0.3)',
                background: 'transparent',
                color: '#8EE9A4',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              aria-label={`Info about ${station.name}`}
              onClick={() => window.location.href = `/about?station=${encodeURIComponent(station.name)}`}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(142, 233, 164, 0.3)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              i
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
