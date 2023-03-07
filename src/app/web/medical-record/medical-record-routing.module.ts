import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoMedicalRecordComponent } from './contents/info-medical-record/info-medical-record.component';
import { DashboardMedicalComponent } from './components/dashboard-medical/dashboard-medical.component';

const routes: Routes = [
  {
    path: ':id',
    component: DashboardMedicalComponent
  },
  {
    path: 'info/:id',
    component: InfoMedicalRecordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule { }
