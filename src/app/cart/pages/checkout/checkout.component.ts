import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/interface';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { DirectionComponent } from './components/direction/direction.component';
import { PaymentComponent } from './components/payment/payment.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @ViewChild(DirectionComponent) directionComponent!: DirectionComponent;
  @ViewChild(PaymentComponent) paymentComponent!: PaymentComponent;

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
  hell() {
    console.log('1', this.paymentComponent.isFormSubmitedCard);
    console.log('2', this.directionComponent.isFormSubmited);
  }
}
