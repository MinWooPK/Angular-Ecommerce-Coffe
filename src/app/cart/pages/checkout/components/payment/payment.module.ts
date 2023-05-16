import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentComponent],
  exports: [PaymentComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PaymentModule {}
