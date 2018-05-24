import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
        private _EmsService:EmsService,
        private router: Router
        ) { }

      injureds = [];
      activeEvents= [];
      activeUsers= [];
      hospitals= [];

  ngOnInit() {
      this.notHospitalInjureds();
      this.getAllActiveEvents();
      this.getAllActiveUsers();
      this.getAllHospitals();
  }

  notHospitalInjureds(){
     this._EmsService
        .notHospitalInjureds()
        .subscribe(injureds => {
          this.injureds = injureds;
      } )
  }

  getAllActiveEvents(){
     this._EmsService
        .getAllActiveEvents()
        .subscribe(activeEvents => {
          this.activeEvents = activeEvents;
      } )
  }


  getAllActiveUsers(){
     this._EmsService
        .getAllActiveUsers()
        .subscribe(activeUsers => {
          this.activeUsers = activeUsers;
      } )
  }


   getAllHospitals(){
     this._EmsService
        .getAllHospitals()
        .subscribe(hospitals => {
          this.hospitals = hospitals;
      } )
  }

}
