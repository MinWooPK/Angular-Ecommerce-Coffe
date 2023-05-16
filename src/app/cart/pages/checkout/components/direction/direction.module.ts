import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionComponent } from './direction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DirectionComponent],
  exports: [DirectionComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DirectionModule {}
