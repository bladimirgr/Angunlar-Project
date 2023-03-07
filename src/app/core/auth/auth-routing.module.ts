import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainContentComponent } from '../../common/contents/main-content.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
const routes: Routes = [

  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
