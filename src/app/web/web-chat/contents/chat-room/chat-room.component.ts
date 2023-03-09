import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../../core/services/chat/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  message!: string

  constructor(public chatService: ChatService) { }

  ngOnInit() {

  }

  sendMessage(message: string): void {
    if(message === '') {
    } else {
      this.chatService.sendMessage(message); 
    }
  }


}
