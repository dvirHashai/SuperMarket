import {Directive, HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appCanvas]'
})
export class CanvasDirective {

  @Input() text: string;

  @HostListener('load',['$event.target'])

  onLoad(img){


    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    canvas.height = 500;
    canvas.width = 1000;

    context.drawImage(img,0,0);
    context.font ="100px impact";
    context.textAlign ='center';
    context.fillStyle = "#ff0b43";
    context.fillText(this.text,canvas.width /2,canvas.height *0.5);
    img.src = canvas.toDataURL();
  }

  constructor() { }


}
