
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
//اضافه کردن به سبد خرید
  addToCart(product: any) {
    this.cartItems.push(product);
  }
//نشان دادن لیست سبد خرید
  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
