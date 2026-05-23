import { useState } from 'react'
import { ShieldCheck, ChartPieSlice, Receipt, Package, Users } from '@phosphor-icons/react'
import APOverview from '../admin/APOverview'
import APOrders from '../admin/APOrders'
import APInventory from '../admin/APInventory'
import APCustomers from '../admin/APCustomers'

const sidebarItems = [
  { id: 'overview', label: 'نمای کلی', icon: ChartPieSlice },
  { id: 'orders', label: 'سفارشات سامانه', icon: Receipt },
  { id: 'inventory', label: 'موجودی و قیمت', icon: Package },
  { id: 'customers', label: 'لیست مشتریان', icon: Users },
]

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  if (!isLoggedIn) {
    return (
      <div className="absolute inset-0 z-30 bg-bgPrimary flex items-center justify-center p-4">
        <div className="bg-bgCard p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-white/5 flex flex-col gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck weight="duotone" size={48} className="text-coral" />
            </div>
            <h2 className="text-2xl font-bold text-white">ورود مدیریت توتون‌یار</h2>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-white text-bgPrimary font-bold text-lg rounded-xl px-4 py-3.5 hover:bg-gray-200 transition-colors shadow-lg"
            >
              ورود به پنل ادمین دمو
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-bgCard border-l border-white/5 h-auto md:h-full flex flex-col shrink-0">
        <div className="p-6 border-b border-white/5 hidden md:block">
          <h3 className="text-white font-bold text-lg">پنل مدیریت</h3>
          <p className="text-textGray text-xs mt-1">نسخه دمو MVP</p>
        </div>

        <div className="flex flex-row md:flex-col gap-1 p-2 md:p-4 overflow-x-auto md:overflow-visible">
          {sidebarItems.map(item => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`md:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-textGray hover:bg-white/5'
                }`}
              >
                <Icon weight="bold" size={20} />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-bgPrimary">
        {activeTab === 'overview' && <APOverview />}
        {activeTab === 'orders' && <APOrders />}
        {activeTab === 'inventory' && <APInventory />}
        {activeTab === 'customers' && <APCustomers />}
      </div>
    </div>
  )
}
