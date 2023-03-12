import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    ChipModule,
    ButtonModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UsersModule { }
