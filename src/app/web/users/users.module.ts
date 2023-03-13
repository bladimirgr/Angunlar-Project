import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { Countries } from 'src/app/shared/pipes/countries.pipe';
import { Roles } from 'src/app/shared/pipes/roles.pipe';
import { Specialty } from 'src/app/shared/pipes/specialty.pipe';

@NgModule({
  declarations: [
    ProfileComponent,
    Countries,
    Roles,
    Specialty
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AvatarGroupModule,
    AvatarModule,
    ChipModule,
    ButtonModule,
    FileUploadModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UsersModule { }
