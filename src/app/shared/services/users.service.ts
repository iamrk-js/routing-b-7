import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray : Array<Iusers> = [
    {
      username: "Jhon",
      id: 1,
      userRole : "admin"
    },
    {
      username: "July",
      id: 2,
      userRole : "admin"
    },
    {
      username: "May",
      id: 3,
      userRole : "user"
    },
  ]
  constructor() { }
  getAllUsers(){
    return this.usersArray;
  }
  getUser(id:number){
    return this.usersArray.find(user => user.id === id)
  }

  updateUser(user : Iusers){
    this.usersArray.forEach(u => {
      if(u.id === user.id){
        u.username = user.username;
      }
    })
  }

}
