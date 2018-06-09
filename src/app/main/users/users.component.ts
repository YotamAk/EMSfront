import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(
      private _EmsService:EmsService,
      private router: Router
    ) { }

    activeUsers:any;
    InActiveUsers:any;


  ngOnInit() {
      this.getAllActiveUsers();
      this.getInActiveUsers();
  }

  getAllActiveUsers(){
     this._EmsService
        .getAllActiveUsers()
        .subscribe(_activeUsers => {
          this.activeUsers = _activeUsers;
      } )
  }

  getInActiveUsers(){
     this._EmsService
        .getInActiveUsers()
        .subscribe(InActiveUsers => {
          this.InActiveUsers = InActiveUsers;
      } )
  }

  SetInactiveUser(id){
      this._EmsService
        .SetInactiveUser(id)
        .subscribe(() => {
        this.getInActiveUsers();
        this.getAllActiveUsers();
      } )
  }

  SetActiveUser(id){
      this._EmsService
        .SetActiveUser(id)
        .subscribe(() => {
        this.getInActiveUsers();
        this.getAllActiveUsers();
      } )
  }

}
