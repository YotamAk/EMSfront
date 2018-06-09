import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  user:any;
  model = new User();
  id = this.route.snapshot.params['id'];

  ngOnInit() {
      this.getUserById(this.id);
      this.model.id = this.id;

  }

  getUserById(id){
    {
     this._EmsService
        .getUserById(id)
        .subscribe(user => {
          this.user = user;
          this.model.name = this.user.name;
          this.model.role = this.user.role;
          this.model.phone = this.user.phone;
          this.model.corpId = this.user.corpId;
          this.model.password = this.user.password;
      } )
    }
  }


  editUser(){
      this._EmsService
        .editUser(this.model)
        .subscribe(() => {

        });
           this.goBack();
           console.log("IN FUNC");
  }



  goBack(){
   console.log("IN GO BACK");
    this.router.navigate(['/users/..']);
  }

}
