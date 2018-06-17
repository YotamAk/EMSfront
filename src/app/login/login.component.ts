import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmsService } from '../ems.service';
import { SharedService} from '../shared-service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private _sharedService: SharedService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  username : string;
  password : string;
  @Output() isAdmin = new EventEmitter<Boolean>();

  ngOnInit() {
  }

  login() {

    if(this.username=="admin" && this.password =="admin"){
      console.log("admin"); 
      // this.isAdmin.emit(true);
      this._sharedService.emitChange(true);
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
