import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../services/socket.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
@Component({
  selector: 'app-messags',
  templateUrl: './messags.component.html',
})
export class MessagsComponent implements OnInit {

  myForm: FormGroup;

  messages : string;
  constructor(public socketService: SocketService,private formBuilder: FormBuilder, private flashMessage:FlashMessagesService,private router:Router) {


    this.myForm = formBuilder.group({
      'newMessage': ['']
    });
  }

  ngOnInit() {
    this.socketService.get().subscribe( msg =>{
      console.log("in observer");
     console.log(msg.msg);
     if(this.messages === undefined){
       this.messages = msg.msg;
     }else{
       this.messages = this.messages + ' ' + msg.msg;
     }
     });
  }

  onCreateMessage(){
    const newMessage = this.myForm.get('newMessage').value;
    this.socketService.sendMessage(newMessage);
  }

}
