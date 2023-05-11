import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  userId !: number;
  userObj !: Iusers;
  constructor(
    private _usersService: UsersService,
    private _routes: ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._routes.params
      .subscribe((userparams: Params) => {
        this.userId = +userparams['userId']
        // console.log(this.userId)
        this.userObj = this._usersService.getUser(this.userId)!
      })
  }
  onUpdateUser(username : HTMLInputElement){
    let obj : Iusers = {
      username : username.value,
      id : this.userId ,
      userRole : this.userObj.userRole
    }
    this._usersService.updateUser(obj);
    this._router.navigate(['/users', this.userId])
  }
}
