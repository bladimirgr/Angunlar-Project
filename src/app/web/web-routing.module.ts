import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:() => import ('../common/commons.module').then(c => c.CommonsModule)
  },
  {
    path:'commons',
    loadChildren:() => import ('../web/common/commons.module').then(c => c.CommonsModule)
  },
  {
    path:'appointment',
    loadChildren:() => import ('../web/appointment/appointment.module').then(a => a.AppointmentModule)
  },
  {
    path: 'medical-record',
    loadChildren:() => import ('../web/medical-record/medical-record.module').then(m => m.MedicalRecordModule)
  },
  {
    path:'users',
    loadChildren:() => import ('../web/users/users.module').then(u => u.UsersModule)
  },
  {
    path:'doctors',
    loadChildren:() => import ('../web/doctors/doctor.module').then(d => d.DoctorModule)
  },
  {
    path:'patients',
    loadChildren:() => import ('../web/patients/patients.module').then(p => p.PatientsModule)
  },
  {
    path:'chat',
    loadChildren:() => import ('../web/web-chat/web-chat.module').then(w => w.WebChatModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebRoutingModule { }
