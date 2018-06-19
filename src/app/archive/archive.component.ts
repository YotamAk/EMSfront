import { Component, OnInit, ElementRef } from '@angular/core';
import { EmsService } from '../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private elementRef: ElementRef
      ) { }

  emsevents: any;

  ngOnInit() {
      this.getAllEvents();
  }

  getAllEvents(){
     this._EmsService
        .getAllEvents()
        .subscribe(emsevents => {
          this.emsevents = emsevents;
      } )
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#2D2D30';
 }

}
