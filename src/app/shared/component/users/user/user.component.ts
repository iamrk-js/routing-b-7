import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId !: number;
  userObj !: Iusers;
  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _usersService : UsersService) { }

  ngOnInit(): void {
    console.log(this._route.snapshot)
    // this.userId = +this._route.snapshot.params['userId'];
    this._route.params // params is a observable
            .subscribe((params : Params) => {
              this.userId = +params['userId']
              this.userObj = this._usersService.getUser(this.userId)!;
            })
    // this.userObj = this._usersService.getUser(this.userId)!;


  }

  goToEditUser(){
    // navigate to editUserComponent
    this._router.navigate(['users', this.userId, 'edit'])
  }
}
