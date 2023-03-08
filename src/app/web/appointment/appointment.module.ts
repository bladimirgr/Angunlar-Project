import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentRoutingModule } from './appointment-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';

import { CreateAppointmentComponent } from './contents/create-appointment/create-appointment.component';
import { ListAppointmentComponent } from './contents/list-appointment/list-appointment.component';
import { CommonsModule } from '../common/commons.module';
import { PatientsModule } from '../patients/patients.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListAppointmentComponent,
    CreateAppointmentComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    AppointmentRoutingModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    FormsModule, 
    ReactiveFormsModule,
    DialogModule,
    PatientsModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AppointmentModule { }
