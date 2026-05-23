export default function APOverview() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">خلاصه آماری پلتفرم</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-bgCard p-5 rounded-xl border border-white/5">
          <div className="text-textGray text-sm mb-1">کل فروش (دمو)</div>
          <div className="text-2xl font-bold text-white">۶۸,۴۵۰,۰۰۰ <span className="text-xs text-textGray">تومان</span></div>
        </div>
        <div className="bg-bgCard p-5 rounded-xl border border-white/5">
          <div className="text-textGray text-sm mb-1">سفارشات ثبت شده</div>
          <div className="text-2xl font-bold text-white">۱۰ <span className="text-xs text-textGray">عدد</span></div>
        </div>
        <div className="bg-bgCard p-5 rounded-xl border border-white/5">
          <div className="text-textGray text-sm mb-1">سفارشات در انتظار تایید</div>
          <div className="text-2xl font-bold text-coral">۶ <span className="text-xs text-textGray">عدد</span></div>
        </div>
        <div className="bg-bgCard p-5 rounded-xl border border-white/5">
          <div className="text-textGray text-sm mb-1">مشتریان فعال</div>
          <div className="text-2xl font-bold text-white">۵ <span className="text-xs text-textGray">نفر</span></div>
        </div>
      </div>
    </div>
  )
}
