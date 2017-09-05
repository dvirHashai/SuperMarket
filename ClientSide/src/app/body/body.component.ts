import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styles: [`.app-body-background-img img {width: 100%;}
           .multiple-column { column-count: 3} 
           .border-radius { border: 2px solid #a1a1a1; padding: 10px 40px; background: #dddddd; width: 300px; border-radius: 25px;}`,
  ]

})
export class BodyComponent implements OnInit {


  image = './images/body.png'

  constructor() {


  }

  ngOnInit() {


  }


}
