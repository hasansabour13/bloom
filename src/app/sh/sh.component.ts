import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';//router
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال

@Component({
  selector: 'app-sh',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatButtonModule],
  templateUrl: './sh.component.html',
  styleUrl: './sh.component.css'
})
export class ShComponent {

}
