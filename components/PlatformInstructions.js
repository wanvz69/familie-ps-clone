import { useState } from 'react'
import styles from '../styles/Home.module.css'

const platforms = [
  { 
    name: 'Windows', 
    icon: '🖥️',
    instructions: 'Download our Windows installer and follow the on-screen instructions to connect to Familie PS.' 
  },
  { 
    name: 'Android', 
    icon: '📱',
    instructions: 'Install via APK download and run the app to connect directly to our private server.' 
  },
  { 
    name: 'iOS', 
    icon: '📱',
    instructions: 'Visit our download page from your iOS device and follow the installation guide.' 
  },
  { 
    name: 'Mac', 
    icon: '💻',
    instructions: 'Download the Mac version and follow our detailed installation guide to get started.' 
  },
]

export default function PlatformInstructions() {
  const [activePlatform, setActivePlatform] = useState(platforms[0])

  return (
    <section id="platform" className={styles.platformSection}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Connect to Familie PS</h2>
        <p>Follow these simple steps to join our private server on your device</p>
        
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2rem', 
            color: '#333',
            fontWeight: '600'
          }}>
            Choose your platform:
          </h3>
          
          <div className={styles.platformList}>
            {platforms.map((platform, index) => (
              <button
                key={index}
                className={`${styles.platformButton} ${activePlatform.name === platform.name ? styles.active : ''}`}
                onClick={() => setActivePlatform(platform)}
              >
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '0.5rem' 
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{platform.icon}</span>
                  <span>{platform.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.platformInstructions}>
          <h3>
            {activePlatform.icon} {activePlatform.name} Connection Instructions
          </h3>
          <p>{activePlatform.instructions}</p>
          
          {activePlatform.name === 'Windows' && (
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ 
                background: '#e3f2fd', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #bbdefb'
              }}>
                <strong>Step-by-step:</strong>
                <ol style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                  <li>Download the Familie PS launcher</li>
                  <li>Run the installer as administrator</li>
                  <li>Launch the game and enjoy!</li>
                </ol>
              </div>
            </div>
          )}

          {activePlatform.name === 'Android' && (
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ 
                background: '#e8f5e8', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #c8e6c9'
              }}>
                <strong>Requirements:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                  <li>Android 5.0 or higher</li>
                  <li>Allow installation from unknown sources</li>
                  <li>Stable internet connection</li>
                </ul>
              </div>
            </div>
          )}

          {activePlatform.name === 'iOS' && (
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ 
                background: '#fff3e0', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #ffcc02'
              }}>
                <strong>Note:</strong>
                <p style={{ marginTop: '0.5rem', margin: 0 }}>
                  iOS installation requires additional steps due to Apple's security policies. 
                  Please follow our detailed guide carefully.
                </p>
              </div>
            </div>
          )}

          {activePlatform.name === 'Mac' && (
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ 
                background: '#f3e5f5', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #ce93d8'
              }}>
                <strong>System Requirements:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                  <li>macOS 10.12 or later</li>
                  <li>4GB RAM minimum</li>
                  <li>1GB free storage space</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: 'white'
        }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>
            Choose a platform to get started
          </h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Select one of the options above to see connection instructions
          </p>
        </div>
      </div>
    </section>
  )
}
