import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimengModule } from './shared.primeng.module';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { ModalComponent } from './components/modal-component/modal.component';
import { ProgressSpinnerComponent } from './components/progressSpinner/progressSpinner.component';

@NgModule({
  declarations: [
    ErrorMessagesComponent,
    ModalComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedPrimengModule
  ],
  exports: [
    ErrorMessagesComponent,
    ModalComponent,
    ProgressSpinnerComponent
  ]
})
export class SharedModule { }
