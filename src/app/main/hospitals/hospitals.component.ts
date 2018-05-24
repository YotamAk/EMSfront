import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router
      ) { }

  hospitals: any;

  ngOnInit() {
      this.getAllHospitals();
  }

  getAllHospitals(){
     this._EmsService
        .getAllHospitals()
        .subscribe(hospitals => {
          this.hospitals = hospitals;
      } )
  }

}
