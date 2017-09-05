import { Component, OnInit,trigger, state, style, transition, animate,keyframes } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`button {font-size: 1.8em;} #content {padding: 30px;background: #eeeeee;}   .footer-partners-text h1 {text-align: center;text-shadow: 2px 2px #FF0000;} .footers-partners-logos img {transition: width 2s}`],
  animations: [
    trigger('movePanel',[

      transition('void => *',[
        animate(600, keyframes([
          style({opacity:0,transform:'translateY(-200px)',offset:0}),
          style({opacity:1,transform:'translateY(25px)',offset:.75}),
          style({opacity:0,transform:'translateY(0)',offset:1}),
        ]))
      ])

    ])

  ]
})
export class FooterComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

}
