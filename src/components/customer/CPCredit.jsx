import { CheckCircle } from '@phosphor-icons/react'

export default function CPCredit() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-white mb-6 flex-shrink-0">مدیریت اعتبار مالی</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6">وضعیت سقف اعتبار</h3>
          <div className="flex justify-between items-end mb-2">
            <div>
              <div className="text-xs text-textGray mb-1">سقف مصوب شما:</div>
              <div className="text-2xl font-bold text-white">۵۰,۰۰۰,۰۰۰ <span className="text-sm font-normal text-textGray">تومان</span></div>
            </div>
            <div className="text-left">
              <div className="text-xs text-coral mb-1">مصرف شده:</div>
              <div className="text-lg font-bold text-coral">۱۲,۰۰۰,۰۰۰</div>
            </div>
          </div>
          <div className="w-full bg-bgPrimary h-3 rounded-full overflow-hidden mb-2">
            <div className="bg-coral h-full w-[24%] rounded-full" />
          </div>
          <div className="flex justify-between text-xs text-textGray">
            <span>۰</span>
            <span>موجودی باقی‌مانده: ۳۸,۰۰۰,۰۰۰</span>
            <span>۵۰ م</span>
          </div>
        </div>

        <div className="bg-bgCard p-6 rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6">سابقه تسویه‌ها</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-bgPrimary p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                <CheckCircle weight="fill" size={20} className="text-greenAccent" />
                <div>
                  <div className="text-white text-sm">تسویه چک شماره ۱۴۵۵۲</div>
                  <div className="text-textGray text-xs">۱۴۰۲/۰۷/۱۵</div>
                </div>
              </div>
              <div className="text-white font-bold text-sm">۸,۵۰۰,۰۰۰ ت</div>
            </div>
            <div className="flex justify-between items-center bg-bgPrimary p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                <CheckCircle weight="fill" size={20} className="text-greenAccent" />
                <div>
                  <div className="text-white text-sm">تسویه فاکتور ORD-0912</div>
                  <div className="text-textGray text-xs">۱۴۰۲/۰۶/۲۲</div>
                </div>
              </div>
              <div className="text-white font-bold text-sm">۴,۲۰۰,۰۰۰ ت</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
