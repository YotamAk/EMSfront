import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Emsevent } from '../../../models/emsevent';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  emsevent:any;
  model = new Emsevent();
  id = this.route.snapshot.params['id'];

  ngOnInit() {
      this.getEventById(this.id);
      this.model.id = this.id;
  }

  getEventById(id){
    {
     this._EmsService
        .getEventById(id)
        .subscribe(emsevent => {
          this.emsevent = emsevent;
          this.model.description = this.emsevent.description;
          this.model.createByUserID = this.emsevent.createByUserID;
          this.model.time = this.emsevent.time;
          this.model.location = this.emsevent.location;
          this.model.active = this.emsevent.active;
      } )
    }
  }

  editEvent(){
      this._EmsService
        .editEvent(this.model)
        .subscribe((result) => {
          this.goBack()  
        });
  }

   goBack(){
    this.router.navigate(['/emsevents']);
  }

}
