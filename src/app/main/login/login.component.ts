import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  username : string;
  password : string;

  ngOnInit() {
  }

  login(username , password) {
      this._EmsService
        .login(this.username,this.password)
        .subscribe((result) => {
          console.log(result); 
        });
  }

}
