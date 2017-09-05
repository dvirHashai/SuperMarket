import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { FlashMessagesService } from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [` .inv {  class: 'hidden'; }`]
})
export class LoginComponent{
  myForm: FormGroup;

  isNotRegister : boolean;

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
  }

  toggle(){
    this.isNotRegister = !this.isNotRegister;
  }

  onRegisterSubmit(){
    const user = {
      username : this.myForm.get(['userData','username']).value,
      email : this.myForm.get(['userData','email']).value,
      password : this.myForm.get(['password']).value,
    }


    console.log(user);



    console.log("im here!!")
    // Register user
    /*this.authService.registerUser(user).subscribe(data => {
     if(data.success){

     this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
     //this.router.navigate(['/login']);
     } else {
     console.log("im here!!")
     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
     //this.router.navigate(['/register']);
     }

     });*/
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
