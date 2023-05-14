import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SuccessComponent } from './pages/success/success.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckoutComponent, SuccessComponent, CartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule, FormsModule],
})
export class CartModule {}
