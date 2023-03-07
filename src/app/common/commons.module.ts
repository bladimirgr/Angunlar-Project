import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './contents/main-content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsPrimengModule } from './commons-primeng.module';

@NgModule({
  declarations: [
    SidebarComponent,
    MainContentComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CommonsRoutingModule,
    CommonsPrimengModule
  ],
  exports: [DashboardComponent, SidebarComponent, HeaderComponent, FooterComponent, MainContentComponent ],
  providers: [],
})
export class CommonsModule { }
