import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';//برای روتر
import { SliderComponent } from '../slider/slider.component';//برای اضافه کردن کاپوننت اسلایدرم
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,SliderComponent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
