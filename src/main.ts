import { bootstrapApplication } from '@angular/platform-browser'; // ایمپورت برای راه‌اندازی اپلیکیشن
import { provideRouter } from '@angular/router'; // ایمپورت برای روتر
import { AppComponent } from './app/app.component'; // کامپوننت اصلی اپلیکیشن
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // ایمپورت مسیرها از فایل app.routes.ts

// راه‌اندازی اپلیکیشن Angular و اضافه کردن روتر
bootstrapApplication(AppComponent, {
  providers: [
    // اینجا روتر رو با مسیرها (routes) ارائه می‌دهیم
    provideRouter(routes), provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err)); // در صورت بروز خطا، خطا را در کنسول نمایش می‌دهیم
