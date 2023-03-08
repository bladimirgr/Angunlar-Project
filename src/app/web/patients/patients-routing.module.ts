import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPatientsComponent } from './contents/list-patients/list-patients.component';
import { UpdatePatientsComponent } from './contents/update-patients/update-patients.component';

const routes: Routes = [
  {
    path: '',
    component: ListPatientsComponent
  },
  {
    path: 'update/:id',
    component: UpdatePatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
