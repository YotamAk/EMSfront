import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute,
      ) { }
  user:any;
  id = this.route.snapshot.params['id'];
  ngOnInit() {
      this.getUserById(this.id);
  }

getUserById(id){
     this._EmsService
        .getUserById(id)
        .subscribe(user => {
          this.user = user;
          console.log(user);
      } )
  }

}
