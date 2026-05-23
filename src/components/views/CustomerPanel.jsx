import { useState } from 'react'
import { UserCircle, SquaresFour, Storefront, ShoppingCart, Receipt, Wallet, SignOut, Phone, LockKey } from '@phosphor-icons/react'
import CPDashboard from '../customer/CPDashboard'
import CPProducts from '../customer/CPProducts'
import CPCart from '../customer/CPCart'
import CPOrders from '../customer/CPOrders'
import CPCredit from '../customer/CPCredit'

const sidebarItems = [
  { id: 'dashboard', label: 'داشبورد', icon: SquaresFour },
  { id: 'products', label: 'محصولات', icon: Storefront },
  { id: 'cart', label: 'سبد خرید', icon: ShoppingCart },
  { id: 'orders', label: 'سفارشات من', icon: Receipt },
  { id: 'credit', label: 'اعتبار و حساب', icon: Wallet },
]

export default function CustomerPanel({ cart, addToCart, updateQuantity, removeFromCart, clearCart, payMethod, setPayMethod }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  if (!isLoggedIn) {
    return (
      <div className="absolute inset-0 z-30 bg-bgPrimary flex items-center justify-center p-4">
        <div className="bg-bgCard p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-white/5 flex flex-col gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-greenAccent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCircle weight="duotone" size={48} className="text-greenAccent" />
            </div>
            <h2 className="text-2xl font-bold text-white">ورود به پنل مشتری</h2>
            <p className="text-textGray text-sm mt-2">برای مشاهده دمو روی دکمه زیر کلیک کنید.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-bgPrimary border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
              <Phone weight="fill" className="text-textGray" size={16} />
              <input type="text" value="۰۹۱۷۱۲۳۴۵۶۷" className="bg-transparent text-white w-full focus:outline-none" readOnly />
            </div>
            <div className="bg-bgPrimary border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
              <LockKey weight="fill" className="text-textGray" size={16} />
              <input type="password" value="123456" className="bg-transparent text-white w-full focus:outline-none" readOnly />
            </div>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-greenAccent text-bgPrimary font-bold text-lg rounded-xl px-4 py-3.5 hover:bg-opacity-90 transition-colors shadow-[0_0_15px_rgba(76,175,80,0.3)] mt-2"
            >
              ورود به داشبورد
            </button>
          </div>
          <div className="text-center text-xs text-textGray/60 mt-2">داده‌ها نمایشی (Mock) می‌باشند</div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-bgCard border-l border-white/5 h-auto md:h-full flex flex-col shrink-0 overflow-y-auto">
        <div className="p-6 border-b border-white/5 hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-gold to-orange-500 rounded-full flex items-center justify-center text-white font-bold">ش</div>
            <div>
              <h3 className="text-white font-bold truncate">فروشگاه شیراز مارکت</h3>
              <p className="text-gold text-xs">سطح: مشتری طلایی</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-1 p-2 md:p-4 overflow-x-auto md:overflow-visible flex-1">
          {sidebarItems.map(item => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-shrink-0 md:w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-textGray hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon weight="bold" size={20} />
                  <span className="hidden md:inline font-medium">{item.label}</span>
                </div>
                {item.id === 'cart' && cartCount > 0 && (
                  <span className="bg-coral text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>
                )}
              </button>
            )
          })}

          <div className="md:mt-auto pt-2 md:pt-4 md:border-t border-white/5">
            <button onClick={() => setIsLoggedIn(false)} className="flex-shrink-0 md:w-full flex items-center gap-3 px-4 py-3 rounded-xl text-coral hover:bg-coral/10 transition-colors">
              <SignOut weight="bold" size={20} />
              <span className="hidden md:inline font-medium">خروج</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-bgPrimary">
        {activeTab === 'dashboard' && <CPDashboard onNavView={setActiveTab} />}
        {activeTab === 'products' && <CPProducts addToCart={addToCart} />}
        {activeTab === 'cart' && <CPCart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} clearCart={clearCart} payMethod={payMethod} setPayMethod={setPayMethod} />}
        {activeTab === 'orders' && <CPOrders />}
        {activeTab === 'credit' && <CPCredit />}
      </div>
    </div>
  )
}
