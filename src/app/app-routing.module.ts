import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './common/contents/main-content.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./core/auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: '',
    component: MainContentComponent,
    loadChildren: () => import('./web/web.module').then( w => w.WebModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
