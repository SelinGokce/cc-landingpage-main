'use client';

import styles from './page.module.css';
import useNetwork from '@/data/network';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';

function AboutContent() {
  const { network, isLoading, isError } = useNetwork();
  const searchParams = useSearchParams();
  const stationName = searchParams.get('station');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div
      style={{
        backgroundColor: '#242424',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Center vertically
        position: 'relative',
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
      {/* Centered title at the very top */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          top: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          width: '100%',
        }}
      >
        <span
          style={{
            color: '#8EE9A4',
            fontSize: '32px',
            fontWeight: 'bold',
            fontFamily: '"Ubuntu Condensed", sans-serif',
            letterSpacing: '1px',
            textAlign: 'center',
            border: '2px solid rgba(142, 233, 164, 0.3)',
            borderRadius: '0',
            padding: '8px 40px 8px 24px',
            background: 'rgba(36,36,36,0.95)',
            display: 'inline-block',
            width: 'auto', // Let width depend on text
            boxSizing: 'border-box',
            whiteSpace: 'nowrap',
            maxWidth: '100vw', // Prevent overflow on very long names
          }}
        >
          {stationName ? stationName : 'About'}
        </span>
      </div>
      {/* Main content stays centered */}
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '32px 32px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Parking image and free spaces */}
          <Image
            src="/noun-parking-green.png"
            alt="Parking"
            width={180}
            height={180}
            style={{
              objectFit: 'contain',
              background: '#333',
              borderRadius: '0',
              border: '2px solid rgba(142, 233, 164, 0.3)',
              padding: '18px',
              width: '100%',
              height: 'auto',
              maxWidth: '180px',
              maxHeight: '180px',
              justifySelf: 'center',
            }}
            priority
          />
          {stationName && network?.stations && (() => {
            const station = network.stations.find(s => s.name === stationName);
            return (
              <div
                style={{
                  color: '#8EE9A4',
                  fontSize: '26px',
                  fontFamily: '"Ubuntu Condensed", sans-serif',
                  textAlign: 'center',
                  background: 'rgba(36,36,36,0.95)',
                  border: '2px solid rgba(142, 233, 164, 0.3)',
                  borderRadius: '0',
                  padding: '8px 18px',
                  width: '100%',
                  height: '180px',
                  maxWidth: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  justifySelf: 'center',
                }}
              >
                Free spaces: {station?.empty_slots ?? 'N/A'}
              </div>
            );
          })()}
          {/* Bike image and available bikes */}
          <Image
            src="/noun-bicycle-green.png"
            alt="Bike"
            width={180}
            height={180}
            style={{
              objectFit: 'contain',
              background: '#333',
              borderRadius: '0',
              border: '2px solid rgba(142, 233, 164, 0.3)',
              padding: '18px',
              width: '100%',
              height: 'auto',
              maxWidth: '180px',
              maxHeight: '180px',
              justifySelf: 'center',
            }}
            priority
          />
          {stationName && network?.stations && (() => {
            const station = network.stations.find(s => s.name === stationName);
            return (
              <div
                style={{
                  color: '#8EE9A4',
                  fontSize: '26px',
                  fontFamily: '"Ubuntu Condensed", sans-serif',
                  textAlign: 'center',
                  background: 'rgba(36,36,36,0.95)',
                  border: '2px solid rgba(142, 233, 164, 0.3)',
                  borderRadius: '0',
                  padding: '8px 18px',
                  width: '100%',
                  height: '180px',
                  maxWidth: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  justifySelf: 'center',
                }}
              >
                Available bikes: {station?.free_bikes ?? 'N/A'}
              </div>
            );
          })()}
        </div>
      </div>
      {/* Home button at the bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link
          href="/"
          style={{
            color: '#8EE9A4',
            fontFamily: '"Ubuntu Condensed", sans-serif',
            fontSize: '18px',
            textDecoration: 'none',
            border: '2px solid rgba(142, 233, 164, 0.3)',
            padding: '6px 18px',
            background: 'rgba(36,36,36,0.95)',
          }}
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}
