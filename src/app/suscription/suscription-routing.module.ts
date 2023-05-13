import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuscriptionComponent } from './pages/suscription.component';

const routes: Routes = [{ path: '', component: SuscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuscriptionRoutingModule {}
