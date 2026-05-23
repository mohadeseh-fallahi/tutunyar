import { useState } from 'react'
import { MagnifyingGlass, Package, Leaf, Fire, FireSimple, Scroll, Cylinder } from '@phosphor-icons/react'
import { mockProducts } from '../../data/mockData'
import { formatMoney } from '../../utils/formatMoney'

const iconMap = {
  'ph-package': Package,
  'ph-leaf': Leaf,
  'ph-fire': Fire,
  'ph-fire-simple': FireSimple,
  'ph-scroll': Scroll,
  'ph-cylinder': Cylinder,
}

const categories = ['همه محصولات', 'سیگار', 'تنباکو', 'لوازم و فندک']

export default function CPProducts({ addToCart }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('همه محصولات')

  const filtered = mockProducts.filter(p => {
    const matchSearch = p.name.includes(search)
    const matchCat = activeCategory === 'همه محصولات' ||
      (activeCategory === 'لوازم و فندک' ? (p.category === 'لوازم' || p.category === 'فندک') : p.category === activeCategory)
    return matchSearch && matchCat
  })

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 flex-shrink-0">
        <h2 className="text-2xl font-bold text-white">لیست محصولات</h2>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="جستجوی نام..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-bgCard border border-white/10 rounded-xl px-4 py-2.5 pl-10 text-white focus:outline-none focus:border-gold transition-colors text-sm"
          />
          <MagnifyingGlass weight="bold" className="absolute left-3 top-3 text-textGray" size={16} />
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 flex-shrink-0">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-white/10 text-white font-medium'
                : 'bg-transparent border border-white/10 text-textGray hover:text-white hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pb-10">
        {filtered.map(p => {
          const Icon = iconMap[p.image] || Package
          const stockColor = p.stock > 100 ? 'text-greenAccent' : (p.stock > 0 ? 'text-gold' : 'text-coral')
          const stockText = p.stock > 0 ? `موجود: ${p.stock}` : 'ناموجود'

          return (
            <div key={p.id} className="bg-bgCard border border-white/5 rounded-2xl p-4 flex flex-col gap-4 group">
              <div className="w-full h-32 bg-bgPrimary rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden group-hover:border-gold/30 transition-colors">
                <Icon weight="duotone" size={48} className="text-textGray/50 group-hover:scale-110 group-hover:text-gold/50 transition-all" />
                <span className="absolute top-2 right-2 bg-bgCard px-2 py-1 rounded text-[10px] text-textGray border border-white/10">{p.category}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{p.name}</h3>
                <div className={`flex items-center gap-1 text-xs font-bold ${stockColor} mb-2`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  {stockText}
                </div>
                <div className="text-gold font-bold text-base mt-auto">{formatMoney(p.price)}</div>
              </div>
              <button
                onClick={() => addToCart(p)}
                disabled={p.stock === 0}
                className={`w-full border border-gold text-gold py-2 rounded-xl text-sm font-bold transition-colors ${
                  p.stock === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold hover:text-bgPrimary cursor-pointer'
                }`}
              >
                افزودن به سبد
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
