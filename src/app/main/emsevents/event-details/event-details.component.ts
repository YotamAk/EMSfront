import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  emsEvent:any;
  injureds: any;
  id = this.route.snapshot.params['id'];

  ngOnInit() {
      this.getEventById(this.id);
       this.getInjuredsByEvent(this.id);
  }


  getEventById(id){
     this._EmsService
        .getEventById(id)
        .subscribe(emsEvent => {
          this.emsEvent = emsEvent;
          console.log(emsEvent);
      } )
  }

  getInjuredsByEvent(id){
     this._EmsService
        .getInjuredsByEvent(id)
        .subscribe(injureds => {
          this.injureds = injureds;
          console.log(injureds);
      } )
  }

}
