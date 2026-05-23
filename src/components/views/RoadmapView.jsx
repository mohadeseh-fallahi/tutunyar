import { MapTrifold, Warning } from '@phosphor-icons/react'

export default function RoadmapView() {
  return (
    <section className="w-full pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="mb-12 border-b border-white/10 pb-6 text-center">
          <h2 className="text-3xl font-extrabold text-gold flex items-center justify-center gap-3">
            <MapTrifold weight="fill" size={32} />
            نقشه راه توسعه (Roadmap)
          </h2>
          <p className="text-textGray mt-4 max-w-2xl mx-auto">چشم‌انداز ۲۴ ماهه پلتفرم توتون‌یار از فاز آزمایشگاهی تا تبدیل شدن به رهبر بازار منطقه‌ای.</p>
        </div>

        <div className="relative max-w-4xl mx-auto py-8">
          {/* Timeline line */}
          <div className="absolute right-8 top-0 bottom-0 w-1 bg-white/10 md:right-1/2 md:-translate-x-1/2 rounded" />

          {/* Phase 1 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 w-full group">
            <div className="hidden md:block w-5/12" />
            <div className="absolute right-6 md:right-1/2 w-5 h-5 bg-gold rounded-full shadow-[0_0_15px_#E6A817] transform translate-x-1/2 z-10 border-4 border-bgPrimary group-hover:scale-125 transition-transform" />
            <div className="w-full md:w-5/12 pl-16 pr-4 md:px-0 md:pl-8 text-right md:text-left">
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5 shadow-lg group-hover:border-gold/50 transition-colors text-right">
                <span className="text-gold font-bold text-sm bg-gold/10 px-3 py-1 rounded-full mb-3 inline-block">ماه ۱ تا ۶</span>
                <h3 className="text-2xl font-bold text-white mb-3">فاز ۱: راه‌اندازی MVP</h3>
                <ul className="text-textGray text-sm space-y-2 list-disc list-inside">
                  <li>طراحی و استقرار پلتفرم اولیه (همین دمو)</li>
                  <li>جذب ۵۰ مشتری فعال خرده‌فروش در شیراز</li>
                  <li>راه‌اندازی ماژول اعتبارسنجی سنتی</li>
                  <li>رسیدن به پردازش ۵۰ سفارش در هفته</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 w-full group">
            <div className="w-full md:w-5/12 pl-16 pr-4 md:px-0 md:pr-8 text-right">
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5 shadow-lg group-hover:border-greenAccent/50 transition-colors">
                <span className="text-greenAccent font-bold text-sm bg-greenAccent/10 px-3 py-1 rounded-full mb-3 inline-block">ماه ۷ تا ۱۸</span>
                <h3 className="text-2xl font-bold text-white mb-3">فاز ۲: رشد محلی و بلوغ</h3>
                <ul className="text-textGray text-sm space-y-2 list-disc list-inside">
                  <li>توسعه اپلیکیشن نیتیو موبایل (Android)</li>
                  <li>سیستم امتیازدهی هوشمند و کلوپ مشتریان</li>
                  <li>گسترش انبار و ناوگان توزیع اختصاصی</li>
                  <li>عبور از مرز ۵۰۰ مشتری فعال در سطح شهر شیراز</li>
                </ul>
              </div>
            </div>
            <div className="absolute right-6 md:right-1/2 w-5 h-5 bg-greenAccent rounded-full shadow-[0_0_15px_#4CAF50] transform translate-x-1/2 z-10 border-4 border-bgPrimary group-hover:scale-125 transition-transform" />
            <div className="hidden md:block w-5/12" />
          </div>

          {/* Phase 3 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
            <div className="hidden md:block w-5/12" />
            <div className="absolute right-6 md:right-1/2 w-5 h-5 bg-coral rounded-full shadow-[0_0_15px_#D94452] transform translate-x-1/2 z-10 border-4 border-bgPrimary group-hover:scale-125 transition-transform" />
            <div className="w-full md:w-5/12 pl-16 pr-4 md:px-0 md:pl-8 text-right md:text-left">
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5 shadow-lg group-hover:border-coral/50 transition-colors text-right">
                <span className="text-coral font-bold text-sm bg-coral/10 px-3 py-1 rounded-full mb-3 inline-block">ماه ۱۹ تا ۲۴</span>
                <h3 className="text-2xl font-bold text-white mb-3">فاز ۳: توسعه استانی</h3>
                <ul className="text-textGray text-sm space-y-2 list-disc list-inside">
                  <li>پوشش توزیع در تمامی شهرستان‌های استان فارس</li>
                  <li>اتصال سیستم به API تامین‌کنندگان اصلی</li>
                  <li>راه‌اندازی سیستم پیش‌بینی تقاضا بر پایه داده‌ها</li>
                  <li>جذب سرمایه راند A برای توسعه کشوری</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── چالش‌ها و ریسک‌ها ── */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-coral flex items-center gap-3 mb-10">
            <Warning weight="fill" size={32} />
            چالش‌ها و ریسک‌ها
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* چالش‌های فنی */}
            <div className="bg-bgCard p-8 rounded-2xl border-t-4 border-coral">
              <h3 className="text-xl font-bold text-white mb-5">چالش‌های فنی</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-coral mt-1">●</span>
                  <span className="text-textGray">پایداری سرور و مقاوم‌سازی زیرساخت در برابر ترافیک بالا در ساعات پیک سفارش‌گذاری.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral mt-1">●</span>
                  <span className="text-textGray">هماهنگ‌سازی موجودی لحظه‌ای بین انبار فیزیکی و سیستم آنلاین بدون تاخیر.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral mt-1">●</span>
                  <span className="text-textGray">پیچیدگی توسعه اپلیکیشن موبایل و نگهداری همزمان نسخه وب و اندروید.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral mt-1">●</span>
                  <span className="text-textGray">امنیت داده‌های مالی مشتریان و حفاظت از اطلاعات اعتباری و تراکنش‌ها.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral mt-1">●</span>
                  <span className="text-textGray">یکپارچه‌سازی با درگاه‌های پرداخت و سیستم‌های حسابداری رایج در بازار.</span>
                </li>
              </ul>
            </div>

            {/* چالش‌های بازار */}
            <div className="bg-bgCard p-8 rounded-2xl border-t-4 border-gold">
              <h3 className="text-xl font-bold text-white mb-5">چالش‌های بازار</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">●</span>
                  <span className="text-textGray">مقاومت فرهنگی خرده‌فروشان سنتی در برابر تغییر از خرید حضوری به آنلاین.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">●</span>
                  <span className="text-textGray">رقابت با واسطه‌گران قدیمی که روابط شخصی عمیقی با خرده‌فروشان دارند.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">●</span>
                  <span className="text-textGray">نوسانات شدید قیمت در بازار دخانیات و تاثیر آن بر قیمت‌گذاری پلتفرم.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">●</span>
                  <span className="text-textGray">محدودیت تبلیغاتی محصولات دخانی در رسانه‌های رسمی و شبکه‌های اجتماعی.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">●</span>
                  <span className="text-textGray">وابستگی به تامین‌کنندگان محدود و ریسک قطع زنجیره تامین.</span>
                </li>
              </ul>
            </div>

            {/* چالش‌های حقوقی و اعتمادسازی */}
            <div className="bg-bgCard p-8 rounded-2xl border-t-4 border-textGray">
              <h3 className="text-xl font-bold text-white mb-5">چالش‌های حقوقی و اعتمادسازی</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-textGray mt-1">●</span>
                  <span className="text-textGray">الزامات قانونی مجوزهای توزیع و فروش عمده محصولات دخانی.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-textGray mt-1">●</span>
                  <span className="text-textGray">چالش اعتمادسازی اولیه برای پرداخت‌های آنلاین در بین مشتریان سنتی.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-textGray mt-1">●</span>
                  <span className="text-textGray">مدیریت ریسک اعتباری و جلوگیری از نکول در سیستم خرید چکی.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-textGray mt-1">●</span>
                  <span className="text-textGray">تغییرات احتمالی در قوانین و مقررات صنعت دخانیات و تاثیر بر مدل کسب‌وکار.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-textGray mt-1">●</span>
                  <span className="text-textGray">حفظ حریم خصوصی داده‌های مشتریان و انطباق با الزامات نظارتی.</span>
                </li>
              </ul>
            </div>

            {/* ریسک‌های اصلی و راهکارها */}
            <div className="bg-bgCard p-8 rounded-2xl border-t-4 border-coral">
              <h3 className="text-xl font-bold text-white mb-5">ریسک‌های اصلی و راهکارهای کاهش</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-right text-gold py-3 px-2 font-bold">ریسک</th>
                      <th className="text-center text-gold py-3 px-2 font-bold">احتمال</th>
                      <th className="text-center text-gold py-3 px-2 font-bold">شدت</th>
                      <th className="text-right text-gold py-3 px-2 font-bold">راهکار کاهش</th>
                    </tr>
                  </thead>
                  <tbody className="text-textGray">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 text-white">نکول مشتریان اعتباری</td>
                      <td className="py-3 px-2 text-center"><span className="text-coral font-bold">بالا</span></td>
                      <td className="py-3 px-2 text-center"><span className="text-coral font-bold">بالا</span></td>
                      <td className="py-3 px-2">اعتبارسنجی دقیق + سقف اعتبار تدریجی + ضمانت چک</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 text-white">مقاومت فرهنگی</td>
                      <td className="py-3 px-2 text-center"><span className="text-gold font-bold">متوسط</span></td>
                      <td className="py-3 px-2 text-center"><span className="text-gold font-bold">متوسط</span></td>
                      <td className="py-3 px-2">آموزش حضوری + ثبت اولین سفارش توسط ویزیتور</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 text-white">ورود رقیب قوی</td>
                      <td className="py-3 px-2 text-center"><span className="text-gold font-bold">متوسط</span></td>
                      <td className="py-3 px-2 text-center"><span className="text-coral font-bold">بالا</span></td>
                      <td className="py-3 px-2">ایجاد وفاداری زودهنگام + قراردادهای بلندمدت تامین</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 text-white">تغییرات قانونی</td>
                      <td className="py-3 px-2 text-center"><span className="text-gold font-bold">متوسط</span></td>
                      <td className="py-3 px-2 text-center"><span className="text-coral font-bold">بالا</span></td>
                      <td className="py-3 px-2">مشاوره حقوقی مستمر + انعطاف‌پذیری مدل کسب‌وکار</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 text-white">قطعی سرور/زیرساخت</td>
                      <td className="py-3 px-2 text-center"><span className="text-greenAccent font-bold">پایین</span></td>
                      <td className="py-3 px-2 text-center"><span className="text-coral font-bold">بالا</span></td>
                      <td className="py-3 px-2">سرور پشتیبان + مانیتورینگ ۲۴/۷ + فرایند سفارش آفلاین</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-white">نوسان ارز و قیمت</td>
                      <td className="py-3 px-2 text-center"><span className="text-coral font-bold">بالا</span></td>
                      <td className="py-3 px-2 text-center"><span className="text-gold font-bold">متوسط</span></td>
                      <td className="py-3 px-2">به‌روزرسانی لحظه‌ای قیمت + حاشیه سود شناور + خرید پیشگیرانه</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
