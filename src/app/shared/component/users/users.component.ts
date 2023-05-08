import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData !: Array<Iusers>
  constructor(private _usersService : UsersService) { }

  ngOnInit(): void {
    this.userData = this._usersService.getAllUsers()
  }


  


}


