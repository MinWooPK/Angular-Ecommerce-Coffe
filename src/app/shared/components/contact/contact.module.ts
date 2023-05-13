import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormModule } from './components/form/form.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, FormModule],
})
export class ContactModule {}
