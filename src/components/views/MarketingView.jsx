import { Megaphone, Storefront, WhatsappLogo, ChatCircleText } from '@phosphor-icons/react'

export default function MarketingView() {
  return (
    <section className="w-full pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="mb-12 border-b border-white/10 pb-6">
          <h2 className="text-3xl font-extrabold text-gold flex items-center gap-3">
            <Megaphone weight="fill" size={32} />
            برنامه بازاریابی
          </h2>
          <p className="text-textGray mt-4 max-w-3xl leading-relaxed">مسیر جذب خرده‌فروشان سنتی به پلتفرم دیجیتال از طریق ترکیب بازاریابی میدانی و ابزارهای آنلاین.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-gold">
              <h3 className="text-xl font-bold text-white mb-4">استراتژی جذب مشتری</h3>
              <p className="text-textGray leading-relaxed mb-4">
                با توجه به ماهیت B2B و سنتی بودن بازار هدف، استراتژی اصلی <span className="text-white font-bold">"بازاریابی رابطه-محور میدانی با ورود دیجیتال"</span> است. تیم فروش به صورت حضوری مراجعه کرده و اولین سفارش را از طریق پلتفرم برای مشتری ثبت می‌کند.
              </p>
              <h4 className="text-white font-bold mt-4 mb-2">پیام اصلی برند:</h4>
              <div className="bg-bgPrimary p-4 rounded-lg text-center text-gold font-bold text-lg border border-white/5">
                "تامین بی‌دغدغه، فروش بی‌وقفه."
              </div>
            </div>

            <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-coral">
              <h3 className="text-xl font-bold text-white mb-4">کانال‌های بازاریابی</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Storefront weight="fill" size={28} className="text-coral shrink-0" />
                  <div>
                    <div className="text-white font-bold">ویزیت حضوری مستقیم</div>
                    <div className="text-sm text-textGray">موثرترین روش برای ایجاد اعتماد اولیه و نصب اپلیکیشن/معرفی سایت.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <WhatsappLogo weight="fill" size={28} className="text-greenAccent shrink-0" />
                  <div>
                    <div className="text-white font-bold">گروه‌ها و پیام‌های WhatsApp</div>
                    <div className="text-sm text-textGray">ارسال لیست قیمت روزانه همراه با لینک مستقیم سبد خرید به پایگاه مشتریان فعلی.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ChatCircleText weight="fill" size={28} className="text-gold shrink-0" />
                  <div>
                    <div className="text-white font-bold">بازاریابی پیامکی (SMS)</div>
                    <div className="text-sm text-textGray">اطلاع‌رسانی موجود شدن بارهای کمیاب فقط برای اعضای پلتفرم.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-greenAccent">
              <h3 className="text-xl font-bold text-white mb-4">قیف بازاریابی</h3>
              <div className="flex flex-col gap-2">
                <div className="bg-bgPrimary p-3 rounded text-center border border-white/5 w-full">
                  <span className="text-white font-bold">آگاهی:</span>{' '}
                  <span className="text-textGray text-sm">مراجعه حضوری ویزیتور</span>
                </div>
                <div className="bg-bgPrimary p-3 rounded text-center border border-white/5 w-[90%] mx-auto">
                  <span className="text-white font-bold">توجه:</span>{' '}
                  <span className="text-textGray text-sm">مشاهده قیمت‌های رقابتی در دمو</span>
                </div>
                <div className="bg-bgPrimary p-3 rounded text-center border border-white/5 w-[80%] mx-auto">
                  <span className="text-white font-bold">تبدیل:</span>{' '}
                  <span className="text-textGray text-sm">ثبت اولین سفارش نقدی با تخفیف</span>
                </div>
                <div className="bg-bgPrimary p-3 rounded text-center border border-white/5 w-[70%] mx-auto">
                  <span className="text-white font-bold">وفاداری:</span>{' '}
                  <span className="text-textGray text-sm">تخصیص اعتبار چکی و خریدهای مکرر</span>
                </div>
              </div>
            </div>

            <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-textGray">
              <h3 className="text-xl font-bold text-white mb-4">شاخص‌های کلیدی عملکرد (KPIs)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-bgPrimary p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">۷۰٪</div>
                  <div className="text-sm text-textGray">نرخ بازگشت مشتری در ماه</div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">&gt; ۵۰</div>
                  <div className="text-sm text-textGray">سفارشات هفتگی (هدف MVP)</div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">۲ میلیون</div>
                  <div className="text-sm text-textGray">متوسط حجم سبد خرید</div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-2xl font-bold text-coral mb-1">&lt; ۵٪</div>
                  <div className="text-sm text-textGray">نرخ نکول اعتبارات</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── استراتژی محتوا ── */}
        <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-gold mb-8">
          <h3 className="text-xl font-bold text-white mb-4">استراتژی محتوا</h3>
          <p className="text-textGray leading-relaxed mb-4">
            تولید محتوای هدفمند برای آموزش و جلب اعتماد خرده‌فروشان سنتی. تمرکز بر نمایش ارزش افزوده پلتفرم از طریق محتوای کاربردی و قابل‌فهم.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bgPrimary p-4 rounded-xl border border-white/5">
              <div className="text-gold font-bold mb-2">ویدئوهای آموزشی کوتاه</div>
              <p className="text-sm text-textGray">آموزش نحوه ثبت سفارش، مشاهده موجودی و استفاده از اعتبار چکی در قالب ویدئوهای ۶۰ ثانیه‌ای.</p>
            </div>
            <div className="bg-bgPrimary p-4 rounded-xl border border-white/5">
              <div className="text-gold font-bold mb-2">اینفوگرافیک‌های مقایسه‌ای</div>
              <p className="text-sm text-textGray">مقایسه خرید سنتی با خرید از توتون‌یار: صرفه‌جویی در زمان، هزینه و کاهش ریسک.</p>
            </div>
            <div className="bg-bgPrimary p-4 rounded-xl border border-white/5">
              <div className="text-gold font-bold mb-2">داستان موفقیت مشتریان</div>
              <p className="text-sm text-textGray">مستندسازی تجربه خرده‌فروشانی که با استفاده از پلتفرم، فروش خود را افزایش داده‌اند.</p>
            </div>
            <div className="bg-bgPrimary p-4 rounded-xl border border-white/5">
              <div className="text-gold font-bold mb-2">لیست قیمت روزانه</div>
              <p className="text-sm text-textGray">انتشار روزانه لیست قیمت‌های به‌روز با برند توتون‌یار در واتساپ و تلگرام.</p>
            </div>
          </div>
        </div>

        {/* ── تبلیغات دیجیتال ── */}
        <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-coral mb-8">
          <h3 className="text-xl font-bold text-white mb-4">تبلیغات دیجیتال</h3>
          <p className="text-textGray leading-relaxed mb-4">
            بهره‌گیری از ابزارهای دیجیتال با تمرکز بر پلتفرم‌های پرمخاطب در بازار هدف. بودجه تبلیغاتی محدود با تاکید بر ROI بالا.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-bgPrimary p-4 rounded-lg border border-white/5">
              <span className="text-coral font-bold text-lg shrink-0">۱.</span>
              <div>
                <div className="text-white font-bold">تبلیغات گوگل ادز (Google Ads)</div>
                <p className="text-sm text-textGray">هدف‌گیری کلمات کلیدی مانند «عمده‌فروشی سیگار شیراز»، «خرید عمده تنباکو». بودجه ماهانه: ۵ میلیون تومان.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-bgPrimary p-4 rounded-lg border border-white/5">
              <span className="text-coral font-bold text-lg shrink-0">۲.</span>
              <div>
                <div className="text-white font-bold">تبلیغات اینستاگرامی</div>
                <p className="text-sm text-textGray">اسپانسرینگ پست و استوری در پیج‌های محلی شیراز و پیج‌های مرتبط با کسب‌وکارهای خرد.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-bgPrimary p-4 rounded-lg border border-white/5">
              <span className="text-coral font-bold text-lg shrink-0">۳.</span>
              <div>
                <div className="text-white font-bold">تبلیغات پیامکی هدفمند</div>
                <p className="text-sm text-textGray">ارسال پیامک به بانک شماره خرده‌فروشان منطقه با پیشنهاد ویژه اولین سفارش.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── شبکه‌های اجتماعی ── */}
        <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-greenAccent mb-8">
          <h3 className="text-xl font-bold text-white mb-4">شبکه‌های اجتماعی</h3>
          <p className="text-textGray leading-relaxed mb-4">
            حضور فعال در شبکه‌های اجتماعی پرکاربرد بین خرده‌فروشان ایرانی برای ایجاد آگاهی از برند و تعامل مستقیم.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bgPrimary p-5 rounded-xl border border-white/5 text-center">
              <div className="text-3xl mb-3">📱</div>
              <div className="text-greenAccent font-bold mb-2">اینستاگرام</div>
              <p className="text-sm text-textGray">انتشار روزانه استوری قیمت‌ها، ریلز آموزشی و پست‌های تعاملی. هدف: ۵۰۰۰ فالوور در ۶ ماه.</p>
            </div>
            <div className="bg-bgPrimary p-5 rounded-xl border border-white/5 text-center">
              <div className="text-3xl mb-3">💬</div>
              <div className="text-greenAccent font-bold mb-2">واتساپ بیزینس</div>
              <p className="text-sm text-textGray">کاتالوگ محصولات، پاسخ خودکار و گروه‌های ویژه مشتریان VIP با اطلاع‌رسانی بارهای جدید.</p>
            </div>
            <div className="bg-bgPrimary p-5 rounded-xl border border-white/5 text-center">
              <div className="text-3xl mb-3">📢</div>
              <div className="text-greenAccent font-bold mb-2">تلگرام</div>
              <p className="text-sm text-textGray">کانال اطلاع‌رسانی قیمت و موجودی + ربات ثبت سفارش سریع برای مشتریان قدیمی.</p>
            </div>
          </div>
        </div>

        {/* ── سئو و تولید محتوای جستجو محور ── */}
        <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-gold mb-8">
          <h3 className="text-xl font-bold text-white mb-4">سئو و تولید محتوای جستجو محور</h3>
          <p className="text-textGray leading-relaxed mb-4">
            بهینه‌سازی وبسایت برای موتورهای جستجو جهت جذب ارگانیک خرده‌فروشانی که به دنبال تامین‌کننده آنلاین هستند.
          </p>
          <div className="space-y-3">
            <div className="bg-bgPrimary p-4 rounded-lg border border-white/5">
              <div className="text-gold font-bold mb-1">کلمات کلیدی هدف</div>
              <p className="text-sm text-textGray">عمده‌فروشی سیگار، خرید عمده تنباکو، قیمت روز سیگار، تامین‌کننده محصولات دخانی، خرید اعتباری سیگار</p>
            </div>
            <div className="bg-bgPrimary p-4 rounded-lg border border-white/5">
              <div className="text-gold font-bold mb-1">محتوای وبلاگ</div>
              <p className="text-sm text-textGray">انتشار هفتگی مقالات تحلیلی بازار دخانیات، راهنمای خرده‌فروشان و نکات مدیریت موجودی.</p>
            </div>
            <div className="bg-bgPrimary p-4 rounded-lg border border-white/5">
              <div className="text-gold font-bold mb-1">صفحات فرود اختصاصی</div>
              <p className="text-sm text-textGray">طراحی Landing Page مجزا برای هر دسته محصول با CTA ثبت‌نام رایگان و دسترسی به قیمت‌ها.</p>
            </div>
          </div>
        </div>

        {/* ── بازاریابی ارجاعی ── */}
        <div className="bg-bgCard p-8 rounded-2xl border-l-4 border-coral">
          <h3 className="text-xl font-bold text-white mb-4">بازاریابی ارجاعی (Referral Marketing)</h3>
          <p className="text-textGray leading-relaxed mb-4">
            تبدیل مشتریان راضی به سفیران برند از طریق سیستم پاداش‌دهی هوشمند. هر مشتری معرفی‌کننده از تخفیف ویژه بهره‌مند می‌شود.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bgPrimary p-5 rounded-xl border border-white/5">
              <div className="text-coral font-bold text-lg mb-2">🎁 پاداش معرفی</div>
              <p className="text-sm text-textGray">به ازای هر مشتری جدید که از طریق لینک دعوت ثبت‌نام و اولین خرید خود را انجام دهد، ۲۰۰,۰۰۰ تومان اعتبار خرید هدیه.</p>
            </div>
            <div className="bg-bgPrimary p-5 rounded-xl border border-white/5">
              <div className="text-coral font-bold text-lg mb-2">🏆 مسابقه ماهانه</div>
              <p className="text-sm text-textGray">رقابت ماهانه بین مشتریان برای بیشترین معرفی موفق. جایزه: سقف اعتبار رایگان و ارسال رایگان ۳ ماهه.</p>
            </div>
            <div className="bg-bgPrimary p-5 rounded-xl border border-white/5">
              <div className="text-coral font-bold text-lg mb-2">🔗 لینک اختصاصی</div>
              <p className="text-sm text-textGray">هر مشتری یک لینک دعوت اختصاصی با کد تخفیف منحصر‌به‌فرد دریافت می‌کند که در پنل کاربری قابل مشاهده است.</p>
            </div>
            <div className="bg-bgPrimary p-5 rounded-xl border border-white/5">
              <div className="text-coral font-bold text-lg mb-2">📊 داشبورد ارجاع</div>
              <p className="text-sm text-textGray">نمایش تعداد معرفی‌های موفق، اعتبار کسب‌شده و وضعیت ثبت‌نام دعوت‌شدگان در پنل مشتری.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
