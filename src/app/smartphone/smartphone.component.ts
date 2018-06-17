import { Component, OnInit } from '@angular/core';
import { EmsService } from '../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Injured } from '../models/injured';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  injureds:any;
  model = new Injured();
  id = this.route.snapshot.params['id'];
  hospitals:any;
  newHostpital;

  ngOnInit() {
      this.activeInjuredsByEvent(this.id);
      this.getAllHospitals();
  }

  activeInjuredsByEvent(id){
     this._EmsService
        .activeInjuredsByEvent(id)
        .subscribe(injureds => {
          this.injureds = injureds;
      } )
  }

  getAllHospitals(){
     this._EmsService
        .getAllHospitals()
        .subscribe(hospitals => {
          this.hospitals = hospitals;
      } )
  }

  SetToHospital(id){
    this.model.id=id;
    console.log(id)
      this._EmsService
        .SetToHospital(this.model)
        .subscribe(() => {
          
      } )
  }

}
