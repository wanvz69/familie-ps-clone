import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToConnect = () => {
    const element = document.getElementById('platform')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Create array of block images for the grid
  const blockImages = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    src: i % 6 === 0 ? '/block3.png' : '/block2.png',
    alt: 'Growtopia Block'
  }))

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.heroContent} ${isLoaded ? 'fade-in' : ''}`}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            Loading...
          </div>
        </div>
        
        <h2>
          Welcome to<br />
          <span style={{ 
            background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Familie PS
          </span>
        </h2>
        
        <p>
          The most exciting Growtopia private server with unique features, active community, and regular events.
        </p>
        
        <button 
          onClick={scrollToConnect}
          className={styles.ctaButton}
        >
          Connect Now
        </button>

        {/* Character Images */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <div className={styles.imageItem}>
            <img 
              src="/gt.png" 
              alt="Growtopia Character" 
              style={{ width: '120px', height: 'auto' }}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className={styles.imageItem}>
            <img 
              src="/gt3.png" 
              alt="Growtopia Character" 
              style={{ width: '120px', height: 'auto' }}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        </div>

        {/* Block Grid */}
        <div className={styles.imageGrid}>
          {blockImages.map((block) => (
            <div key={block.id} className={styles.imageItem}>
              <img 
                src={block.src}
                alt={block.alt}
                style={{ width: '32px', height: '32px' }}
                onError={(e) => {
                  // Fallback to a colored div if image fails to load
                  e.target.style.display = 'none'
                  const fallback = document.createElement('div')
                  fallback.style.width = '32px'
                  fallback.style.height = '32px'
                  fallback.style.background = block.src.includes('block3') ? '#4a90e2' : '#7ed321'
                  fallback.style.borderRadius = '4px'
                  fallback.style.opacity = '0.8'
                  e.target.parentNode.appendChild(fallback)
                }}
              />
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: '0.7'
        }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Scroll down</span>
          <div style={{
            width: '2px',
            height: '30px',
            background: 'white',
            borderRadius: '1px',
            animation: 'pulse 2s infinite'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
