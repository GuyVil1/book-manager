import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : Array<User>;


  constructor() { 
    this.users = [];

    this.users.push(new User("Guy", "Vilain", "guy.vilain1@gmail.com", "azerty"));
    this.users.push(new User("test", "testeur", "test@gmail.com", "azerty"));

  }

  /**
   * Rechercher un user
   */
  getUserBy(searchedAttr: any, searchedValue : any): User | void {
    for(const user of this.users) {
      if(user[searchedAttr] === searchedValue) {
        return user;
      }
    }
    return;
  }

  /**
   * mise à jour infos user
   * @param editedUser
   */
  updateUser(editedUser: User | void) {
    if(editedUser instanceof User) {
      for (let i = 0; i < this.users.length - 1; i++) {
        if (this.users[i].id === editedUser.id) {
          this.users[i] = editedUser;
          break;
        }
      }
    }
  }

}
