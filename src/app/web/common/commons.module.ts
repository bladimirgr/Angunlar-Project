import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsRoutingModule } from './commons-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SharedModule } from '../../shared/shared.module';

import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    SharedModule,
    FileUploadModule
  ],
  exports: [
  ]
})
export class CommonsModule { }
