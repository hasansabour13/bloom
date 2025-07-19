import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // برای دریافت پارامترهای آدرس (URL)
import { CommonModule } from '@angular/common'; // ماژول‌های عمومی انگولار مثل ngIf، ngFor
import { RouterModule } from '@angular/router'; // ماژول مسیریابی انگولار
import { MatButtonModule } from '@angular/material/button'; // دکمه‌های متریال
import { FormsModule } from '@angular/forms'; // فرم‌ها و دوطرفه‌سازی داده (ngModel)
import { CartService } from '../cart.service'; // سرویس سبد خرید (خدمات مربوط به کارت)

// تعریف کامپوننت با selector و مشخصات
@Component({
  selector: 'app-product-detail',
  standalone: true, // کامپوننت مستقل بدون نیاز به ماژول جدا
  imports: [RouterModule, CommonModule, MatButtonModule, FormsModule], // ماژول‌های استفاده شده در این کامپوننت
  templateUrl: './product-detail.component.html', // آدرس فایل HTML مربوط به این کامپوننت
  styleUrl: './product-detail.component.css' // آدرس فایل CSS مربوط به این کامپوننت
})
export class ProductDetailComponent {

selectedSize: any;

sizes: any;

// بخش دکمه های انتخاب رنگ
// تعریف رنگ‌ها
colorImageMap: { [key: string]: string[] } = {};
colors: string[] = []; // اگر میخوای لیست رنگ‌ها رو نشون بدی


// نگاشت رنگ فارسی به کد رنگ برای دکمه‌ها
colorMap: { [key: string]: string } = {
  'قرمز': '#ff0000',
  'آبی': '#0000ff',
  'مشکی': '#000000'
};



// رنگ انتخاب شده
selectedColor: string = '';
colorList = [
  { name: 'قرمز', colorCode: 'red', image: 'assets/pants-red.jpg' },
  { name: 'آبی', colorCode: 'blue', image: 'assets/pants-blue.jpg' },
  { name: 'مشکی', colorCode: 'black', image: 'assets/pants-black.jpg' }
];


selectColor(colorName: string) {
  this.selectedColor = colorName;
  const image = this.colorImageMap[colorName]?.[0];
  if (image) {
    this.mainImage = image;
    this.currentImageIndex = this.productData.images.indexOf(image);
  }
}








  // سازنده کلاس با تزریق سرویس‌ها: ActivatedRoute برای پارامترهای URL و CartService برای سبد خرید
  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  // متغیر برای ذخیره آیدی محصول که از URL دریافت می‌شود
  productId: string | null = null;

  // نگه داشتن اطلاعات کامل محصول انتخاب شده
  productData: any = null;

  // عکس اصلی که بزرگ نمایش داده می‌شود
  mainImage: string = '';

  // شاخص عکس فعلی در آرایه تصاویر محصول
  currentImageIndex: number = 0;

  // متغیر برای نگه داشتن متن نظر کاربر
  review: string = '';

  // لیست محصولات موجود (آرایه‌ای از آبجکت‌ها)
  allProducts: any[] = [
    {
      id: '1',
      name: 'شلوار جین زنانه',
      images: ['assets/شلوار/1.jpg', 'assets/شلوار/2.jpg'],
      description: 'شلوار جین کلاسیک زنانه',
      price: 1500,
       colorImageMap: {
    'قرمز': ['assets/شلوار/1.jpg'],
    'آبی': ['assets/شلوار/3.jpg'],
    'مشکی': ['assets/شلوار/4.jpg']
  }
    },
    {
      id: '2',
      name: 'شلوار بگ',
      images: ['assets/شلوار/3.jpg', 'assets/شلوار/4.jpg'],
      description: 'شلوار بگ راحتی با پارچه لینن',
      price: 1700
    },
    {
      id: '3',
      name: 'شلوار رسمی',
      images: ['assets/شلوار/5.jpg'],
      description: 'شلوار پارچه‌ای رسمی',
      price: 2000
    },
    {
      id: '12',
      name: 'هودی',
      images: ['assets/هودی/یک.jpg', 'assets/هودی/دو.jpg' , 'assets/هودی/دو.jpg'],
      description: 'هودی گرم و راحت',
      price:"200/000",
        colorImageMap: {
    'قرمز': ['assets/هودی/یک.jpg'],
    'آبی': ['assets/هودی/دو.jpg'],
    'مشکی': ['assets/هودی/سه.jpg']
  }
    }
  ];

  // متد lifecycle که هنگام شروع اجرا می‌شود (کامپوننت لود می‌شود)
  ngOnInit() {
    // گرفتن پارامتر 'id' از URL
    this.productId = this.route.snapshot.paramMap.get('id');
    // پیدا کردن محصول در آرایه allProducts که آیدی‌اش با مقدار URL برابر باشد
    this.productData = this.allProducts.find(p => p.id === this.productId);

    // اگر محصول پیدا شد، عکس اول را به عنوان عکس اصلی انتخاب کن
    if (this.productData) {
      this.currentImageIndex = 0;
      this.mainImage = this.productData.images[this.currentImageIndex];
      // گرفتن رنگ‌ها و نگاشت رنگ-عکس از محصول
    this.colorImageMap = this.productData.colorImageMap || {};
    this.colors = Object.keys(this.colorImageMap);
    }


  }

  // وقتی کاربر روی یک عکس کوچک کلیک می‌کند این متد اجرا می‌شود
  selectImage(image: string) {
    this.mainImage = image; // عکس اصلی را به آن تصویر تغییر می‌دهد
    // پیدا کردن شاخص آن عکس در آرایه تصاویر تا فلش‌ها درست کار کنند
    this.currentImageIndex = this.productData.images.indexOf(image);
  }

  // رفتن به عکس بعدی در اسلایدر
  nextImage() {
    if (!this.productData?.images) return; // اگر محصول یا تصاویر نبود، کاری نکن
    // افزایش شاخص عکس فعلی و رفتن به ابتدای آرایه اگر به انتها رسید
    this.currentImageIndex = (this.currentImageIndex + 1) % this.productData.images.length;
    this.mainImage = this.productData.images[this.currentImageIndex];
  }

  // رفتن به عکس قبلی در اسلایدر
  previousImage() {
    if (!this.productData?.images) return;
    // کاهش شاخص عکس و رفتن به انتهای آرایه اگر به ابتدا رسید
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.productData.images.length) % this.productData.images.length;
    this.mainImage = this.productData.images[this.currentImageIndex];
  }

  // افزودن محصول به سبد خرید
  addToCart(product: any) {
    console.log('محصول اضافه شد:', product); // لاگ در کنسول برای تست
    this.cartService.addToCart(product); // استفاده از سرویس کارت برای افزودن محصول
  }

  // ارسال نظر کاربر
  submitReview() {
    // اگر متن نظر خالی نبود (با حذف فاصله‌ها)
    if (this.review.trim()) {
      alert('ممنون از نظر شما ❤️'); // پیام تشکر به کاربر نمایش داده می‌شود
      this.review = ''; // پاک کردن متن نظر بعد از ارسال
    }
  }
}
