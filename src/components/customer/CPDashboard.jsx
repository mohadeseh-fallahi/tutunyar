import { Wallet, Package, WarningCircle, Plus, ArrowLeft } from '@phosphor-icons/react'

export default function CPDashboard({ onNavView }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">خلاصه وضعیت حساب</h2>
        <p className="text-textGray text-sm">به داشبورد توتون‌یار خوش آمدید.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-bgCard to-bgPrimary p-6 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute -left-6 -top-6 w-24 h-24 bg-greenAccent/10 rounded-full blur-xl" />
          <div className="flex justify-between items-start mb-4 relative">
            <h3 className="text-textGray font-medium">اعتبار خرید قابل استفاده</h3>
            <div className="p-2 bg-greenAccent/10 rounded-lg"><Wallet weight="bold" size={20} className="text-greenAccent" /></div>
          </div>
          <div className="text-3xl font-bold text-white relative">۳۸,۰۰۰,۰۰۰ <span className="text-sm font-normal text-textGray">تومان</span></div>
          <div className="mt-4 w-full bg-bgPrimary h-2 rounded-full overflow-hidden">
            <div className="bg-greenAccent h-full w-[24%]" />
          </div>
          <p className="text-xs text-textGray mt-2">۲۴٪ از کل اعتبار مصرف شده</p>
        </div>

        <div className="bg-gradient-to-br from-bgCard to-bgPrimary p-6 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute -left-6 -top-6 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
          <div className="flex justify-between items-start mb-4 relative">
            <h3 className="text-textGray font-medium">سفارشات جاری</h3>
            <div className="p-2 bg-gold/10 rounded-lg"><Package weight="bold" size={20} className="text-gold" /></div>
          </div>
          <div className="text-3xl font-bold text-white relative">۲ <span className="text-sm font-normal text-textGray">سفارش در انتظار</span></div>
          <button onClick={() => onNavView('orders')} className="mt-4 text-xs text-gold hover:underline flex items-center gap-1">
            پیگیری سفارشات <ArrowLeft weight="bold" size={12} />
          </button>
        </div>

        <div className="bg-gradient-to-br from-bgCard to-bgPrimary p-6 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute -left-6 -top-6 w-24 h-24 bg-coral/10 rounded-full blur-xl" />
          <div className="flex justify-between items-start mb-4 relative">
            <h3 className="text-textGray font-medium">بدهی سررسید شده</h3>
            <div className="p-2 bg-coral/10 rounded-lg"><WarningCircle weight="bold" size={20} className="text-coral" /></div>
          </div>
          <div className="text-3xl font-bold text-white relative">۰ <span className="text-sm font-normal text-textGray">تومان</span></div>
          <div className="mt-4 inline-block bg-greenAccent/10 text-greenAccent text-xs px-2 py-1 rounded">وضعیت حساب: عالی</div>
        </div>
      </div>

      <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white">دسترسی سریع</h3>
        </div>
        <div className="flex gap-4">
          <button onClick={() => onNavView('products')} className="bg-gold text-bgPrimary font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-colors shadow-lg shadow-gold/20 flex items-center gap-2">
            <Plus weight="bold" size={18} /> ثبت سفارش جدید
          </button>
        </div>
      </div>
    </div>
  )
}
