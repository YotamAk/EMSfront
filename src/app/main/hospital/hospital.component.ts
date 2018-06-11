import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

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

    toHospital = this.route.snapshot.params['toHospital'];
    injureds: any;

  ngOnInit() {
      this.activeInjuredsByHospital("volfson");
  }

  activeInjuredsByHospital(toHospital){
     this._EmsService
        .activeInjuredsByHospital(toHospital)
        .subscribe(injureds => {
          this.injureds = injureds;
          console.log(injureds);
      } )
  }


  hospitalGetInjured(id){
      this._EmsService
        .hospitalGetInjured(id)
        .subscribe(() => {
        this.activeInjuredsByHospital("volfson");
      } )
  }

}
