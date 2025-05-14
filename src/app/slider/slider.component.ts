import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';//چون مستقله برای استفاده ازدستوراتی مثل انجی فور

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/هودی/پنج.jpg',


    'assets/شلوار.jpg',
    'assets/عطر.jpg'
  ];
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    // شروع کردن تغییر تصویر هر 3 ثانیه
    this.interval = setInterval(() => this.nextSlide(), 3000); // 3000 میلی‌ثانیه معادل 3 ثانیه
  }

  ngOnDestroy() {
    // پاک کردن تایمر وقتی کامپوننت نابود میشه
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

//برای نقط اسلایدر
  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
