'use client';

import Image from 'next/image';
import { useState } from 'react';

// Load Google Fonts for Ubuntu Condensed
if (typeof window !== "undefined") {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

function Slideshow() {
  const images = [
    { src: "/installation-closeup.png", alt: "Installation Close-up" },
    { src: "/installation-backside.png", alt: "Installation Back Side" }
  ];
  const [index, setIndex] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={images[index].src}
        alt={images[index].alt}
        width={520}
        height={600}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '12px',
          transition: 'opacity 0.5s'
        }}
      />
      <button
        onClick={prevImage}
        aria-label="Previous image"
        style={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(30,30,30,0.7)',
          border: 'none',
          color: '#fff',
          fontSize: '2rem',
          borderRadius: '50%',
          width: 36,
          height: 36,
          cursor: 'pointer',
          zIndex: 2,
          display: images.length > 1 ? 'block' : 'none'
        }}
      >
        {'<'}
      </button>
      <button
        onClick={nextImage}
        aria-label="Next image"
        style={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(30,30,30,0.7)',
          border: 'none',
          color: '#fff',
          fontSize: '2rem',
          borderRadius: '50%',
          width: 36,
          height: 36,
          cursor: 'pointer',
          zIndex: 2,
          display: images.length > 1 ? 'block' : 'none'
        }}
      >
        {'>'}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "'Ubuntu Condensed', sans-serif",
        background: '#18181b',
        minHeight: '100vh',
        color: '#f3f4f6',
        padding: '0 2rem 2rem 2rem'
      }}
    >
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
          marginBottom: '4rem'
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>All frustrations in one</h2>
          <p style={{ fontSize: '1.25rem', color: '#a1a1aa' }}>
            The installation that allowed you to shatter plates.
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
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)'
            }}
            priority
          />
        </div>
      </div>

      {/* Video Placeholder Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '4rem auto',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        <h2 style={{ color: '#f3f4f6', fontSize: '2rem', marginBottom: '1.5rem' }}>Watch the Installation</h2>
        <div
          style={{
            width: '100%',
            maxWidth: '700px',
            aspectRatio: '16/9',
            background: '#232329',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a1a1aa',
            fontSize: '1.5rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.24)',
            overflow: 'hidden'
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/g39wajMhOLU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              borderRadius: '12px',
              width: '100%',
              height: '100%',
              background: '#232329'
            }}
          ></iframe>
        </div>
      </section>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0.5em 0', color: '#f3f4f6' }}>How it works</h1>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            margin: '4rem auto',
            maxWidth: '900px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {[1, 2, 3].map((row) => {
            const rowContent = [
              {
                title: "Step 1: Take a plate from the box",
                text: "The plates were made out of porcelain and were bought from a local store. They are meant to be used as a canvas for your thoughts and frustrations."
              },
              {
                title: "Step 2: Throw the plate into the installation",
                text: "This symbolises the act of throwing away your frustrations and negative experiences."
              },
              {
                title: "Step 3: Watch the plate shatter and lights shine through the fabric on the floor",
                text: "After shattering, the plates create a stunning visual effect as the light shines through the fabric on the floor."
              }
            ][row - 1];

            return (
              <div
                key={row}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  width: '100%',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#f3f4f6', marginBottom: '0.5rem' }}>{rowContent.title}</h3>
                  <p style={{ color: '#a1a1aa' }}>{rowContent.text}</p>
                </div>
                <div
                  style={{
                    width: '300px',
                    height: '300px',
                    background: '#232329',
                    borderRadius: '12px',
                    display: 'flex',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.24)',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}
                >
                  <Image
                    src={`/instructionCard-${row}.png`}
                    alt={`instructions ${row}`}
                    width={220}
                    height={220}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)'
                    }}
                    priority={row === 1}
                  />
                </div>
              </div>
            );
          })}
        </section>
      </section>

      {/* Image Placeholder Section at the bottom */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '6rem auto',
          maxWidth: '1100px',
          width: '100%',
          gap: '2rem',
          minHeight: '500px',
        }}
      >
        <div
          style={{
            flex: '0 0 600px',
            maxWidth: '600px',
            minHeight: '420px',
            aspectRatio: '16/10',
            background: '#232329',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 16px rgba(0,0,0,0.24)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Slideshow />
        </div>
        <div style={{ flex: 1, color: '#f3f4f6', textAlign: 'left', minWidth: 0 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Installation Close-up</h2>
          <p style={{ color: '#a1a1aa', fontSize: '1.1rem' }}>
            Here you can see a detailed image of the installation. It is made out of wood and plexiglass, with a calculated height to ensure the safety of the user. The lights get powered by a Raspberry Pi, which only respond to a microphone attached to the back side.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
          background: '#26272e',
          borderRadius: '16px',
          padding: '2rem 0',
          marginLeft: '4vw',
          marginRight: '4vw'
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: '0.5em 0', color: '#f3f4f6' }}>The Team</h1>
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '4rem',
            marginBottom: '4rem',
            paddingLeft: '0',
            paddingRight: '0'
          }}
        >
          {[
            {
              title: "Selin",
              text: "Design and Communication."
            },
            {
              title: "Shania",
              text: "Coding and Electronics."
            },
            {
              title: "Palina",
              text: "Materials and Construction."
            }
          ].map((member, i) => (
            <div
              key={i}
              style={{
                background: '#232329',
                padding: '1.2em',
                borderRadius: '0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.24)',
                width: '130px',
                height: '220px',
                minWidth: '130px',
                maxWidth: '130px',
                minHeight: '220px',
                maxHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                WebkitClipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                margin: '0 1.5rem',
              }}
            >
              <h2 style={{ color: '#f3f4f6', fontSize: '1.3rem', marginBottom: '0.5em' }}>{member.title}</h2>
              <p style={{ color: '#a1a1aa', textAlign: 'center', fontSize: '1rem' }}>
                {member.text}
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
