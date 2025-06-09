'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

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
        className={styles.heroImgTag}
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

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className={styles.scrollToTopButton}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <span style={{ color: '#f3f4f6' }}>Consequences</span>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#team" className={styles.navLink}>Group 4</a>
        </div>
      </nav>

      {/* Fullscreen Image Placeholder */}
      <div className={styles.hero}>
        {/* Left column: text */}
        <div className={styles.heroText}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>All frustrations in one</h2>
          <p style={{ fontSize: '1.25rem', color: '#a1a1aa' }}>
            The installation that allowed you to shatter plates.
          </p>
        </div>
        {/* Right column: image */}
        <div className={styles.heroImage}>
          <Image
            src="/inside_image.png"
            alt="Installatie Image"
            width={1200}
            height={1200}
            className={styles.heroImgTag}
            priority
          />
        </div>
      </div>

      {/* Video Placeholder Section */}
      <section className={styles.videoSection}>
        <h2 id="about" className={styles.videoTitle}>
          What is the Concequences installation about?
        </h2>
        <p className={styles.videoDescription}>
          This installation uses a Raspberry Pi and Python to convert sound, registered via a microphone, into various LED patterns. When fragile objects, such as plates, are thrown down from above and break, the resulting sound triggers a reaction in the LEDs, which begin to glow. This play of light symbolizes the impact of aggression and anger on your living environment, even when those consequences are not immediately visible.
          <br /><br />
          The installation is constructed from plexiglass and wood, while the connecting pieces are made from PLA. These parts were designed in Blender and then 3D printed.
        </p>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/g39wajMhOLU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.videoIframe}
          ></iframe>
        </div>
      </section>

      {/* Hero Section */}
      <section className={styles.howItWorksSection}>
        <h1 id="features" className={styles.sectionTitle}>How it works</h1>
        <section className={styles.howItWorksInner}>
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
              <div key={row} className={styles.howItWorksStep}>
                <div className={styles.howItWorksStepText}>
                  <h3 style={{ color: '#f3f4f6', marginBottom: '0.5rem' }}>{rowContent.title}</h3>
                  <p style={{ color: '#a1a1aa' }}>{rowContent.text}</p>
                </div>
                <div className={styles.howItWorksStepImageWrapper}>
                  <Image
                    src={`/instructionCard-${row}.png`}
                    alt={`instructions ${row}`}
                    width={220}
                    height={220}
                    className={styles.howItWorksStepImage}
                    priority={row === 1}
                  />
                </div>
              </div>
            );
          })}
        </section>
      </section>

      {/* Image Placeholder Section at the bottom */}
      <section className={styles.installationSection}>
        <div className={styles.installationSlideshowWrapper}>
          <Slideshow />
        </div>
        <div className={styles.installationText}>
          <h2 className={styles.installationTitle}>Installation Close-up</h2>
          <p className={styles.installationDescription}>
            Here you can see a detailed image of the installation. It is made out of wood and plexiglass, with a calculated height to ensure the safety of the user. The lights get powered by a Raspberry Pi, which only respond to a microphone attached to the back side.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className={styles.teamSectionWrapper}>
        <h1 id="team" className={styles.teamSectionTitle}>The Team</h1>
        <section className={styles.teamHexagonRow}>
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
            <div key={i} className={styles.hexagon}>
              <h2 className={styles.hexagonTitle}>{member.title}</h2>
              <p className={styles.hexagonText}>{member.text}</p>
            </div>
          ))}
        </section>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
