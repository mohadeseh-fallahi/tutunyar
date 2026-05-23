import { mockCustomers } from '../../data/mockData'
import { formatMoney } from '../../utils/formatMoney'

export default function APCustomers() {
  const badgeColor = (status) => {
    if (status === 'طلایی') return 'bg-gold/20 text-gold'
    if (status === 'پلاتینوم') return 'bg-white/20 text-white'
    return 'bg-textGray/20 text-textGray'
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">لیست مشتریان و اعتبارات</h2>
      <div className="bg-bgCard rounded-xl border border-white/5 overflow-x-auto">
        <table className="w-full text-right text-sm whitespace-nowrap">
          <thead className="bg-bgPrimary text-textGray border-b border-white/5">
            <tr>
              <th className="p-3">نام فروشگاه</th>
              <th className="p-3">موبایل</th>
              <th className="p-3">سقف اعتبار</th>
              <th className="p-3">مصرف شده</th>
              <th className="p-3">سطح اعتباری</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-white/5">
            {mockCustomers.map(c => (
              <tr key={c.id} className="hover:bg-white/5 border-b border-white/5">
                <td className="p-3 font-medium text-white">{c.name}</td>
                <td className="p-3 text-textGray font-sans">{c.phone}</td>
                <td className="p-3 text-white">{formatMoney(c.credit)}</td>
                <td className="p-3 text-coral">{formatMoney(c.used)}</td>
                <td className="p-3"><span className={`px-2 py-1 rounded text-xs ${badgeColor(c.status)}`}>{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
