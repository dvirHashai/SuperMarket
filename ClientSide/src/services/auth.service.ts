import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  product:any;
  constructor(private http:Http) {
    console.log('the auth service is alive');
  }

  httpPost(object,path){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log("in HTTP Post");
    return this.http.post('http://localhost:3000/'+path, object,{headers: headers})

      .map(res => res.json());

  }

//Http Get
/*  httpGet(object,path){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/products/create', object,{headers: headers})
      .map(res => res.json());

  }*/
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .map(res => res.json());

  }

  getProfile(path){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken)
    headers.append('Content-Type','application/json');
    console.log("auth service get profile!!!",this.authToken);
    return this.http.get('http://localhost:3000/'+path,{headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;

  }

  loggedIn(){
    return tokenNotExpired();
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  httpGet(path){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('sdfdsf');
    return this.http.get('http://localhost:3000/'+path,{headers: headers})
      .map(res => res.json());
  }





}


