import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionsComponent } from './terms-conditions.component';
import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TermsConditionsComponent],
  imports: [CommonModule, TermsConditionsRoutingModule, SharedModule],
})
export class TermsConditionsModule {}
