import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-injureds',
  templateUrl: './injureds.component.html',
  styleUrls: ['./injureds.component.css']
})
export class InjuredsComponent implements OnInit {

      constructor(
        private _EmsService:EmsService,
        private router: Router
        ) { }
      injureds: any;

  ngOnInit() {
      this.getAllInjureds();
  }

  getAllInjureds(){
     this._EmsService
        .getAllInjureds()
        .subscribe(injureds => {
          this.injureds = injureds;
      } )
  }

}
