
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ RouterModule,MatIconModule, MatButtonModule ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}

