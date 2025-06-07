'use client';

import Image from 'next/image';

if (typeof window !== "undefined") {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

export default function Home() {

  return (
    <main style={{ fontFamily: "'Ubuntu Condensed', sans-serif", background: '#18181b', minHeight: '100vh', color: '#f3f4f6', padding: '0 2rem 2rem 2rem' }}>
      {/* Navigation Bar */}
      <nav
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          background: '#232329',
          boxShadow: '0 2px 8px rgba(0,0,0,0.24)',
          padding: '1.25rem 2rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '2rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
        }}
      >
        <span style={{ color: '#f3f4f6' }}>Consequences</span>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem', fontWeight: 'normal' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#60a5fa', padding: '0.5em 1em', borderRadius: '4px', transition: 'background 0.2s', background: 'transparent' }}>About</a>
          <a href="#features" style={{ textDecoration: 'none', color: '#60a5fa', padding: '0.5em 1em', borderRadius: '4px', transition: 'background 0.2s', background: 'transparent' }}>Features</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#60a5fa', padding: '0.5em 1em', borderRadius: '4px', transition: 'background 0.2s', background: 'transparent' }}>Contact</a>
        </div>
      </nav>

      {/* Fullscreen Image Placeholder */}
      <div
        style={{
          width: '100vw',
          height: '70vh',
          background: '#27272a',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          fontSize: '2rem',
          color: '#a1a1aa',
          margin: '-2rem 0 3rem -2rem',
          borderRadius: '8px',
          paddingRight: '4rem',
          paddingLeft: '4rem',
          zIndex: 1
        }}
      >
        {/* Left column: text */}
        <div
          style={{
            flex: '1 1 0',
            zIndex: 1,
            color: '#f3f4f6',
            textAlign: 'left',
            maxWidth: '40%',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Placeholder Title</h2>
          <p style={{ fontSize: '1.25rem', color: '#a1a1aa' }}>
            This is some placeholder text on the left side of the fullscreen image section. You can replace it with your own content.
          </p>
        </div>
        {/* Right column: image */}
        <div
          style={{
            flex: '1 1 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '100%',
            position: 'relative',
            minWidth: 0,
          }}
        >
          <Image
            src="/zeshoek_inside.svg"
            alt="Installatie Image"
            width={1200}
            height={1200}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              position: 'relative',
              borderRadius: '8px'
            }}
            priority
          />
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0.5em 0', color: '#f3f4f6' }}>Welcome to Our Landing Page</h1>
        <p style={{ fontSize: '1.25rem', color: '#a1a1aa' }}>
          Discover our amazing product and how it can help you achieve your goals.
        </p>
        <button style={{ padding: '1em 2em', fontSize: '1rem', background: '#2563eb', color: '#f3f4f6', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '1.5em', transition: 'background 0.2s' }}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ background: '#232329', padding: '2em', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.24)', flex: '1 1 250px', minWidth: '220px' }}>
          <h2 style={{ color: '#f3f4f6' }}>Feature One</h2>
          <p style={{ color: '#a1a1aa' }}>Short description of the first feature.</p>
        </div>
        <div style={{ background: '#232329', padding: '2em', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.24)', flex: '1 1 250px', minWidth: '220px' }}>
          <h2 style={{ color: '#f3f4f6' }}>Feature Two</h2>
          <p style={{ color: '#a1a1aa' }}>Short description of the second feature.</p>
        </div>
        <div style={{ background: '#232329', padding: '2em', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.24)', flex: '1 1 250px', minWidth: '220px' }}>
          <h2 style={{ color: '#f3f4f6' }}>Feature Three</h2>
          <p style={{ color: '#a1a1aa' }}>Short description of the third feature.</p>
        </div>
      </section>
    </main>
  );
}
