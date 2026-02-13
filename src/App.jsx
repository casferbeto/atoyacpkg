import { useState, useCallback } from 'react'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Industries from './components/Industries'
import Commitment from './components/Commitment'
import Process from './components/Process'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className={`min-h-screen ${showSplash ? 'overflow-hidden h-screen' : ''} bg-diamond-pattern`}>
        <Navbar />
        <main className="tesla-snap-container">
          <Hero />
          <About />
          <Products />
          <Industries />
          <Commitment />
          <Process />
          <QuoteForm />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
