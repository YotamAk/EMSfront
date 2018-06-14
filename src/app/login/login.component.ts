import { Component, OnInit } from '@angular/core';
import { EmsService } from '../ems.service';
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

  login() {

    if(this.username=="admin" && this.password =="admin"){
      console.log("admin"); 
      this.router.navigate(['/main']);
    }
    else{
      this._EmsService
        .login(this.username,this.password)
        .subscribe((result) => {
          this.router.navigate([`/hospital/${result.name}`]);
        });
     } 
  }
  

}
