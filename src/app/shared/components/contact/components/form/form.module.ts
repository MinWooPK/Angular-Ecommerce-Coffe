import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class FormModule {}
