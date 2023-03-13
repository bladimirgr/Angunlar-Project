import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    ProgressSpinnerModule
  ],
  exports: [
    DialogModule,
    ProgressSpinnerModule
  ]
})
export class SharedPrimengModule { }
