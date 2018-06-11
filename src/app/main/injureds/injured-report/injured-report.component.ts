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

    QrId = this.route.snapshot.params['QrId'];
    injured:any;

  ngOnInit() {
      this.getInjuredByQR(this.QrId);
  }

  getInjuredByQR(QrId){
     this._EmsService
        .getInjuredByQR(QrId)
        .subscribe(injured => {
          this.injured = injured;
      } )
  }

}
