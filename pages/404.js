export default function Custom404() {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '4rem', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#666' }}>This page could not be found.</h2>
      <a 
        href="/" 
        style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}
      >
        Return to Familie PS
      </a>
    </div>
  )
}
