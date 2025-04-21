import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';//ngmoudle
import { MatButtonModule } from '@angular/material/button';//برای دکمه انگولار متریال
import { MatIconModule } from '@angular/material/icon';//برای ایکون متریال


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ,MatIconModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';

  btn(){
    console.log('مقدار username:', this.username);


    if (!this.username?.trim()) {
      alert('لطفا خالی نزار');
    } else {
      alert('خوش آمدی ' + this.username + '!');
    }
  }

}
