import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import HomeView from './components/views/HomeView'
import BusinessModelView from './components/views/BusinessModelView'
import MarketingView from './components/views/MarketingView'
import RoadmapView from './components/views/RoadmapView'
import CustomerPanel from './components/views/CustomerPanel'
import AdminPanel from './components/views/AdminPanel'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [payMethod, setPayMethod] = useState('credit')

  const navigate = (view) => {
    setCurrentView(view)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product) => {
    if (product.stock === 0) return
    setCart(prev => {
      const existing = prev.find(c => c.id === product.id)
      if (existing) {
        return prev.map(c => c.id === product.id ? { ...c, qty: c.qty + 1 } : c)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const updateQuantity = (id, delta) => {
    setCart(prev => {
      return prev.map(c => {
        if (c.id !== id) return c
        const newQty = c.qty + delta
        return newQty <= 0 ? null : { ...c, qty: newQty }
      }).filter(Boolean)
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(c => c.id !== id))
  const clearCart = () => setCart([])

  const isPanel = currentView === 'customer-panel' || currentView === 'admin-panel'

  return (
    <div className="bg-bgPrimary text-white w-full min-h-screen overflow-x-hidden flex flex-col">
      <Navbar currentView={currentView} onNav={navigate} onToggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)} />
      {mobileMenuOpen && <MobileMenu currentView={currentView} onNav={navigate} onClose={() => setMobileMenuOpen(false)} />}

      <main className="flex-1 w-full h-full pt-20">
        {currentView === 'home' && <HomeView onNav={navigate} />}
        {currentView === 'business-model' && <BusinessModelView />}
        {currentView === 'marketing' && <MarketingView />}
        {currentView === 'roadmap' && <RoadmapView />}
        {currentView === 'customer-panel' && (
          <section className="w-full h-[calc(100vh-80px)] overflow-hidden bg-bgPrimary relative">
            <CustomerPanel
              cart={cart}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              payMethod={payMethod}
              setPayMethod={setPayMethod}
            />
          </section>
        )}
        {currentView === 'admin-panel' && (
          <section className="w-full h-[calc(100vh-80px)] overflow-hidden bg-bgPrimary relative">
            <AdminPanel />
          </section>
        )}
      </main>
    </div>
  )
}

export default App
