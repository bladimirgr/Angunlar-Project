import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';
import { CommonModule } from '@angular/common';
import { DoctorsService } from './core/services/doctor/doctors.service';
import { PatientsService } from './core/services/patients/patients.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersService } from './core/services/users/users.service';
import { ProvincesService } from './core/services/provinces/province.service';
import { MedicalRecordService } from './core/services/medical-record/medical-record.service';
import { OccupationService } from './core/services/occupation/occupation.service';
import { SpecialtyService } from './core/services/specialty/specialty.service';
import { ServicesService } from './core/services/services/services.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebModule
  ],
  providers: [DoctorsService, PatientsService, UsersService, ProvincesService, MedicalRecordService, OccupationService, SpecialtyService, ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
