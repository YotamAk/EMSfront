import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-injured-report',
  templateUrl: './injured-report.component.html',
  styleUrls: ['./injured-report.component.css']
})
export class InjuredReportComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

    id = this.route.snapshot.params['id'];
    injured:any;

  ngOnInit() {
      this.getInjuredById(this.id);
  }

  getInjuredById(id){
     this._EmsService
        .getInjuredById(id)
        .subscribe(injured => {
          this.injured = injured;
      } )
  }

}
