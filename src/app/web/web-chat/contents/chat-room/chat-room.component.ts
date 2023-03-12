import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../../core/services/chat/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  connection$: Subscription = new Subscription;
  exist$: Subscription = new Subscription;
  users: any [] = [];
  message!: any [];
  selectedUser: any;
  chats: any [] = [];

  constructor(
    public chatService: ChatService
  ) {}
  
  ngOnInit(): void {
    this.connection$ = this.chatService.getMessages().subscribe((resp) => {
      this.message.push(resp);
    })

    this.exist$ = this.chatService.getExistUsers().subscribe((resp) => {
      this.users.push(resp);
    })

    this.chatService.getOnline().subscribe((resp) => {
    })
    
  }

  sendMessage(message: any){
    this.chatService.sendMessage(message);
    this.message = [];
  }

  onMessage(message: any) {
    this.chatService.onMessage(message, this.selectedUser);
  }

  ngOnDestroy() {
    this.connection$.unsubscribe();
    this.exist$.unsubscribe();
  }


}
