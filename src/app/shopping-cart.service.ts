import { Injectable } from '@angular/core';
import { Card } from './interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cartItems: Card[] = [];
  private totalQuantitySubject = new BehaviorSubject<number>(0);

  addToCart(card: Card) {
    const index = this.cartItems.findIndex((x) => x.id === card.id);
    if (index > -1) {
      this.cartItems[index].quantity++;
    } else {
      this.cartItems.push(card);
    }
    this.totalQuantitySubject.next(this.getTotalQuantity());
  }

  removeFromCart(card: Card) {
    const index = this.cartItems.findIndex((x) => x.id === card.id);
    if (index > -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }

      this.totalQuantitySubject.next(this.getTotalQuantity());
    }
  }

  getCartItems(): Card[] {
    return this.cartItems;
  }

  getTotalQuantity(): number {
    const totalQuantity = this.cartItems.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    return totalQuantity;
  }

  getSubtotalPrice(isNormalShipping: boolean): number {
    const subtotalPrice = this.cartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const shippingCost = isNormalShipping ? 0 : 9;
    const totalPrice = subtotalPrice + shippingCost;
    return totalPrice;
  }

  getTotalPrice(isNormalShipping: boolean): number {
    const totalPrice = this.getSubtotalPrice(isNormalShipping);
    return totalPrice;
  }

  getTotalQuantityObservable() {
    return this.totalQuantitySubject.asObservable();
  }

  constructor() {}
}
