import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentComponent } from './contents/create-appointment/create-appointment.component';
import { ListAppointmentComponent } from './contents/list-appointment/list-appointment.component';
import { UpdateAppointmentComponent } from './contents/update-appointment/update-appointment.component';

const routes: Routes = [
  {
    path: "all",
    component: CreateAppointmentComponent
  },
  {
    path: "list",
    component: ListAppointmentComponent
  },
  {
    path: "update/:id",
    component: UpdateAppointmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
