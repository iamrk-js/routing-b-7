import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  goTouser(){
    // API call to get users meta data >> Complex funct

    // navigate to users
    this._router.navigate(['users'])
  }
}
