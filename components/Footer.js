export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white',
      padding: '3rem 2rem 2rem 2rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Brand Section */}
        <div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Familie PS
          </h3>
          <p style={{ 
            color: '#bdc3c7', 
            lineHeight: '1.6',
            margin: 0
          }}>
            The most exciting Growtopia private server with unique features and an active community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            marginBottom: '1rem',
            color: '#ecf0f1'
          }}>
            Quick Links
          </h4>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {[
              { name: 'Home', href: '#hero' },
              { name: 'Connect', href: '#platform' },
              { name: 'News', href: '#' },
              { name: 'Features', href: '#features' },
              { name: 'Shop', href: '#' }
            ].map((link, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <a 
                  href={link.href}
                  style={{ 
                    color: '#bdc3c7', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3498db'}
                  onMouseOut={(e) => e.target.style.color = '#bdc3c7'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            marginBottom: '1rem',
            color: '#ecf0f1'
          }}>
            Resources
          </h4>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {[
              { name: 'FAQ', href: '#' },
              { name: 'Support', href: '#' },
              { name: 'Rules', href: '#' },
              { name: 'Changelog', href: '#' }
            ].map((link, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <a 
                  href={link.href}
                  style={{ 
                    color: '#bdc3c7', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3498db'}
                  onMouseOut={(e) => e.target.style.color = '#bdc3c7'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            marginBottom: '1rem',
            color: '#ecf0f1'
          }}>
            Legal
          </h4>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {[
              { name: 'Terms of Service', href: '#' },
              { name: 'Privacy Policy', href: '#' },
              { name: 'Cookie Policy', href: '#' }
            ].map((link, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <a 
                  href={link.href}
                  style={{ 
                    color: '#bdc3c7', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3498db'}
                  onMouseOut={(e) => e.target.style.color = '#bdc3c7'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{
        borderTop: '1px solid #34495e',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ 
          color: '#95a5a6', 
          fontSize: '0.9rem',
          margin: 0
        }}>
          © {currentYear} Familie PS. All rights reserved. Not affiliated with Growtopia or Ubisoft.
        </p>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '1rem'
        }}>
          <button
            style={{
              background: '#7289da',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#5b6eae'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#7289da'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Discord
          </button>
        </div>
      </div>
    </footer>
  )
}
