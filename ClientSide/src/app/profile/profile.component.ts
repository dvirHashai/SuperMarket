import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user:Object;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    const path='users/profile'
    this.authService.getProfile(path).subscribe(profile =>{
      console.log(profile.user);
      this.user = profile.user;
    },
    err => {
      console.log(err)
      return false;
    });
  }
}
