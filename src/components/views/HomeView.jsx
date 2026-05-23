import { Rocket, ArrowLeft, PresentationChart, Users, Clock, CreditCard, Cube, CurrencyCircleDollar, Warehouse } from '@phosphor-icons/react'
import Footer from '../Footer'

export default function HomeView({ onNav }) {
  return (
    <section className="w-full">
      {/* Hero */}
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-gold bg-gold/10 px-4 py-2 rounded-full w-max text-sm font-medium border border-gold/20">
            <Rocket weight="fill" size={16} /> MVP دموی عملیاتی
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            تامین بی‌دغدغه،<br />
            <span className="text-gold mt-2 block">فروش بی‌وقفه.</span>
          </h1>
          <p className="text-textGray text-base sm:text-lg leading-relaxed max-w-xl">
            پلتفرم جامع عمده‌فروشی محصولات دخانی ویژه خرده‌فروشان سراسر ایران. با دسترسی به موجودی لحظه‌ای، قیمت‌های شفاف و امکان خرید اعتباری، کسب‌وکار خود را توسعه دهید.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <button
              onClick={() => onNav('customer-panel')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-gold text-gold font-bold hover:bg-gold hover:text-bgPrimary transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-gold/10"
            >
              ورود به پنل سفارشات
              <ArrowLeft weight="bold" size={18} />
            </button>
            <button
              onClick={() => onNav('business-model')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-coral text-white font-bold hover:bg-opacity-90 transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-coral/20"
            >
              بررسی پرونده کسب‌وکار
              <PresentationChart weight="bold" size={18} />
            </button>
          </div>

          <div className="mt-6 pt-8 border-t border-white/10 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Users weight="fill" className="text-textGray text-lg" size={20} />
              </div>
              <div>
                <div className="text-white font-bold text-lg">+۵۰۰</div>
                <div className="text-textGray">مشتری بالقوه محلی</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Clock weight="fill" className="text-textGray text-lg" size={20} />
              </div>
              <div>
                <div className="text-white font-bold text-lg">۲۴/۷</div>
                <div className="text-textGray">دسترسی به انبار</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="bg-bgCard rounded-3xl aspect-[4/3] flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-bgPrimary/80 to-transparent z-10" />
            <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwVjBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB6IiBmaWxsPSIjRThFQUVEIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]" />
            <div className="z-20 flex flex-col items-center text-center p-6">
              <Warehouse size={96} weight="duotone" className="text-white/40 mb-6 drop-shadow-lg group-hover:text-gold/60 transition-colors" />
              <h3 className="text-2xl text-white font-bold tracking-wide">تصویر انبار مدرن</h3>
              <p className="text-sm text-textGray mt-3 bg-bgPrimary/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                (جایگاه عکس واقعی انبار یا محصولات در نسخه نهایی)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Tootonyar */}
      <div className="w-full bg-bgDark py-20 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-3 h-3 bg-gold shadow-[0_0_10px_rgba(230,168,23,0.5)]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gold">◾ چرا توتون‌یار؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bgCard p-8 rounded-2xl flex flex-col gap-5 border border-white/5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-bgPrimary border border-white/10 flex items-center justify-center mb-2 group-hover:bg-gold/10 transition-colors">
                <CreditCard weight="duotone" size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold text-gold">خرید اعتباری (چکی)</h3>
              <p className="text-white text-base leading-loose opacity-90">
                اختصاص سقف اعتبار به مشتریان معتبر جهت خرید بدون نیاز به پرداخت نقدی در لحظه ثبت سفارش. سیستم هوشمند مدیریت بدهی و سررسید.
              </p>
            </div>

            <div className="bg-bgCard p-8 rounded-2xl flex flex-col gap-5 border border-white/5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-bgPrimary border border-white/10 flex items-center justify-center mb-2 group-hover:bg-gold/10 transition-colors">
                <Cube weight="duotone" size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold text-gold">موجودی لحظه‌ای</h3>
              <p className="text-white text-base leading-loose opacity-90">
                پایان مشکل عدم تامین بار. مشاهده دقیق موجودی انبار پیش از ثبت نهایی سفارش. تضمین تحویل تمامی اقلام موجود در سبد خرید.
              </p>
            </div>

            <div className="bg-bgCard p-8 rounded-2xl flex flex-col gap-5 border border-white/5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-bgPrimary border border-white/10 flex items-center justify-center mb-2 group-hover:bg-gold/10 transition-colors">
                <CurrencyCircleDollar weight="duotone" size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold text-gold">شفافیت قیمت‌گذاری</h3>
              <p className="text-white text-base leading-loose opacity-90">
                حذف واسطه‌ها و دسترسی مستقیم به قیمت‌های مصوب عمده‌فروشی. اعمال اتوماتیک تخفیفات پلکانی بر اساس حجم خرید.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
