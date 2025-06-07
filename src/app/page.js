'use client';

import { useState, useEffect } from 'react';


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

}
