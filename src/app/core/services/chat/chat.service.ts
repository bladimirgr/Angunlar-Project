import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  selectedUser: any;
  usersList: any [] = [];
  chats: any [] = [];
  count!: string;
  usernameAlreadySelected : boolean = false;
  users!: any [];

  constructor(
    private socket: Socket
  ) {
    this.onReceiveMessage();
    this.onUser();
    this.usersOnline();
    this.existUsers();
  }

  usersOnline(): any {
    this.socket.on("users", (users: any[]) => {
      users.forEach((user) => {
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
      return this.users.push(user);
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
