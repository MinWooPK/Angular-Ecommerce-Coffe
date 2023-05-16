import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentModule } from './components/payment/payment.module';
import { DirectionModule } from './components/direction/direction.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PaymentModule, DirectionModule],
})
export class CheckoutModule {}
