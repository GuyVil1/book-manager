import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  userIdAuth : any;

  constructor(private userService : UserService) { 
    this.userIdAuth = 0;
  }


  /**
   * Authentification
   */
  signIn(email : string, passwpord: string){
    return new Promise(
      (res, rej) => {
        setTimeout(()=> {
          //Encapsuler l'entrée user dans une variable
          const user = this.userService.getUserBy('email', email);
          //Si le user existe, faire un check password
          if(user){
            if(user.password === passwpord){
              this.isAuth = true;
              this.userIdAuth = user.id;
              res();
            }
            rej("Le mot de passe est incorrect!!");
          }
          //Si il n'existe pas, on fait un reject
          rej("L'adresse email n'existe pas !");
        }, 1000);
    });
  }

  signOut(){
    this.isAuth = false;
    this.userIdAuth = null;
  }
}
