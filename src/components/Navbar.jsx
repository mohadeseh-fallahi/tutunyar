import { Package, List, UserCircle, ShieldCheck } from '@phosphor-icons/react'

const tabs = [
  { id: 'home', label: 'صفحه اصلی' },
  { id: 'business-model', label: 'پرونده کسب و کار' },
  { id: 'marketing', label: 'برنامه بازاریابی' },
  { id: 'roadmap', label: 'نقشه راه' },
]

export default function Navbar({ currentView, onNav, onToggleMobile }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-bgPrimary/95 backdrop-blur-md border-b border-bgCard z-50 flex items-center justify-between px-4 lg:px-12 w-full">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNav('home')}>
        <Package size={36} weight="fill" className="text-gold" />
        <span className="text-2xl font-bold text-white tracking-wide">توتون‌یار</span>
      </div>

      <div className="hidden lg:flex items-center gap-6 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onNav(tab.id)}
            className={`transition-colors hover:text-gold ${
              currentView === tab.id ? 'text-gold font-bold' : 'text-linkGray'
            }`}
          >
            {tab.label}
          </button>
        ))}

        <div className="w-px h-6 bg-white/10 mx-2" />

        <button
          onClick={() => onNav('customer-panel')}
          className="flex items-center gap-2 text-greenAccent bg-greenAccent/10 px-4 py-2 rounded-lg hover:bg-greenAccent/20 transition-colors font-medium"
        >
          <UserCircle size={18} />
          دموی پنل مشتری
        </button>
        <button
          onClick={() => onNav('admin-panel')}
          className="flex items-center gap-2 text-greenAccent bg-greenAccent/10 px-4 py-2 rounded-lg hover:bg-greenAccent/20 transition-colors font-medium"
        >
          <ShieldCheck size={18} />
          دموی پنل ادمین
        </button>
      </div>

      <button onClick={onToggleMobile} className="lg:hidden text-white text-2xl p-2 rounded hover:bg-white/5">
        <List size={28} />
      </button>
    </nav>
  )
}
