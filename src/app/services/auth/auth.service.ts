import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor() { }


  /**
   * Authentification
   */
  signIn(){
    return new Promise(
      (res, rej) => {
        setTimeout(()=> {
          this.isAuth = true;
          res();
        }, 1000);
    });
  }

  signOut(){
    this.isAuth = false;
  }
}
