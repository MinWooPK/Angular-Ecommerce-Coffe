import { Component } from '@angular/core';
import { Card } from 'src/app/interface';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  cartItems: Card[] = [];
  totalQuantity = 0;
  totalPrice = 0;
  isNormalShipping = true;
  subtotalPrice = 0;
  selectedOption: string = 'normal';
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.cartService.getIsNormalShipping().subscribe((isNormalShipping) => {
      this.isNormalShipping = isNormalShipping;
      this.subtotalPrice = this.cartService.getSubtotalPrice(
        this.isNormalShipping
      );
      this.totalPrice = this.cartService.getTotalPrice(this.isNormalShipping);
    });
  }
}
