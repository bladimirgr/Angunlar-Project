import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoMedicalRecordComponent } from './contents/info-medical-record/info-medical-record.component';
import { DashboardMedicalComponent } from './components/dashboard-medical/dashboard-medical.component';
import { ListMedicalRecordComponent } from './contents/list-medical-record/list-medical-record.component';
import { CreateMedicalRecordComponent } from './contents/create-medical-record/create-medical-record.component';

const routes: Routes = [
  {
    path: '',
    component: ListMedicalRecordComponent
  },
  {
    path: ':id',
    component: CreateMedicalRecordComponent
  },
  {
    path: ':id/:service',
    component: DashboardMedicalComponent
  },
  {
    path: 'info/info/:id',
    component: InfoMedicalRecordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule { }
