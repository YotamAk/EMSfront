import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-emsevents',
  templateUrl: './emsevents.component.html',
  styleUrls: ['./emsevents.component.css']
})
export class EmseventsComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router
      ) { }


  emsevents: any;
 
  ngOnInit() {
      this.getAllActiveEvents();
  }

   getAllActiveEvents(){
     this._EmsService
        .getAllActiveEvents()
        .subscribe(emsevents => {
          this.emsevents = emsevents;
      } )
  }

}
