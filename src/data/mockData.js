export const mockProducts = [
  { id: 1, name: 'سیگار وینستون عقابی لایت', category: 'سیگار', price: 850000, stock: 150, image: 'ph-package' },
  { id: 2, name: 'سیگار وینستون عقابی اولترا', category: 'سیگار', price: 850000, stock: 120, image: 'ph-package' },
  { id: 3, name: 'سیگار کنت پلاس ۴', category: 'سیگار', price: 720000, stock: 200, image: 'ph-package' },
  { id: 4, name: 'سیگار کنت پلاس ۸', category: 'سیگار', price: 720000, stock: 180, image: 'ph-package' },
  { id: 5, name: 'سیگار مارلبرو گلد اصلی', category: 'سیگار', price: 2100000, stock: 50, image: 'ph-package' },
  { id: 6, name: 'سیگار مارلبرو قرمز اصلی', category: 'سیگار', price: 2100000, stock: 45, image: 'ph-package' },
  { id: 7, name: 'سیگار کاپیتان بلک شکلاتی', category: 'سیگار', price: 950000, stock: 80, image: 'ph-package' },
  { id: 8, name: 'تنباکو دوسیب الفاخر (۵۰ گرمی)', category: 'تنباکو', price: 125000, stock: 300, image: 'ph-leaf' },
  { id: 9, name: 'تنباکو بلوبری الفاخر (۵۰ گرمی)', category: 'تنباکو', price: 125000, stock: 250, image: 'ph-leaf' },
  { id: 10, name: 'تنباکو نعناع مزایا', category: 'تنباکو', price: 110000, stock: 10, image: 'ph-leaf' },
  { id: 11, name: 'تنباکو لیمو مزایا', category: 'تنباکو', price: 110000, stock: 0, image: 'ph-leaf' },
  { id: 12, name: 'فندک کلیپر اصل (باکس ۴۸ تایی)', category: 'فندک', price: 1450000, stock: 30, image: 'ph-fire' },
  { id: 13, name: 'فندک زیپو طلایی کلاسیک', category: 'فندک', price: 2500000, stock: 15, image: 'ph-fire' },
  { id: 14, name: 'زغال نارگیل مکعبی (۱ کیلویی)', category: 'لوازم', price: 180000, stock: 400, image: 'ph-fire-simple' },
  { id: 15, name: 'زغال لیمو جهرم (بسته ۱ کیلو)', category: 'لوازم', price: 160000, stock: 150, image: 'ph-fire-simple' },
  { id: 16, name: 'کاغذ پیپر OCB', category: 'لوازم', price: 45000, stock: 500, image: 'ph-scroll' },
  { id: 17, name: 'فیلتر خام (بسته ۱۰۰ تایی)', category: 'لوازم', price: 35000, stock: 600, image: 'ph-cylinder' },
  { id: 18, name: 'سیگار بهمن کوچک', category: 'سیگار', price: 450000, stock: 350, image: 'ph-package' },
  { id: 19, name: 'سیگار تیر', category: 'سیگار', price: 420000, stock: 400, image: 'ph-package' },
  { id: 20, name: 'تنباکو پرتقال خامه (۵۰ گرمی)', category: 'تنباکو', price: 130000, stock: 90, image: 'ph-leaf' },
];

export const mockOrders = [
  { id: 'ORD-1001', customer: 'فروشگاه شیراز مارکت', date: '۱۴۰۲/۰۸/۱۵', total: 4500000, status: 'تحویل شده', payment: 'اعتباری' },
  { id: 'ORD-1002', customer: 'سوپر مارکت عباسی', date: '۱۴۰۲/۰۸/۱۸', total: 12500000, status: 'ارسال شده', payment: 'نقدی' },
  { id: 'ORD-1003', customer: 'دکه مطبوعاتی میدان نمازی', date: '۱۴۰۲/۰۸/۲۰', total: 850000, status: 'تایید شده', payment: 'نقدی' },
  { id: 'ORD-1004', customer: 'هایپر استار خلیج فارس', date: '۱۴۰۲/۰۸/۲۱', total: 22000000, status: 'در انتظار', payment: 'اعتباری' },
  { id: 'ORD-1005', customer: 'فروشگاه شیراز مارکت', date: '۱۴۰۲/۰۸/۲۲', total: 7500000, status: 'در انتظار', payment: 'اعتباری' },
  { id: 'ORD-1006', customer: 'فروشگاه دخانیات پارس', date: '۱۴۰۲/۰۸/۲۳', total: 3200000, status: 'در انتظار', payment: 'نقدی' },
  { id: 'ORD-1007', customer: 'سوپر مارکت عباسی', date: '۱۴۰۲/۰۸/۲۴', total: 6500000, status: 'در انتظار', payment: 'اعتباری' },
  { id: 'ORD-1008', customer: 'دکه مطبوعاتی میدان نمازی', date: '۱۴۰۲/۰۸/۲۵', total: 1100000, status: 'در انتظار', payment: 'نقدی' },
  { id: 'ORD-1009', customer: 'فروشگاه شیراز مارکت', date: '۱۴۰۲/۰۸/۲۶', total: 5400000, status: 'در انتظار', payment: 'اعتباری' },
  { id: 'ORD-1010', customer: 'هایپر استار خلیج فارس', date: '۱۴۰۲/۰۸/۲۷', total: 18000000, status: 'در انتظار', payment: 'نقدی' },
];

export const mockCustomers = [
  { id: 1, name: 'فروشگاه شیراز مارکت', phone: '۰۹۱۲۳۴۵۶۷۸۹', credit: 50000000, used: 12000000, status: 'طلایی' },
  { id: 2, name: 'سوپر مارکت عباسی', phone: '۰۹۱۷۱۲۳۴۵۶۷', credit: 20000000, used: 19000000, status: 'نقره‌ای' },
  { id: 3, name: 'دکه مطبوعاتی میدان نمازی', phone: '۰۹۱۷۹۸۷۶۵۴۳', credit: 10000000, used: 0, status: 'برنزی' },
  { id: 4, name: 'هایپر استار خلیج فارس', phone: '۰۹۱۷۱۱۱۲۲۳۳', credit: 100000000, used: 45000000, status: 'پلاتینوم' },
  { id: 5, name: 'فروشگاه دخانیات پارس', phone: '۰۹۱۷۵۵۵۶۶۷۷', credit: 30000000, used: 5000000, status: 'طلایی' },
];
