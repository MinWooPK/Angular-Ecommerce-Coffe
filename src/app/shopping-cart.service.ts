import { Injectable } from '@angular/core';
import { Card } from './interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cartItems: Card[] = [];

  addToCart(card: Card) {
    this.cartItems.push(card);
  }

  getCartItems(): Card[] {
    return this.cartItems;
  }
  constructor() {}
}
