import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interface';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Card[] = [];
  totalQuantity = 0;
  totalPrice = 0;
  selectedOption: string = 'normal';
  isNormalShipping: boolean = true;
  subtotalPrice = 0;

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.selectedOption = 'normal';
    this.subtotalPrice = this.cartService.getSubtotalPrice(
      this.isNormalShipping
    );
    this.totalPrice = this.cartService.getTotalPrice(this.isNormalShipping);
    this.cartItems = this.cartService.getCartItems();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  updateShippingOption(isNormal: boolean) {
    if (isNormal) {
      this.selectedOption = 'normal';
      this.isNormalShipping = true;

      const urgentCheckbox = document.getElementById(
        'myUrgentCheckbox'
      ) as HTMLInputElement;
      if (urgentCheckbox) {
        urgentCheckbox.checked = false;
      }
    } else {
      this.selectedOption = 'urgente';
      this.isNormalShipping = false;

      const normalCheckbox = document.getElementById(
        'myCheckbox'
      ) as HTMLInputElement;
      if (normalCheckbox) {
        normalCheckbox.checked = false;
      }
    }
    console.log(this.selectedOption);

    this.subtotalPrice = this.cartService.getSubtotalPrice(
      this.isNormalShipping
    );
    this.totalPrice = this.cartService.getTotalPrice(this.isNormalShipping);
  }

  removeFromCart(card: Card) {
    this.cartService.removeFromCart(card);
    this.cartItems = this.cartService.getCartItems();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  addCart(card: Card) {
    this.cartService.addToCart(card);
    this.cartItems = this.cartService.getCartItems();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }
}
