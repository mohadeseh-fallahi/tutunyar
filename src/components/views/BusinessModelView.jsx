import { PresentationChart, SquaresFour, Handshake, Lightning, Database, Gift, Heart, Truck, Users, Money, ChartLineUp, UserFocus, Lightbulb, MagnifyingGlassPlus, Diamond, ChartBar, ArrowsLeftRight } from '@phosphor-icons/react'

export default function BusinessModelView() {
  return (
    <section className="w-full pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="mb-12 border-b border-white/10 pb-6">
          <h2 className="text-3xl font-extrabold text-gold flex items-center gap-3">
            <PresentationChart weight="fill" size={32} />
            پرونده دیجیتال کسب و کار
          </h2>
          <p className="text-textGray mt-4 max-w-3xl leading-relaxed">این بخش ساختار اقتصادی و استراتژیک توتون‌یار را به عنوان یک پلتفرم B2B در بازار سنتی دخانیات تشریح می‌کند.</p>
        </div>

        {/* BMC */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <SquaresFour weight="bold" className="text-gold" size={22} /> بوم مدل کسب‌وکار 
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Key Partners */}
            <div className="bg-bgCard p-5 rounded-xl col-span-1 border-t-4 border-gold shadow-lg">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-2"><Handshake weight="fill" size={20} /> شرکای کلیدی</h4>
              <ul className="text-white text-sm space-y-3 list-disc list-inside opacity-90">
                <li>تولیدکنندگان اصلی</li>
                <li>واردکنندگان رسمی تنباکو</li>
                <li>شرکت‌های پخش سراسری</li>
                <li>ارائه‌دهندگان درگاه پرداخت و API بانکی</li>
              </ul>
            </div>

            {/* Key Activities + Resources */}
            <div className="col-span-1 flex flex-col gap-4">
              <div className="bg-bgCard p-5 rounded-xl flex-1 border-t-4 border-gold shadow-lg">
                <h4 className="text-gold font-bold mb-4 flex items-center gap-2"><Lightning weight="fill" size={20} /> فعالیت‌های کلیدی</h4>
                <ul className="text-white text-sm space-y-2 list-disc list-inside opacity-90">
                  <li>مدیریت زنجیره تامین کالا</li>
                  <li>توسعه و نگهداری پلتفرم IT</li>
                  <li>اعتبارسنجی مالی مشتریان</li>
                  <li>پشتیبانی و توزیع محلی</li>
                </ul>
              </div>
              <div className="bg-bgCard p-5 rounded-xl flex-1 border-t-4 border-gold shadow-lg">
                <h4 className="text-gold font-bold mb-4 flex items-center gap-2"><Database weight="fill" size={20} /> منابع کلیدی</h4>
                <ul className="text-white text-sm space-y-2 list-disc list-inside opacity-90">
                  <li>انبار مرکزی استراتژیک</li>
                  <li>سرمایه در گردش بالا</li>
                  <li>نرم‌افزار یکپارچه (MVP)</li>
                  <li>داده‌های رفتار خرید مشتریان</li>
                </ul>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-bgCard p-5 rounded-xl col-span-1 lg:col-span-1 border-t-4 border-coral shadow-lg">
              <h4 className="text-coral font-bold mb-4 flex items-center gap-2"><Gift weight="fill" size={20} /> ارزش پیشنهادی</h4>
              <ul className="text-white text-sm space-y-3 list-disc list-inside opacity-90">
                <li><strong>تامین بی‌وقفه:</strong> رفع دغدغه کسری بار</li>
                <li><strong>شفافیت قیمت:</strong> قیمت‌های کف بازار</li>
                <li><strong>سفارش ۲۴ ساعته:</strong> حذف وابستگی به ویزیتور</li>
                <li><strong>خرید چکی/اعتباری:</strong> تسهیل جریان نقدینگی خرده‌فروش</li>
                <li><strong>صرفه‌جویی زمان:</strong> سفارش‌دهی زیر ۲ دقیقه</li>
                <li><strong>داشبورد تحلیلی مدرن:</strong> پیشنهادات ویژه براساس خریدهای قبلی و ایجاد خرید هوشمند</li>
              </ul>
            </div>

            {/* Customer Relations + Channels */}
            <div className="col-span-1 flex flex-col gap-4">
              <div className="bg-bgCard p-5 rounded-xl flex-1 border-t-4 border-greenAccent shadow-lg">
                <h4 className="text-greenAccent font-bold mb-4 flex items-center gap-2"><Heart weight="fill" size={20} /> ارتباط با مشتری</h4>
                <ul className="text-white text-sm space-y-2 list-disc list-inside opacity-90">
                  <li>پشتیبانی تلفنی مستمر</li>
                  <li>سیستم امتیازدهی و خوش‌حسابی</li>
                  <li>بازدید دوره‌ای (رابطه سنتی)</li>
                  <li>ارسال نوتیفیکیشن کاهش قیمت</li>
                </ul>
              </div>
              <div className="bg-bgCard p-5 rounded-xl flex-1 border-t-4 border-greenAccent shadow-lg">
                <h4 className="text-greenAccent font-bold mb-4 flex items-center gap-2"><Truck weight="fill" size={20} /> کانال‌های توزیع</h4>
                <ul className="text-white text-sm space-y-2 list-disc list-inside opacity-90">
                  <li>وب‌اپلیکیشن (موبایل محور)</li>
                  <li>فروش حضوری در انبار (B2C محدود)</li>
                  <li>ناوگان توزیع اختصاصی</li>
                </ul>
              </div>
            </div>

            {/* Customer Segments */}
            <div className="bg-bgCard p-5 rounded-xl col-span-1 border-t-4 border-greenAccent shadow-lg">
              <h4 className="text-greenAccent font-bold mb-4 flex items-center gap-2"><Users weight="fill" size={20} /> بخش مشتریان</h4>
              <ul className="text-white text-sm space-y-3 list-disc list-inside opacity-90">
                <li>سوپرمارکت‌های محلی و بزرگ</li>
                <li>دکه‌های مطبوعاتی سطح شهر</li>
                <li>فروشگاه‌های تخصصی دخانیات</li>
                <li>مراکز پخش مویرگی کوچکتر</li>
                <li>مصرف‌کنندگان نهایی (سهم زیر ۵٪)</li>
              </ul>
            </div>
          </div>

          {/* Cost + Revenue */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className="bg-bgCard p-6 rounded-xl border-t-4 border-textGray shadow-lg">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Money weight="fill" size={20} /> ساختار هزینه‌ها</h4>
              <ul className="text-white text-sm space-y-2 list-disc list-inside opacity-90">
                <li>هزینه خالص تامین کالا (بیشترین سهم)</li>
                <li>هزینه‌های انبارداری، بیمه و لجستیک</li>
                <li>هزینه توسعه نرم‌افزار و سرورها</li>
                <li>هزینه‌های بازاریابی و افت اعتبار (نکول)</li>
              </ul>
            </div>
            <div className="bg-bgCard p-6 rounded-xl border-t-4 border-textGray shadow-lg">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><ChartLineUp weight="fill" size={20} /> جریان‌های درآمدی</h4>
              <ul className="text-white text-sm space-y-2 list-disc list-inside opacity-90">
                <li><strong>درآمد اصلی:</strong> حاشیه سود حاصل از اختلاف قیمت خرید کلان و فروش عمده (B2B)</li>
                <li><strong>درآمد فرعی:</strong> حاشیه سود بالاتر در فروش تک و حضوری (B2C)</li>
                <li><strong>درآمد آتی:</strong> دریافت هزینه اشتراک ویژه برای خدمات ممتاز تحویل</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Analysis — Full Width */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <UserFocus weight="bold" className="text-gold" size={22} /> تحلیل مشتری هدف
          </h3>
          <div className="space-y-6">
            {/* Existing 3 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-bgCard p-5 rounded-xl border border-white/5">
                <h4 className="text-gold font-bold mb-2">پرسونای مشتری</h4>
                <p className="text-sm text-textGray leading-relaxed">مالک سوپرمارکت یا دکه، مرد ۳۰ الی ۵۵ ساله، آشنایی متوسط با گوشی هوشمند، به شدت معتمد به روابط چهره‌به‌چهره، سفارشات هفتگی بین ۵ تا ۵۰ میلیون تومان.</p>
              </div>
              <div className="bg-bgCard p-5 rounded-xl border border-white/5">
                <h4 className="text-coral font-bold mb-2">دردها و چالش‌ها</h4>
                <ul className="text-sm text-textGray list-disc list-inside space-y-1">
                  <li>عدم اطلاع از موجودی دقیق عمده‌فروش</li>
                  <li>نوسانات ناگهانی قیمت و عدم شفافیت</li>
                  <li>صرف زمان طولانی برای تماس و استعلام قیمت</li>
                </ul>
              </div>
              <div className="bg-bgCard p-5 rounded-xl border border-white/5">
                <h4 className="text-greenAccent font-bold mb-2">رفتار خرید</h4>
                <p className="text-sm text-textGray leading-relaxed">ترجیح می‌دهد اقلام پرمصرف (مثل وینستون/کنت) را به صورت چکی خرید کند و در صورت خوش‌قولی عمده‌فروش، تمام خرید خود را متمرکز می‌کند.</p>
              </div>
            </div>

            {/* New: تعریف مشتری هدف */}
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-4">تعریف مشتری هدف</h4>
              <div className="space-y-3 text-sm text-textGray leading-relaxed">
                <p><strong className="text-white">مشتری اصلی (B2B):</strong> خرده‌فروشان محصولات دخانی شامل سوپرمارکت‌ها، دکه‌های مطبوعاتی، و فروشگاه‌های تخصصی دخانیات در شهر شیراز و استان فارس.</p>
                <p><strong className="text-white">مشتری فرعی (B2C):</strong> مصرف‌کنندگان نهایی که به‌صورت حضوری از انبار خرید می‌کنند (سهم زیر ۵٪ از درآمد).</p>
                <p><strong className="text-white">ویژگی‌های کلیدی مشتری هدف:</strong> سفارش منظم هفتگی یا دوهفته‌ای، حجم سفارش ۵ تا ۵۰ میلیون تومان، نیاز شدید به اعتبار خرید (چکی)، آشنایی محدود تا متوسط با فناوری، و اعتماد بالا به روابط شخصی و چهره‌به‌چهره.</p>
              </div>
            </div>

            {/* New: تقسیم‌بندی بازار */}
            <div>
              <h4 className="text-white font-bold mb-4">تقسیم‌بندی بازار</h4>
              <div className="bg-bgCard rounded-xl border border-white/5 overflow-x-auto">
                <table className="w-full text-right text-sm whitespace-nowrap">
                  <thead className="bg-bgPrimary text-textGray border-b border-white/5">
                    <tr>
                      <th className="p-3 font-medium">سگمنت</th>
                      <th className="p-3 font-medium">توضیح</th>
                      <th className="p-3 font-medium">حجم تقریبی</th>
                      <th className="p-3 font-medium">اولویت</th>
                    </tr>
                  </thead>
                  <tbody className="text-white divide-y divide-white/5">
                    <tr className="hover:bg-white/5">
                      <td className="p-3 font-medium">سوپرمارکت‌های محلی و بزرگ</td>
                      <td className="p-3 text-textGray">خرید حجمی منظم، حساسیت بالا به قیمت</td>
                      <td className="p-3 text-textGray">~۱۵۰ واحد در شیراز</td>
                      <td className="p-3"><span className="bg-gold/20 text-gold px-2 py-1 rounded text-xs">اولویت اول</span></td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-3 font-medium">دکه‌های مطبوعاتی</td>
                      <td className="p-3 text-textGray">خرید حجم متوسط، فراوانی بالا، پراکندگی جغرافیایی زیاد</td>
                      <td className="p-3 text-textGray">~۲۵۰ واحد در شیراز</td>
                      <td className="p-3"><span className="bg-gold/20 text-gold px-2 py-1 rounded text-xs">اولویت اول</span></td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-3 font-medium">فروشگاه‌های تخصصی دخانیات</td>
                      <td className="p-3 text-textGray">خرید متمرکز، تنوع بالای محصول، مشتری وفادار</td>
                      <td className="p-3 text-textGray">~۵۰ واحد در شیراز</td>
                      <td className="p-3"><span className="bg-greenAccent/20 text-greenAccent px-2 py-1 rounded text-xs">اولویت دوم</span></td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-3 font-medium">مراکز پخش مویرگی کوچکتر</td>
                      <td className="p-3 text-textGray">خرید عمده برای توزیع مجدد، حساسیت بالا به حاشیه سود</td>
                      <td className="p-3 text-textGray">~۳۰ واحد</td>
                      <td className="p-3"><span className="bg-textGray/20 text-textGray px-2 py-1 rounded text-xs">اولویت سوم</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* New: مسیر تصمیم‌گیری مشتری */}
            <div>
              <h4 className="text-white font-bold mb-4">مسیر تصمیم‌گیری مشتری</h4>
              <div className="flex flex-col gap-2">
                <div className="bg-bgPrimary p-4 rounded-lg border border-white/5 w-full flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-bgPrimary font-bold text-sm shrink-0">۱</div>
                  <div><span className="text-white font-bold">آگاهی:</span> <span className="text-textGray text-sm">مشتری از طریق ویزیت حضوری تیم فروش یا معرفی توسط همکاران صنفی با پلتفرم آشنا می‌شود.</span></div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-lg border border-white/5 w-[95%] mx-auto flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-bgPrimary font-bold text-sm shrink-0">۲</div>
                  <div><span className="text-white font-bold">بررسی:</span> <span className="text-textGray text-sm">مشتری قیمت‌ها و موجودی را در پلتفرم با عمده‌فروش فعلی خود مقایسه می‌کند.</span></div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-lg border border-white/5 w-[90%] mx-auto flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/80 flex items-center justify-center text-bgPrimary font-bold text-sm shrink-0">۳</div>
                  <div><span className="text-white font-bold">آزمایش:</span> <span className="text-textGray text-sm">اولین سفارش نقدی کوچک (۲-۵ میلیون تومان) را به‌صورت آزمایشی ثبت می‌کند.</span></div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-lg border border-white/5 w-[85%] mx-auto flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-greenAccent flex items-center justify-center text-bgPrimary font-bold text-sm shrink-0">۴</div>
                  <div><span className="text-white font-bold">اعتماد:</span> <span className="text-textGray text-sm">پس از تحویل به‌موقع و صحیح ۲-۳ سفارش، اعتماد شکل می‌گیرد.</span></div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-lg border border-white/5 w-[80%] mx-auto flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-greenAccent flex items-center justify-center text-bgPrimary font-bold text-sm shrink-0">۵</div>
                  <div><span className="text-white font-bold">وفاداری:</span> <span className="text-textGray text-sm">مشتری سقف اعتبار دریافت می‌کند و خریدهای خود را متمرکز می‌کند.</span></div>
                </div>
                <div className="bg-bgPrimary p-4 rounded-lg border border-white/5 w-[75%] mx-auto flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-greenAccent/80 flex items-center justify-center text-bgPrimary font-bold text-sm shrink-0">۶</div>
                  <div><span className="text-white font-bold">ترویج:</span> <span className="text-textGray text-sm">مشتری راضی، پلتفرم را به همکاران صنفی خود معرفی می‌کند.</span></div>
                </div>
              </div>
            </div>

            {/* New: موانع پذیرش */}
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-coral font-bold mb-4">موانع پذیرش ایده توسط مشتری</h4>
              <ul className="text-sm text-textGray list-disc list-inside space-y-2 leading-relaxed">
                <li><strong className="text-white">مقاومت فرهنگی:</strong> عادت به خرید تلفنی/حضوری و بی‌اعتمادی به سیستم‌های دیجیتال</li>
                <li><strong className="text-white">سواد دیجیتال پایین:</strong> بخشی از خرده‌فروشان (به‌ویژه مسن‌تر) توانایی کار با اپلیکیشن یا وب‌سایت را ندارند</li>
                <li><strong className="text-white">ترس از شفافیت:</strong> برخی خرده‌فروشان نگران ثبت دیجیتال معاملات و پیامدهای مالیاتی هستند</li>
                <li><strong className="text-white">وابستگی به روابط شخصی:</strong> اعتماد به عمده‌فروش فعلی و ترس از تغییر تامین‌کننده</li>
              </ul>
              <div className="mt-4 bg-bgPrimary p-4 rounded-xl border border-greenAccent/30">
                <h5 className="text-greenAccent font-bold mb-2 text-sm">راهکار غلبه:</h5>
                <p className="text-sm text-textGray leading-relaxed">طراحی UX بسیار ساده، آموزش حضوری، ثبت اولین سفارش توسط تیم فروش، و ارائه تخفیف ویژه سفارش اول.</p>
              </div>
            </div>

            {/* New: پرسونای ۲ مشتری */}
            <div>
              <h4 className="text-white font-bold mb-4">پرسونای مشتریان نمونه</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-gold to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">ر</div>
                    <div>
                      <h5 className="text-white font-bold">حاج‌آقا رضایی</h5>
                      <p className="text-textGray text-xs">پرسونا ۱</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-textGray">سن:</span><span className="text-white">۵۲ ساله</span></div>
                    <div className="flex justify-between"><span className="text-textGray">شغل:</span><span className="text-white">مالک سوپرمارکت محله‌ای (۱۵ سال سابقه)</span></div>
                    <div className="flex justify-between"><span className="text-textGray">تحصیلات:</span><span className="text-white">دیپلم</span></div>
                    <div className="flex justify-between"><span className="text-textGray">سواد دیجیتال:</span><span className="text-coral">پایین — فقط واتساپ و تماس</span></div>
                    <div className="flex justify-between"><span className="text-textGray">حجم خرید:</span><span className="text-white">۱۵-۲۰ میلیون تومان/هفته</span></div>
                    <div className="flex justify-between"><span className="text-textGray">رفتار خرید:</span><span className="text-white">وفادار، چکی، حساس به قیمت</span></div>
                    <div className="border-t border-white/10 pt-2 mt-2">
                      <p className="text-textGray"><strong className="text-coral">درد اصلی:</strong> چندین بار بار سفارشی‌اش ناموجود بوده و مجبور به خرید از رقیب با قیمت بالاتر شده.</p>
                    </div>
                    <div>
                      <p className="text-textGray"><strong className="text-greenAccent">انگیزه:</strong> مشاهده موجودی قبل از سفارش، اطمینان از تحویل.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-greenAccent to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">م</div>
                    <div>
                      <h5 className="text-white font-bold">آقای محمدی</h5>
                      <p className="text-textGray text-xs">پرسونا ۲</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-textGray">سن:</span><span className="text-white">۲۸ ساله</span></div>
                    <div className="flex justify-between"><span className="text-textGray">شغل:</span><span className="text-white">مالک دکه مطبوعاتی + دخانیات (۳ سال)</span></div>
                    <div className="flex justify-between"><span className="text-textGray">تحصیلات:</span><span className="text-white">لیسانس مدیریت</span></div>
                    <div className="flex justify-between"><span className="text-textGray">سواد دیجیتال:</span><span className="text-greenAccent">بالا — با اپلیکیشن‌ها کار می‌کند</span></div>
                    <div className="flex justify-between"><span className="text-textGray">حجم خرید:</span><span className="text-white">۵-۸ میلیون تومان/هفته</span></div>
                    <div className="flex justify-between"><span className="text-textGray">رفتار خرید:</span><span className="text-white">قیمت‌محور، مقایسه ۳-۴ تامین‌کننده</span></div>
                    <div className="border-t border-white/10 pt-2 mt-2">
                      <p className="text-textGray"><strong className="text-coral">درد اصلی:</strong> زمان زیادی صرف تماس تلفنی برای استعلام قیمت و موجودی می‌کند.</p>
                    </div>
                    <div>
                      <p className="text-textGray"><strong className="text-greenAccent">انگیزه:</strong> سرعت سفارش‌دهی، مقایسه قیمت‌ها، تخفیف حجمی.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ Section 1: جرقه اولیه ایده ═══════ */}
        <div className="border-t border-white/10 mt-16 pt-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Lightbulb weight="fill" className="text-gold" size={24} /> جرقه اولیه ایده
          </h3>

          <div className="space-y-6">
            <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
              <h4 className="text-gold font-bold mb-3">شرح جرقه اولیه</h4>
              <div className="text-sm text-textGray leading-relaxed space-y-3">
                <p>بنیان‌گذار توتون‌یار با سال‌ها فعالیت در بازار سنتی عمده‌فروشی دخانیات شیراز، از نزدیک شاهد ناکارآمدی عمیق این صنعت بود. خرده‌فروشان برای ثبت سفارش مجبور به تماس تلفنی با چندین عمده‌فروش، استعلام قیمت‌های متفاوت و مراجعه حضوری به انبارها بودند.</p>
                <p>مشکل اصلی‌تر، نبود اطلاعات لحظه‌ای از موجودی انبار بود. بارها اتفاق می‌افتاد که مشتری پس از ثبت سفارش تلفنی و مراجعه حضوری، متوجه ناموجود بودن برخی اقلام می‌شد. این بی‌اطلاعی، هم برای خرده‌فروش و هم برای عمده‌فروش هزینه‌بر و زمان‌بر بود.</p>
                <p>جرقه اصلی زمانی زده شد که دیدیم مشتریان فعلی، با وجود آشنایی محدود با فناوری، از واتساپ برای ارسال لیست سفارش استفاده می‌کنند. این نشان داد که تمایل به دیجیتال‌سازی وجود دارد، فقط ابزار مناسبی در اختیار نیست.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
                <h4 className="text-coral font-bold mb-3">چرایی انتخاب ایده</h4>
                <p className="text-sm text-textGray leading-relaxed">بنیان‌گذار در حال حاضر با ۶-۷ مشتری فعال در بازار دخانیات شیراز فعالیت می‌کند و تجربه مستقیم از دردها و چالش‌های خرده‌فروشان دارد. شکاف دیجیتال‌سازی در این بازار بسیار واضح است و هیچ رقیب دیجیتال تخصصی در این حوزه وجود ندارد.</p>
              </div>
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
                <h4 className="text-greenAccent font-bold mb-3">ارتباط با تجارت الکترونیک</h4>
                <p className="text-sm text-textGray leading-relaxed"> توتون‌یار یک پلتفرم تجارت الکترونیک B2B برای توزیع عمده محصولات دخانی است. فرآیند سفارش‌گیری، مشاهده کاتالوگ، مدیریت اعتبار و پیگیری سفارش به‌صورت آنلاین انجام می‌شود.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
                <h4 className="text-gold font-bold mb-3">درصد آنلاین بودن فرآیندها</h4>
                <p className="text-sm text-textGray leading-relaxed">تقریباً ۷۰-۸۰٪ فرآیند سفارش‌گیری و بررسی موجودی به‌صورت آنلاین انجام می‌شود. تحویل فیزیکی و تسویه حساب نهایی (چک/نقدی) همچنان بخش آفلاین باقی می‌ماند.</p>
              </div>
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
                <h4 className="text-gold font-bold mb-3">محدوده پیاده‌سازی MVP</h4>
                <p className="text-sm text-textGray leading-relaxed">شامل: کاتالوگ محصولات با موجودی لحظه‌ای، سفارش آنلاین، مدیریت اعتبار، و پیگیری سفارشات. شامل نمی‌شود: درگاه پرداخت واقعی، API انبارداری، ردیابی GPS تحویل.</p>
              </div>
              <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
                <h4 className="text-gold font-bold mb-3">مخاطب اولیه</h4>
                <p className="text-sm text-textGray leading-relaxed">مخاطب اولیه: ۶-۷ مشتری فعلی خرده‌فروش در شیراز، با هدف گسترش به ۵۰ مشتری در فاز ۱.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ Section 2: بررسی بلوغ ایده از زوایای مختلف ═══════ */}
        <div className="border-t border-white/10 mt-16 pt-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <MagnifyingGlassPlus weight="fill" className="text-gold" size={24} /> بررسی بلوغ ایده از زوایای مختلف
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">آیا واقعاً کسی در بازار منتظر چنین راه‌حلی است؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بله. خرده‌فروشان فعلی بارها از عدم دسترسی به لیست قیمت شفاف و موجودی دقیق شکایت کرده‌اند. هر هفته زمان قابل‌توجهی صرف تماس تلفنی و استعلام قیمت می‌شود.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-white font-bold mb-3">آیا این ایده فقط علاقه شخصی است یا مسئله واقعی گروهی را حل می‌کند؟</h4>
              <p className="text-sm text-textGray leading-relaxed">مسئله واقعی است. تمام خرده‌فروشان دخانیات شیراز (بیش از ۵۰۰ واحد صنفی) با مشکلات مشابه دسترسی به موجودی، شفافیت قیمت و فرآیند سفارش‌گیری دستی مواجه هستند.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-greenAccent">
              <h4 className="text-greenAccent font-bold mb-3">ایده از نوع جدید، ترکیبی یا تطبیقی است؟</h4>
              <p className="text-sm text-textGray leading-relaxed">تطبیقی. مدل‌های مشابه B2B در صنایع غذایی و FMCG وجود دارند (مثلاً اپلیکیشن‌های پخش مویرگی) اما هیچ‌کدام بر بازار تخصصی دخانیات متمرکز نشده‌اند.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">ایده تا چه مقیاسی می‌تواند رشد کند؟</h4>
              <p className="text-sm text-textGray leading-relaxed">فاز ۱: شیراز (۵۰ مشتری)، فاز ۲: استان فارس (۵۰۰+ مشتری)، فاز ۳: جنوب کشور. پتانسیل تبدیل به بزرگ‌ترین پلتفرم B2B دخانیات ایران وجود دارد.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-white font-bold mb-3">مشتریان حاضرند برای آن پول پرداخت کنند؟ چرا؟</h4>
              <p className="text-sm text-textGray leading-relaxed">مشتریان مستقیماً هزینه‌ای برای پلتفرم نمی‌پردازند. درآمد از حاشیه سود فروش عمده است. مشتریان با استفاده از پلتفرم در زمان و هزینه صرفه‌جویی می‌کنند و به اعتبار خرید دسترسی پیدا می‌کنند.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-greenAccent">
              <h4 className="text-greenAccent font-bold mb-3">آیا امکان ارزیابی میدانی ایده وجود دارد؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بله و در حال انجام است. ۶-۷ مشتری فعلی به‌عنوان گروه آزمایشی (Pilot) از نسخه اولیه استفاده خواهند کرد.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">اگر ایده شکست بخورد، محتمل‌ترین علت چیست؟</h4>
              <p className="text-sm text-textGray leading-relaxed">مقاومت فرهنگی خرده‌فروشان سنتی در برابر تغییر رویه خرید از تلفنی/حضوری به دیجیتال. همچنین ریسک نکول اعتبارات.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-white font-bold mb-3">گزینه قبلی مشتریان چه بوده است؟</h4>
              <p className="text-sm text-textGray leading-relaxed">تماس تلفنی با ۲-۳ عمده‌فروش، مراجعه حضوری به بازار عمده‌فروشی، و خرید از ویزیتورهای سیار.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-greenAccent">
              <h4 className="text-greenAccent font-bold mb-3">پول یا توجه مشتری قبلاً به سمت چه کسب‌وکاری رفته است؟</h4>
              <p className="text-sm text-textGray leading-relaxed">عمده‌فروشان سنتی بازار شیراز (حجره‌داران)، شرکت‌های پخش با ویزیتور حضوری، و گاهاً خرید مستقیم از نمایندگی‌های رسمی.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">فرضیات اصلی ایده چیست؟</h4>
              <p className="text-sm text-textGray leading-relaxed">۱) خرده‌فروشان حاضر به استفاده از ابزار دیجیتال هستند ۲) شفافیت قیمت مزیت رقابتی ایجاد می‌کند ۳) سیستم اعتباری ریسک نکول پایینی دارد ۴) حجم بازار برای پوشش هزینه‌ها کافی است.</p>
            </div>
          </div>
        </div>

        {/* ═══════ Section 3: تحلیل ارزش‌آفرینی ═══════ */}
        <div className="border-t border-white/10 mt-16 pt-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Diamond weight="fill" className="text-gold" size={24} /> تحلیل ارزش‌آفرینی
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">ارزش بکارگیری</h4>
              <p className="text-sm text-textGray leading-relaxed">خرده‌فروش با استفاده از پلتفرم، در کمتر از ۲ دقیقه سفارش ثبت می‌کند (در مقابل ۳۰ دقیقه فرآیند تماس تلفنی). دسترسی ۲۴ ساعته به موجودی و قیمت.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">ارزش مبادله‌ای</h4>
              <p className="text-sm text-textGray leading-relaxed">قیمت‌های عمده‌فروشی شفاف و رقابتی + تخفیفات پلکانی بر اساس حجم خرید + امکان خرید اعتباری (چکی).</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-coral font-bold mb-3">ارزش استراتژیک</h4>
              <p className="text-sm text-textGray leading-relaxed">ایجاد شبکه دیجیتال توزیع دخانیات که داده‌های رفتار خرید، پیش‌بینی تقاضا و مدیریت هوشمند موجودی را ممکن می‌سازد.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-coral font-bold mb-3">ارزش افزوده از دید عرضه‌کننده</h4>
              <p className="text-sm text-textGray leading-relaxed">کاهش هزینه فروش (حذف ویزیتور)، کاهش خطای سفارش‌گیری، بهبود مدیریت موجودی و کاهش ضایعات.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-greenAccent">
              <h4 className="text-greenAccent font-bold mb-3">ارزش افزوده از دید مشتری</h4>
              <p className="text-sm text-textGray leading-relaxed">صرفه‌جویی در زمان، شفافیت قیمت، دسترسی به اعتبار خرید، پیگیری آنلاین سفارش، و اطمینان از موجودی کالا.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-greenAccent">
              <h4 className="text-greenAccent font-bold mb-3">پایداری ارزش افزوده</h4>
              <p className="text-sm text-textGray leading-relaxed">با افزایش تعداد مشتریان و داده‌ها، اثر شبکه‌ای ایجاد می‌شود. سابقه خرید و امتیاز خوش‌حسابی مشتریان، هزینه تعویض ایجاد می‌کند.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bgPrimary p-6 rounded-2xl border border-gold border-dashed">
              <h4 className="text-gold font-bold mb-3">دلایل سختی تقلید</h4>
              <p className="text-sm text-white leading-relaxed">ترکیب سابقه و اعتبار سنتی در بازار شیراز + زیرساخت فناوری + داده‌های اختصاصی رفتار خرید مشتریان. رقبا یا سنتی هستند (فاقد فناوری) یا دیجیتال هستند (فاقد شناخت بازار محلی).</p>
            </div>
            <div className="bg-bgPrimary p-6 rounded-2xl border border-gold border-dashed">
              <h4 className="text-gold font-bold mb-3">چرا مشتری باید به این کسب‌وکار توجه کند؟</h4>
              <p className="text-sm text-white leading-relaxed">قیمت بهتر، دسترسی سریع‌تر، اعتبار خرید، شفافیت و داشبورد تحلیلی عمیق برای ارائه تصمیمات بهتر خرید (Insight). خرده‌فروش با یک ابزار ساده، کل فرآیند تامین بار خود را بهینه می‌کند.</p>
            </div>
          </div>
        </div>

        {/* ═══════ Section 4: تحلیل بازار و رقابت ═══════ */}
        <div className="border-t border-white/10 mt-16 pt-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <ChartBar weight="fill" className="text-gold" size={24} /> تحلیل بازار و رقابت
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
              <h4 className="text-gold font-bold mb-3">معرفی صنعت</h4>
              <p className="text-sm text-textGray leading-relaxed">صنعت پخش و توزیع محصولات دخانی در ایران، بازاری با گردش مالی بالا اما دیجیتال‌سازی بسیار پایین. بیشتر معاملات هنوز تلفنی و حضوری انجام می‌شود.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
              <h4 className="text-greenAccent font-bold mb-3">روندهای مهم بازار</h4>
              <ul className="text-sm text-textGray list-disc list-inside space-y-2">
                <li>افزایش نفوذ گوشی هوشمند در بین خرده‌فروشان</li>
                <li>رشد پلتفرم‌های B2B در صنایع مشابه (غذایی، بهداشتی)</li>
                <li>تمایل نسل جدید خرده‌فروشان به ابزارهای دیجیتال</li>
              </ul>
            </div>
          </div>

          {/* Competitor Table */}
          <div className="mb-8">
            <h4 className="text-white font-bold mb-4">جدول مقایسه رقبا</h4>
            <div className="bg-bgCard rounded-xl border border-white/5 overflow-x-auto">
              <table className="w-full text-right text-sm whitespace-nowrap">
                <thead className="bg-bgPrimary text-textGray border-b border-white/5">
                  <tr>
                    <th className="p-3 font-medium">نام رقیب/جایگزین</th>
                    <th className="p-3 font-medium">نوع خدمت</th>
                    <th className="p-3 font-medium">مشتری هدف</th>
                    <th className="p-3 font-medium">مدل درآمدی</th>
                    <th className="p-3 font-medium">نقاط قوت</th>
                    <th className="p-3 font-medium">نقاط ضعف</th>
                  </tr>
                </thead>
                <tbody className="text-white divide-y divide-white/5">
                  <tr className="hover:bg-white/5">
                    <td className="p-3 font-medium">عمده‌فروشان سنتی بازار</td>
                    <td className="p-3 text-textGray">فروش حضوری/تلفنی</td>
                    <td className="p-3 text-textGray">خرده‌فروشان محلی</td>
                    <td className="p-3 text-textGray">حاشیه سود فروش</td>
                    <td className="p-3 text-greenAccent text-xs">اعتماد بالا، موجودی زیاد</td>
                    <td className="p-3 text-coral text-xs">بدون شفافیت قیمت، بدون سیستم آنلاین</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="p-3 font-medium">اپلیکیشن‌های پخش مویرگی</td>
                    <td className="p-3 text-textGray">پلتفرم B2B عمومی</td>
                    <td className="p-3 text-textGray">خرده‌فروشان FMCG</td>
                    <td className="p-3 text-textGray">کارمزد + حاشیه سود</td>
                    <td className="p-3 text-greenAccent text-xs">زیرساخت فنی قوی</td>
                    <td className="p-3 text-coral text-xs">عدم تمرکز بر دخانیات، تنوع محدود</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="p-3 font-medium">نمایندگی‌های رسمی</td>
                    <td className="p-3 text-textGray">فروش مستقیم</td>
                    <td className="p-3 text-textGray">توزیع‌کنندگان بزرگ</td>
                    <td className="p-3 text-textGray">قیمت مصوب</td>
                    <td className="p-3 text-greenAccent text-xs">قیمت پایین، کالای اصل</td>
                    <td className="p-3 text-coral text-xs">حداقل سفارش بالا، بدون اعتبار</td>
                  </tr>
                  <tr className="hover:bg-white/5 bg-gold/5">
                    <td className="p-3 font-bold text-gold">توتون‌یار (ما)</td>
                    <td className="p-3 text-textGray">پلتفرم B2B تخصصی دخانیات</td>
                    <td className="p-3 text-textGray">خرده‌فروشان شیراز و فارس</td>
                    <td className="p-3 text-textGray">حاشیه سود + اعتبار</td>
                    <td className="p-3 text-greenAccent text-xs">شفافیت قیمت، اعتبار خرید، موجودی لحظه‌ای</td>
                    <td className="p-3 text-coral text-xs">نسخه اولیه، پایگاه مشتری محدود</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bgPrimary p-6 rounded-2xl border border-gold border-dashed">
              <h4 className="text-gold font-bold mb-3">مزیت رقابتی بی‌نظیر</h4>
              <p className="text-sm text-white leading-relaxed">
                ترکیب <span className="text-gold font-bold">شناخت عمیق بازار سنتی شیراز</span> (سابقه و اعتبار فعلی) با <span className="text-gold font-bold">تکنولوژی مدرن، سریع و کاربرپسند</span>، همراه با اختصاص اعتبار مالی هوشمند.
              </p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
              <h4 className="text-coral font-bold mb-3">تحلیل تهدیدهای اصلی</h4>
              <ul className="text-sm text-textGray list-disc list-inside space-y-2">
                <li>ورود رقبای بزرگ فناوری به بازار</li>
                <li>تغییرات قانونی در حوزه دخانیات</li>
                <li>مقاومت فرهنگی خرده‌فروشان سنتی</li>
                <li>ریسک نکول اعتبارات</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ═══════ Section 5: تحلیل واسطه‌گری ═══════ */}
        <div className="border-t border-white/10 mt-16 pt-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <ArrowsLeftRight weight="fill" className="text-gold" size={24} /> تحلیل واسطه‌گری
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">آیا این کسب‌وکار ذاتاً واسطه‌گر است؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بله. توتون‌یار یک واسطه دیجیتال بین تولیدکنندگان/واردکنندگان دخانیات و خرده‌فروشان نهایی است. نقش واسطه‌گری سنتی (عمده‌فروشی) را حفظ کرده اما آن را دیجیتال و شفاف می‌کند.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-white font-bold mb-3">بین چه گروه‌هایی واسطه‌گری می‌کند؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بین تولیدکنندگان و واردکنندگان رسمی از یک سو و خرده‌فروشان (سوپرمارکت، دکه، فروشگاه تخصصی) از سوی دیگر.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-greenAccent">
              <h4 className="text-greenAccent font-bold mb-3">چه واسطه‌هایی در زنجیره ارزش وجود دارند؟</h4>
              <p className="text-sm text-textGray leading-relaxed">تولیدکننده ← نماینده رسمی ← عمده‌فروش بزرگ ← عمده‌فروش محلی (ما) ← خرده‌فروش ← مصرف‌کننده. توتون‌یار در نقش عمده‌فروش محلی دیجیتال قرار دارد.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">آیا کسب‌وکار ارتباطاتی را کاهش می‌دهد؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بله. حذف نیاز به ویزیتور حضوری، حذف تماس‌های تلفنی مکرر برای استعلام قیمت، و حذف مراجعه حضوری مشتری به انبار.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-white font-bold mb-3">آیا مقیاس‌پذیری ایجاد می‌کند؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بله. با افزودن محصول جدید به کاتالوگ و گسترش جغرافیایی، بدون نیاز به افزایش نیروی فروش، تعداد مشتریان قابل خدمت‌رسانی رشد می‌کند.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-greenAccent">
              <h4 className="text-greenAccent font-bold mb-3">آیا تخصص و تجربه را در اختیار مشتری قرار می‌دهد؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بله. اطلاعات دقیق محصولات، پیشنهاد خرید بر اساس سابقه، و مشاوره در انتخاب اقلام پرفروش.</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-gold">
              <h4 className="text-gold font-bold mb-3">آیا ریسک مشتری یا عرضه‌کننده را کاهش می‌دهد؟</h4>
              <p className="text-sm text-textGray leading-relaxed">بله. مشتری ریسک قیمت نامشخص و ناموجودی کالا را ندارد. عرضه‌کننده ریسک وصول نشدن مطالبات را کاهش می‌دهد (سیستم اعتبارسنجی).</p>
            </div>
            <div className="bg-bgCard p-6 rounded-2xl border-t-4 border-coral">
              <h4 className="text-white font-bold mb-3">چه واسطه‌هایی ممکن است حذف شوند؟</h4>
              <p className="text-sm text-textGray leading-relaxed">ویزیتورهای سنتی (جایگزین با پلتفرم)، واسطه‌های تلفنی استعلام قیمت. در بلندمدت، امکان اتصال مستقیم به نمایندگی‌های رسمی و حذف یک لایه واسطه‌گری وجود دارد.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
