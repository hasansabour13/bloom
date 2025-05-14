import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';//برای روتر
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // ngfor
import { RouterOutlet } from '@angular/router';//برای روتر
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال
import { FormsModule } from '@angular/forms';//ngmoudle

import { ViewportScroller } from '@angular/common';//اسکرول برای محصولات
import { CartService } from '../cart.service';//برای سبد خرید

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ RouterModule,MatButtonModule,MatIconModule,FormsModule,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent { // تعریف کامپوننت ProductDetail

  constructor(private route: ActivatedRoute,private  cartService: CartService) {}
  // constructor فقط برای گرفتن اطلاعات از URL ساخته شده (مثلاً آیدی محصول)

  productId: string | null = null;
  // متغیر برای نگه‌داشتن آیدی محصولی که از URL می‌گیریم

  mainImage: string = '';
  // عکسی که قراره به‌صورت بزرگ نمایش داده بشه (پیش‌فرض خالیه، بعداً مقدار می‌گیره)



  allProducts: any[] = [
    // آرایه‌ای از همه محصولات که شامل آیدی، عکس‌ها و توضیحات هر محصوله
    {
      id: '1',
      images: ['assets/شلوار/1.jpg', 'assets/شلوار/2.jpg'],
      description: 'شلوار جین کلاسیک زنانه',
      price:1500
    },
    {
      id: '2',
      images: ['assets/شلوار/3.jpg', 'assets/شلوار/4.jpg'],
      description: 'شلوار بگ راحتی با پارچه لینن'
    },
    {
      id: '3',
      images: ['assets/شلوار/5.jpg'],
      description: 'شلوار پارچه‌ای رسمی'
    },

    {
      id:'12',
      images:['assets/هودی/یک.jpg' ,'assets/هودی/دو.jpg' ,'assets/هودی/film.mp4' ],
      description: 'هودی ',
      price:1500
    }
    // اینجا می‌تونی محصولات بیشتری اضافه کنی
  ];

  productData: any = null;
  // این متغیر، اطلاعات کامل محصولی که انتخاب شده رو نگه می‌داره

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    // وقتی کامپوننت لود شد، آیدی رو از URL می‌گیره و ذخیره می‌کنه

    this.productData = this.allProducts.find(p => p.id === this.productId);
    // توی لیست محصولات می‌گرده دنبال اون محصولی که آیدیش یکیه با آیدی توی URL

    if (this.productData) {
      this.mainImage = this.productData.images[0];
      // اگه محصول پیدا شد، اولین عکس اون محصول میشه عکس اصلی صفحه
    }
  }

  selectImage(image: string) {
    this.mainImage = image;
    // وقتی روی یه عکس دیگه کلیک شد، همون عکس جدید رو نشون می‌ده
  }

  isVideo(file: string): boolean {
    return file.toLowerCase().endsWith('.mp4');
  }


  review: string = '';
  // متنی که کاربر برای نظر وارد می‌کنه

  submitReview() {
    if (this.review.trim()) {
      alert('ممنون از نظرت ❤️');
      this.review = '';
      // اگه چیزی توی کادر نظر نوشته شده باشه، یه پیام تشکر نشون می‌ده و نظر رو پاک می‌کنه
    }
 }

 //فانکشن برای دکمه سبد خرید
 addToCart(product: any) {
  console.log('محصول اضافه شد:', product);
  this.cartService.addToCart(product);
}


}

