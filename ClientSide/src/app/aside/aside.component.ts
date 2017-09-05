import { Component, OnInit } from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',

})
export class AsideComponent implements OnInit {

  items : Item[] = new Array;

  constructor() {

  }



  ngOnInit() {

    const item ={
      msg : "hello",
      show : false
    }

    const item1 ={
      msg : "world",
      show : false
    }

    const item2 ={
      msg : "hi",
      show : false
    }


    this.items.push(item);
    this.items.push(item1);
    this.items.push(item2);



  }

  push(item){
    item.show = true;
  }
}
