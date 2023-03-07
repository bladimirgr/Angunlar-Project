import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ListPatientsComponent } from './contents/list-patients/list-patients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    ListPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    ListPatientsComponent
  ]
})
export class PatientsModule { }
