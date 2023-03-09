import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule } from 'primeng/badge';
import { WebChatRoutingModule } from './web-chat-routing.module';
import { IconWhatsappComponent } from './components/icon-whatsapp/icon-whatsapp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatRoomComponent } from './contents/chat-room/chat-room.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DisplaymessageComponent } from './components/displaymessage/displaymessage.component';
import { DisplayusersComponent } from './components/displayusers/displayusers.component';
import { ListboxModule } from 'primeng/listbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    IconWhatsappComponent,
    ChatRoomComponent,
    DisplaymessageComponent,
    DisplayusersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebChatRoutingModule,
    BadgeModule,
    DialogModule,
    ButtonModule,
    ListboxModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    IconWhatsappComponent,
    ChatRoomComponent
  ]
})
export class WebChatModule { }
