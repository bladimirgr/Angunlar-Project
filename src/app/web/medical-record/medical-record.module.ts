import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MedicalRecordRoutingModule } from './medical-record-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { DashboardMedicalComponent } from './components/dashboard-medical/dashboard-medical.component';
import { EncyclopediaDiseasesComponent } from './components/encyclopedia-diseases/encyclopedia-diseases.component';
import { CreateMedicalRecordComponent } from './contents/create-medical-record/create-medical-record.component';
import { ListMedicalRecordComponent } from './contents/list-medical-record/list-medical-record.component';

@NgModule({
  declarations: [
    DashboardMedicalComponent,
    EncyclopediaDiseasesComponent,
    CreateMedicalRecordComponent,
    ListMedicalRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MedicalRecordRoutingModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ListboxModule,
    TableModule,
    InputTextareaModule
  ],
  exports: [
    DashboardMedicalComponent,
    EncyclopediaDiseasesComponent,
    CreateMedicalRecordComponent,
    ListMedicalRecordComponent
  ]
})
export class MedicalRecordModule { }
