import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { DoctorModule } from './doctors/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { MedicalRecordModule } from './medical-record/medical-record.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    WebRoutingModule,
    UsersModule,
    DoctorModule,
    AppointmentModule,
    MedicalRecordModule
  ],
  exports: [
  
  ]
})
export class WebModule { }
