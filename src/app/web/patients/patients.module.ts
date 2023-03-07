import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientsRoutingModule } from './patients-routing.module';
import { ListPatientsComponent } from './contents/list-patients/list-patients.component';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ListPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    ListPatientsComponent
  ]
})
export class PatientsModule { }
