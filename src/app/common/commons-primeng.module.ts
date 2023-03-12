import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChipModule,
    DialogModule,
    MenuModule
  ],
  exports: [
    ChipModule,
    DialogModule,
    MenuModule
  ]
})
export class CommonsPrimengModule { }
