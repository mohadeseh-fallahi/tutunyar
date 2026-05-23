import { mockOrders } from '../../data/mockData'
import { formatMoney } from '../../utils/formatMoney'

export default function CPOrders() {
  const userOrders = mockOrders.filter(o => o.customer === 'فروشگاه شیراز مارکت')

  const statusColor = (status) => {
    if (status === 'تحویل شده') return 'text-greenAccent bg-greenAccent/10'
    if (status === 'در انتظار') return 'text-gold bg-gold/10'
    return 'text-blue-400 bg-blue-400/10'
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-white mb-6 flex-shrink-0">تاریخچه سفارشات</h2>
      <div className="bg-bgCard rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right whitespace-nowrap text-sm">
            <thead className="bg-bgPrimary text-textGray border-b border-white/5">
              <tr>
                <th className="p-4 font-medium">شماره سفارش</th>
                <th className="p-4 font-medium">تاریخ</th>
                <th className="p-4 font-medium">مبلغ کل</th>
                <th className="p-4 font-medium">روش پرداخت</th>
                <th className="p-4 font-medium">وضعیت</th>
                <th className="p-4 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody className="text-white divide-y divide-white/5">
              {userOrders.map(o => (
                <tr key={o.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">{o.id}</td>
                  <td className="p-4 text-textGray">{o.date}</td>
                  <td className="p-4 font-bold">{formatMoney(o.total)}</td>
                  <td className="p-4">{o.payment}</td>
                  <td className="p-4"><span className={`px-2 py-1 rounded text-xs ${statusColor(o.status)}`}>{o.status}</span></td>
                  <td className="p-4"><button className="text-gold hover:underline text-xs">جزئیات</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
