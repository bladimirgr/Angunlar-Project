import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule } from 'primeng/badge';
import { WebChatRoutingModule } from './web-chat-routing.module';
import { IconWhatsappComponent } from './components/icon-whatsapp/icon-whatsapp.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IconWhatsappComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebChatRoutingModule,
    BadgeModule
  ], 
  exports: [
    IconWhatsappComponent
  ]
})
export class WebChatModule { }
