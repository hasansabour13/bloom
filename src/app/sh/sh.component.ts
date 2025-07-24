import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';//router
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-sh',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatButtonModule,BreadcrumbComponent],
  templateUrl: './sh.component.html',
  styleUrl: './sh.component.css'
})
export class ShComponent {
  breadcrumbPath = [
    { label: 'خانه', link: '/' },
    { label: 'شلوار' }
  ];

}
