import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';//برای روتر
import { RouterModule } from '@angular/router';//برای قابلیت روتر اکتیو
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال
import { FormsModule } from '@angular/forms';//ngmoudle
import { Router } from '@angular/router';//router
import { ViewportScroller } from '@angular/common';//اسکرول برای محصولات



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,MatButtonModule,MatIconModule,FormsModule, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,private viewportScroller: ViewportScroller){}
  title = 'bloom';

 searchQuery: string = '';//ngmodle برای اینپوت سرچ هدر
 //برای عملیات سرچ هدر

 onSearch() {
    console.log('Search for:', this.searchQuery);
    // عملیات جستجو رو اینجا انجام بده
    if (this.searchQuery.trim() === 'شلوار' || this.searchQuery.trim() === 'shalvar') {
      this.router.navigate(['/sh']);
    }
    //trimبرای وقتی که اگه کاربر فاصله اضافی سرچ کرد باز هم بیاره



//اگه سرچ شد محصولات بره به محصولات
    if (this.searchQuery.trim() === 'محصولات') {
      this.router.navigate(['/']).then(() => {
        // صبر می‌کنیم تا روت لود شه، بعد اسکرول می‌کنیم
        this.viewportScroller.scrollToAnchor('products');
      });
    }
  }


//فانکش برای ال آی محصولات
  scrollToProducts() {
    this.router.navigate(['/']).then(() => {
      this.viewportScroller.scrollToAnchor('products');
    });
  }


}
