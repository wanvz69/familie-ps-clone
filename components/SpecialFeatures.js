import styles from '../styles/Home.module.css'

const features = [
  { 
    title: 'Custom Items', 
    description: 'Exclusive items and worlds that you won\'t find on the official server. Express yourself with unique cosmetics!',
    emoji: '🎨'
  },
  { 
    title: 'Boosted Rates', 
    description: 'Enjoy faster progression with increased drop rates, XP gain, and gem earnings. Less grind, more fun!',
    emoji: '⚡'
  },
  { 
    title: 'Anti-Cheat', 
    description: 'Our advanced anti-cheat system ensures fair gameplay for everyone. We take action against hackers quickly.',
    emoji: '🛡️'
  },
  { 
    title: 'Active Community', 
    description: 'Join our friendly community of players. Regular events, giveaways, and an active Discord server!',
    emoji: '👥'
  },
  { 
    title: 'Daily Rewards', 
    description: 'Log in daily to claim awesome rewards! The longer your streak, the better the prizes you\'ll receive.',
    emoji: '🎁'
  },
  { 
    title: 'Regular Updates', 
    description: 'We constantly add new content and features based on community feedback. Your voice matters!',
    emoji: '🔄'
  },
]

export default function SpecialFeatures() {
  return (
    <section id="features" className={styles.featuresSection}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>What Makes Us Special</h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666', 
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Discover the unique features that make Familie PS the best Growtopia private server
        </p>
        
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.featureCard}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3>
                <span style={{ 
                  fontSize: '1.5rem', 
                  marginRight: '0.8rem',
                  display: 'inline-block'
                }}>
                  {feature.emoji}
                </span>
                {feature.title}
              </h3>
              <p>{feature.description}</p>
              
              {/* Progress bar for visual appeal */}
              <div style={{
                marginTop: '1rem',
                height: '4px',
                background: '#f0f0f0',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  borderRadius: '2px',
                  width: `${85 + (index * 2)}%`,
                  transition: 'width 1s ease-in-out'
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          background: 'white',
          padding: '3rem 2rem',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Ready to Join Familie PS?
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem auto'
          }}>
            Join thousands of players already enjoying our private server. New adventures await!
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => {
                const element = document.getElementById('platform')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.6)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)'
              }}
            >
              Connect Now
            </button>
            
            <button
              style={{
                background: 'transparent',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: '2px solid #667eea',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#667eea'
                e.target.style.color = 'white'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#667eea'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
