
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';//برای روتر
import { RouterModule } from '@angular/router';//برای قابلیت روتر اکتیو
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال
import { FormsModule } from '@angular/forms';//ngmoudle
import { Router } from '@angular/router';//router
import { ViewportScroller } from '@angular/common';//اسکرول برای محصولات
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [ RouterModule,MatButtonModule,MatIconModule,FormsModule,NgIf,NgFor],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

 @Input() path: { label: string, link?: string }[] = [];
}
