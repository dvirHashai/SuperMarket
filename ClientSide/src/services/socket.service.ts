import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./auth.service";
import * as io from "socket.io-client";




@Injectable()
export class SocketService {


  msg: string;



  private host: string = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;

  private socket: SocketIOClient.Socket;

  constructor(private authService : AuthService) {}

  get() : Observable<any>{
    //this.name = this.authService.user.username;
    let socketUrl = this.host;
    this.socket = io.connect(socketUrl);
    this.socket.on("connect", () => this.connect());
    this.socket.on("disconnect", () => this.disconnect());

    this.socket.on("error", (error: string) => {
      console.log(`ERROR: "${error}" (${socketUrl})`);
    });


    return Observable.create((observer: any) => {
      this.socket.on("new message", (msg : any) => observer.next( {msg: msg.msg}));
      return () => this.socket.close();
    });
  }


  create(msg : string){
    this.socket.emit("create",msg );
  }


  public connect(){
    console.log(`connected to server`);
  }

  public disconnect(){
    console.log(`disconnected from server`)
  }

  public sendMessage(msg : string){
    this.socket.emit('send Message',{msg:msg});
  }

}
