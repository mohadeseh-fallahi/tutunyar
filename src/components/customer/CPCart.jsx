import { Plus, Minus, Trash, ShoppingCart, CheckCircle } from '@phosphor-icons/react'
import { Package, Leaf, Fire, FireSimple, Scroll, Cylinder } from '@phosphor-icons/react'
import { formatMoney } from '../../utils/formatMoney'

const iconMap = {
  'ph-package': Package,
  'ph-leaf': Leaf,
  'ph-fire': Fire,
  'ph-fire-simple': FireSimple,
  'ph-scroll': Scroll,
  'ph-cylinder': Cylinder,
}

export default function CPCart({ cart, updateQuantity, removeFromCart, clearCart, payMethod, setPayMethod }) {
  const rawTotal = cart.reduce((s, i) => s + (i.price * i.qty), 0)
  const discount = rawTotal > 5000000 ? rawTotal * 0.02 : 0
  const finalTotal = rawTotal - discount

  const checkout = () => {
    if (cart.length === 0) return alert('سبد خرید خالی است!')
    alert('سفارش دمو با موفقیت ثبت شد!')
    clearCart()
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-white mb-6 flex-shrink-0">سبد خرید</h2>
      <div className="flex flex-col lg:flex-row gap-6 h-full pb-10">
        <div className="w-full lg:w-2/3 overflow-y-auto pr-2">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-textGray bg-bgCard rounded-2xl border border-white/5">
              <ShoppingCart weight="duotone" size={48} className="mx-auto mb-4" />
              <p>سبد خرید شما خالی است.</p>
            </div>
          ) : (
            cart.map(item => {
              const Icon = iconMap[item.image] || Package
              return (
                <div key={item.id} className="bg-bgCard p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-bgPrimary rounded-lg flex items-center justify-center shrink-0">
                    <Icon weight="duotone" size={28} className="text-textGray" />
                  </div>
                  <div className="flex-1 text-center sm:text-right w-full">
                    <h4 className="text-white font-bold text-sm mb-1">{item.name}</h4>
                    <div className="text-textGray text-xs">{formatMoney(item.price)}</div>
                  </div>
                  <div className="flex items-center gap-4 bg-bgPrimary p-1 rounded-lg border border-white/5">
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded">
                      <Plus weight="bold" size={14} />
                    </button>
                    <span className="text-white font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded">
                      <Minus weight="bold" size={14} />
                    </button>
                  </div>
                  <div className="text-gold font-bold text-sm w-full sm:w-auto text-center sm:text-left">{formatMoney(item.price * item.qty)}</div>
                  <button onClick={() => removeFromCart(item.id)} className="text-coral hover:bg-coral/10 p-2 rounded shrink-0">
                    <Trash weight="bold" size={18} />
                  </button>
                </div>
              )
            })
          )}
        </div>

        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="bg-bgCard p-6 rounded-2xl border border-white/5 sticky top-0">
            <h3 className="text-lg font-bold text-white mb-4">خلاصه سفارش</h3>
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-textGray">
                <span>تعداد اقلام:</span>
                <span className="text-white">{cart.reduce((s, i) => s + i.qty, 0)}</span>
              </div>
              <div className="flex justify-between text-textGray">
                <span>مبلغ کل:</span>
                <span className="text-white">{formatMoney(rawTotal)}</span>
              </div>
              <div className="flex justify-between text-greenAccent">
                <span>تخفیف همکاری:</span>
                <span>{formatMoney(discount)}</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-base mt-2">
                <span className="text-white">مبلغ قابل پرداخت:</span>
                <span className="text-gold">{formatMoney(finalTotal)}</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-textGray mb-2">روش پرداخت</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPayMethod('credit')}
                  className={`py-2 rounded-xl text-sm font-bold transition-all ${
                    payMethod === 'credit'
                      ? 'bg-gold/10 border-2 border-gold text-gold'
                      : 'bg-transparent border border-white/10 text-textGray hover:bg-white/5'
                  }`}
                >
                  اعتباری (چکی)
                </button>
                <button
                  onClick={() => setPayMethod('cash')}
                  className={`py-2 rounded-xl text-sm font-bold transition-all ${
                    payMethod === 'cash'
                      ? 'bg-gold/10 border-2 border-gold text-gold'
                      : 'bg-transparent border border-white/10 text-textGray hover:bg-white/5'
                  }`}
                >
                  نقدی (درگاه)
                </button>
              </div>
            </div>

            <button onClick={checkout} className="w-full bg-greenAccent text-bgPrimary font-bold py-3 rounded-xl hover:bg-opacity-90 transition-colors flex justify-center items-center gap-2">
              تایید و ثبت نهایی <CheckCircle weight="bold" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
