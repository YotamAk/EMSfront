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
    severity: string;
    OK = 'alert alert-light';
    not_urgent = 'alert alert-success'
    urgent = 'alert alert-danger';
    urgent_stable =  'alert alert-warning';
    critical = 'alert alert-primary';
    dead = 'alert alert-dark';
    


  ngOnInit() {
      this.getInjuredByQR(this.QrId);
  }

  getInjuredByQR(QrId){
     this._EmsService
        .getInjuredByQR(QrId)
        .subscribe(injured => {
          this.injured = injured;
          if (injured.severity === 'OK'){
            this.severity = this.OK
          }
          if (injured.severity === 'urgent stable'){
            console.log(injured.severity);
            this.severity = this.urgent_stable
          }
          if (injured.severity === 'critical'){
            this.severity = this.critical
          }
          if (injured.severity === 'not urgent'){
            this.severity = this.not_urgent
          }
          if (injured.severity === 'dead'){
            this.severity = this.dead
          }
          if (injured.severity === 'urgent'){
            this.severity = this.urgent
          }
      } )
  }

}
