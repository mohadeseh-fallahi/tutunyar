import { useState } from 'react'
import { mockProducts } from '../../data/mockData'

export default function APInventory() {
  const [inventory, setInventory] = useState(mockProducts.map(p => ({ ...p })))

  const updateField = (id, field, value) => {
    setInventory(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">مدیریت موجودی و قیمت‌گذاری</h2>
      <div className="bg-bgCard rounded-xl border border-white/5 overflow-x-auto">
        <table className="w-full text-right text-sm whitespace-nowrap">
          <thead className="bg-bgPrimary text-textGray border-b border-white/5">
            <tr>
              <th className="p-3">شناسه کالا</th>
              <th className="p-3">نام محصول</th>
              <th className="p-3">دسته</th>
              <th className="p-3 w-32">قیمت (تومان)</th>
              <th className="p-3 w-24">موجودی</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-white/5">
            {inventory.map(p => (
              <tr key={p.id} className="hover:bg-white/5 border-b border-white/5">
                <td className="p-3 text-textGray text-xs">PRD-{p.id}</td>
                <td className="p-3 text-white font-medium">{p.name}</td>
                <td className="p-3 text-textGray text-xs">{p.category}</td>
                <td className="p-3">
                  <input
                    type="text"
                    value={p.price}
                    onChange={(e) => updateField(p.id, 'price', e.target.value)}
                    className="bg-bgPrimary border border-white/10 rounded px-2 py-1 text-white w-full text-left font-sans text-sm focus:border-gold outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    value={p.stock}
                    onChange={(e) => updateField(p.id, 'stock', parseInt(e.target.value) || 0)}
                    className="bg-bgPrimary border border-white/10 rounded px-2 py-1 text-white w-full text-center font-sans text-sm focus:border-gold outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
