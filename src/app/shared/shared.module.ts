import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimengModule } from './shared.primeng.module';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { ModalComponent } from './components/modal-component/modal.component';

@NgModule({
  declarations: [
    ErrorMessagesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedPrimengModule
  ],
  exports: [
    ErrorMessagesComponent,
    ModalComponent
  ]
})
export class SharedModule { }
