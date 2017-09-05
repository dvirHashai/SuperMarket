import {Component} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service/product.service";


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles:[
    ` .navbar-brand-logo-img img { height: 50px; width: 70px;}`,
    ` .navbar { margin: 0}`,
    `.navbar.navbar-default a { outline-color: white}`
  ],


})
export class HeaderComponent{


  constructor( private flashMessage:FlashMessagesService,private authService:AuthService, private router:Router, private productService:ProductService){

  }

  onLogOutClick(){
  this.authService.logout();
  this.flashMessage.show('You are logged out',{cssClass:'alert-success',timeout:3000});
  this.router.navigate(['']);
  return false;
  }




}
