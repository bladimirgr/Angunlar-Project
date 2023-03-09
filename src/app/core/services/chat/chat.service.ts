import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats: string [] = []

  constructor(
    private socket: Socket
  ) {
    this.onReceiveMessage();
  }

  conexion(): void {
    this.socket.connect()
  }

  sendMessage(message: string): void {
    this.chats.push(message)
    this.socket.emit("sendMessage",  message)  
  }

  onReceiveMessage(): void {
    this.socket.on("receiveMessage", (messages: string) => {
      // this.chats.push(messages)
    })
  }


}
