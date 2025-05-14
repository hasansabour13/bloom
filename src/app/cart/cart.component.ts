import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';//ngmoudle
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';//برای روتر
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [ RouterModule,FormsModule,CommonModule],

  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
}
