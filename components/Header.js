import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '1.8rem',
        fontWeight: '700',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Familie PS
      </div>
      
      <nav style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <button
          onClick={() => scrollToSection('hero')}
          style={{
            background: 'none',
            color: '#333',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            padding: '0.5rem 0'
          }}
          onMouseOver={(e) => e.target.style.color = '#667eea'}
          onMouseOut={(e) => e.target.style.color = '#333'}
        >
          Home
        </button>
        
        <button
          onClick={() => scrollToSection('platform')}
          style={{
            background: 'none',
            color: '#333',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            padding: '0.5rem 0'
          }}
          onMouseOver={(e) => e.target.style.color = '#667eea'}
          onMouseOut={(e) => e.target.style.color = '#333'}
        >
          Connect
        </button>
        
        <button
          onClick={() => scrollToSection('features')}
          style={{
            background: 'none',
            color: '#333',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            padding: '0.5rem 0'
          }}
          onMouseOver={(e) => e.target.style.color = '#667eea'}
          onMouseOut={(e) => e.target.style.color = '#333'}
        >
          Features
        </button>
        
        <button
          onClick={() => scrollToSection('platform')}
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
            color: 'white',
            padding: '0.7rem 1.5rem',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(255, 107, 107, 0.3)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 2px 10px rgba(255, 107, 107, 0.3)'
          }}
        >
          Join Now
        </button>
      </nav>
    </header>
  )
}
