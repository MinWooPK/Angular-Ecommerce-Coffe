import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuscriptionRoutingModule } from './suscription-routing.module';
import { SuscriptionComponent } from './pages/suscription.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SuscriptionComponent],
  imports: [CommonModule, SuscriptionRoutingModule, SharedModule],
})
export class SuscriptionModule {}
