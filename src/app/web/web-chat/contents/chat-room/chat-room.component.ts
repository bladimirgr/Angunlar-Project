import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnChanges {

  users: any [] = [];
  message!: any
  selectedUser: any;
  usersList: any [] = [];
  chats: any [] = [];
  count!: string
  usernameAlreadySelected : boolean = false;

  constructor(
    private socket: Socket
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.users
    this.count
  }
  
  ngOnInit(): void {
    this.onReceiveMessage();
    this.usersOnline();
    this.existUsers();
    this.onUser();
  }

  usersOnline(): any {
    this.socket.on("users", (users: any[]) => {
      users.forEach((user) => {
        this.count = users.length.toString();
        this.users = users.sort((a, b) => {
          if (a.self) return -1;
          if (b.self) return 1;
          if (a.username < b.username) return -1;
          return a.username > b.username ? 1 : 0;
        })        
      })
    });
  }

  existUsers(): any {
    this.socket.on("userConnected", (user: any) => {
      this.users.push(user);

      console.log('%c⧭', 'color: #aa00ff', user);
    });
  }

  onUser(): any {
    this.usernameAlreadySelected = true;
    this.socket.ioSocket['auth'] = { username: localStorage.getItem('x-user')};
    this.socket.connect();
  }

  sendMessage(message: any): any {
    const messageInfo = {
      text: message,
      date: new Date(),
      username:  localStorage.getItem('x-user')
    }
    this.chats.push(messageInfo)
    this.socket.emit("sendMessage",  messageInfo)
  }

  onReceiveMessage(): any {
    this.socket.on("receiveMessage", (messages: any) => { 
      this.chats.push(messages);
    })
  }


}
