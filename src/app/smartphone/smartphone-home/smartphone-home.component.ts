import { Component, OnInit, ElementRef } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-smartphone-home',
  templateUrl: './smartphone-home.component.html',
  styleUrls: ['./smartphone-home.component.css']
})
export class SmartphoneHomeComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute,
      private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.getAllEvents()
  }
  id:string;
  emsevents:any;

  getAllEvents(){
    this._EmsService
       .getAllEvents()
       .subscribe(emsevents => {
         this.emsevents = emsevents;
     } )
 }

 goto(id){
    console.log(this.id);
this.router.navigate([`smartphone/${this.id}`]);
  }

}
