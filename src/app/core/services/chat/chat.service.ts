import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats: any[] = [];
  count!: string;
  usernameAlreadySelected: boolean = false;
  selectedUser: any
  users!: any[];

  constructor(
    private socket: Socket
  ) {
    this.onUser();
    this.getOnline();
    this.getExistUsers();
  }

  getOnline() {
    let observable = new Observable(observer => {
      this.socket.on("users", (users: any[]) => {
        this.count = users.length.toString();
        observer.next(users)
        users.forEach((user) => {
          this.users = users.sort((a, b) => {
            if (a.self) return -1;
            if (b.self) return 1;
            if (a.username < b.username) return -1;
            return a.username > b.username ? 1 : 0;
          })
        })
      });

      return () => {
        this.socket.disconnect();
      };
    })
    return observable;

  }

  getExistUsers() {
    let observable = new Observable(observer => {
      this.socket.on("userConnected", (user: any) => {
        observer.next(user)
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  onUser(): any {
    this.usernameAlreadySelected = true;
    this.socket.ioSocket['auth'] = { username: localStorage.getItem('x-user') };
    this.socket.connect();
  }

  sendMessage(message: any): any {
    const messageInfo = {
      text: message,
      date: new Date(),
      username: localStorage.getItem('x-user')
    }
    this.chats.push(messageInfo);
    this.socket.emit("sendMessage", messageInfo);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on("receiveMessage", (messages: any) => {
        observer.next(messages)
        this.chats.push(messages);
      })
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  onMessage(message: any, selectedUser: any) {
    if (selectedUser) {
      this.socket.emit("private message", {
        message,
        to: selectedUser.userID,
      });
      selectedUser.messages.push({
        message,
        fromSelf: true,
      });
    }
  }



}
