import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { FlashMessagesService } from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: 'login-register.component.html',
  styles: [` .inv {  class: 'hidden'; }`]
})
export class LoginRegisterComponent{
  myForm: FormGroup;

  isNotRegister : boolean;
  isLogin: boolean

  constructor(private formBuilder: FormBuilder, private flashMessage:FlashMessagesService,private authService:AuthService, private router:Router){
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['', [Validators.required, this.exampleValidator]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],

      }),
      'password': ['', Validators.required],

    });

    this.isNotRegister = true;
    this.isLogin = false;
  }

  toggle(){
    this.isNotRegister = !this.isNotRegister;
    console.log(this.isNotRegister);
  }


  onRegisterSubmit() {


    const user = {
      username: this.myForm.get(['userData', 'username']).value,
      email: this.myForm.get(['userData', 'email']).value,
      password: this.myForm.get(['password']).value,
    }


    console.log(user);


    console.log("register !!")
    const path = 'users/register';
    // Register user
    this.authService.httpPost(user, path).subscribe(data => {
      if (data.success) {

        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        //this.router.navigate(['/login']);
      } else {
        console.log("im here!!")
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
      }

    });
  }

  onLoginSubmit(){
      const user = {
        username: this.myForm.get(['userData', 'username']).value,
        password: this.myForm.get(['password']).value,
      }


      console.log(user);
      console.log("login!!")

      const path = "users/authenticate";
      // Authnticate user
      this.authService.httpPost(user,path).subscribe(data => {
        console.log(data);
        if(data.success){
          this.isLogin = true;
          this.authService.storeUserData(data.token,data.user);

          this.flashMessage.show('You are logged in successful', {cssClass: 'alert-success', timeout: 5000});

        } else {
          console.log("im here!!")
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000});

        }

      });



  }




  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }
  errorMessage(msg:string){
    this.flashMessage.show('Please use a valid email',{cssClass:'alert-danger',timeout:3000});
  }





}
