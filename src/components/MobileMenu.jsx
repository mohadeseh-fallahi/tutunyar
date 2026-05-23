import { UserCircle, ShieldCheck } from '@phosphor-icons/react'

const tabs = [
  { id: 'home', label: 'صفحه اصلی' },
  { id: 'business-model', label: 'مدل کسب و کار' },
  { id: 'marketing', label: 'برنامه بازاریابی' },
  { id: 'roadmap', label: 'نقشه راه' },
]

export default function MobileMenu({ currentView, onNav, onClose }) {
  const go = (id) => { onNav(id); onClose(); }

  return (
    <div className="fixed top-20 left-0 right-0 bg-bgPrimary border-b border-bgCard z-40 flex flex-col lg:hidden w-full px-4 py-4 space-y-4 shadow-xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => go(tab.id)}
          className={`w-full text-right p-2 ${currentView === tab.id ? 'text-gold font-bold' : 'text-linkGray'}`}
        >
          {tab.label}
        </button>
      ))}
      <div className="border-t border-white/10 my-2" />
      <button onClick={() => go('customer-panel')} className="w-full text-right text-greenAccent bg-greenAccent/10 p-3 rounded-lg flex items-center gap-2">
        <UserCircle size={20} /> دموی پنل مشتری
      </button>
      <button onClick={() => go('admin-panel')} className="w-full text-right text-greenAccent bg-greenAccent/10 p-3 rounded-lg flex items-center gap-2">
        <ShieldCheck size={20} /> دموی پنل ادمین
      </button>
    </div>
  )
}
