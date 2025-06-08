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
          zIndex: 1,
          marginBottom: '4rem' // Add extra space below this section
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
            src="/inside_image.png"
            alt="Installatie Image"
            width={1200}
            height={1200}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              position: 'relative',
              borderRadius: '8px',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)' // <-- Drop shadow added here
            }}
            priority
          />
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0.5em 0', color: '#f3f4f6' }}>How it works</h1>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            margin: '4rem auto',
            maxWidth: '900px', // Limit width for compactness
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >
          {[1, 2, 3].map((row) => (
            <div
              key={row}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                width: '100%',
                maxWidth: '800px', // Prevent row from stretching too far
                margin: '0 auto',
              }}
            >
              {/* Left column: placeholder text */}
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#f3f4f6', marginBottom: '0.5rem' }}>Row {row} Title</h3>
                <p style={{ color: '#a1a1aa' }}>This is some placeholder text for row {row}.</p>
              </div>
              {/* Right column: bigger placeholder image */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  background: '#232329',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.24)',
                  flexShrink: 0,
                  overflow: 'hidden'
                }}
              >
                <Image
                  src={`/instructionCard-${row}.png`}
                  alt={`instructions ${row}`}
                  width={200}
                  height={300}
                  priority={row === 1}
                />
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* Features Section */}
      <section style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', flexWrap: 'wrap', marginTop: '4rem', marginBottom: '4rem' }}>
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
