import { mockOrders } from '../../data/mockData'
import { formatMoney } from '../../utils/formatMoney'

export default function APOrders() {
  const statusColor = (status) => {
    if (status === 'تحویل شده') return 'text-greenAccent'
    if (status === 'در انتظار') return 'text-gold'
    return 'text-blue-400'
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">مدیریت سفارشات</h2>
      <div className="bg-bgCard rounded-xl border border-white/5 overflow-x-auto">
        <table className="w-full text-right text-sm whitespace-nowrap">
          <thead className="bg-bgPrimary text-textGray border-b border-white/5">
            <tr>
              <th className="p-3">شماره</th>
              <th className="p-3">مشتری</th>
              <th className="p-3">مبلغ</th>
              <th className="p-3">نوع پرداخت</th>
              <th className="p-3">وضعیت فعلی</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-white/5">
            {mockOrders.map(o => (
              <tr key={o.id} className="hover:bg-white/5 border-b border-white/5">
                <td className="p-3 font-medium">{o.id}</td>
                <td className="p-3">{o.customer}</td>
                <td className="p-3 font-bold text-white">{formatMoney(o.total)}</td>
                <td className="p-3 text-textGray text-xs">{o.payment}</td>
                <td className={`p-3 text-xs font-bold ${statusColor(o.status)}`}>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
