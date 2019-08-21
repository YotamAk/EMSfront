import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-archive-hospital',
  templateUrl: './archive-hospital.component.html',
  styleUrls: ['./archive-hospital.component.css']
})
export class ArchiveHospitalComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
  ) { }
  
  name = this.route.snapshot.params['name'];
  injureds: any;

  ngOnInit() {
    this.InjuredsByHospital(this.name)
  }

  InjuredsByHospital(name){
    this._EmsService
       .InjuredsByHospital(name)
       .subscribe(injureds => {
         this.injureds = injureds;
     } )
 }

}
