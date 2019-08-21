import { Component, OnInit } from '@angular/core';
import { EmsService } from '../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

    name = this.route.snapshot.params['name'];
    injureds: any;

  ngOnInit() {
    this.activeInjuredsByHospital(this.name);
      Observable.interval(10000).subscribe(()=> {
        this.activeInjuredsByHospital(this.name);
      });
      
  }
  

  activeInjuredsByHospital(name){
     this._EmsService
        .activeInjuredsByHospital(name)
        .subscribe(injureds => {
          this.injureds = injureds;
          console.log(injureds);
      } )
  }


  hospitalGetInjured(id){
      this._EmsService
        .hospitalGetInjured(id)
        .subscribe(() => {
          this.activeInjuredsByHospital(this.name);
      } )
  }

}
