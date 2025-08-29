import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import PlatformInstructions from '../components/PlatformInstructions'
import SpecialFeatures from '../components/SpecialFeatures'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Familie PS - Growtopia Private Server</title>
        <meta name="description" content="The most exciting Growtopia private server with unique features, active community, and regular events. Join thousands of players today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="growtopia, private server, familie ps, gaming, multiplayer, community" />
        <meta property="og:title" content="Familie PS - Growtopia Private Server" />
        <meta property="og:description" content="The most exciting Growtopia private server with unique features, active community, and regular events." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Familie PS - Growtopia Private Server" />
        <meta name="twitter:description" content="The most exciting Growtopia private server with unique features, active community, and regular events." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <Header />
      
      <main>
        <HeroSection />
        <PlatformInstructions />
        <SpecialFeatures />
      </main>
      
      <Footer />
    </>
  )
}
