import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterprsieRoutingModule } from './enterprise-routing.module';
import { EnterpriseComponent } from './pages/enterprise.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EnterpriseComponent],
  imports: [CommonModule, EnterprsieRoutingModule, SharedModule],
})
export class EnterpriseModule {}
