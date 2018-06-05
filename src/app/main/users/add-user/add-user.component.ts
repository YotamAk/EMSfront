import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }


  model = new User();

  ngOnInit() {
  }

  addNewUser(){
      this._EmsService
        .addNewUser(this.model)
        .subscribe((result) => {
          console.log(result);
          this.goBack()  
        });
  }


  goBack(){
    this.router.navigate(['/users/..']);
  }

}
