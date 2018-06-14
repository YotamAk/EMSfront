import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Injured } from '../../models/injured';

@Component({
  selector: 'app-edit-injured',
  templateUrl: './edit-injured.component.html',
  styleUrls: ['./edit-injured.component.css']
})
export class EditInjuredComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  injured:any;
  model = new Injured();
  id = this.route.snapshot.params['id'];

  ngOnInit() {
    this.getInjuredById(this.id);
    this.model.id = this.id;
  }

  
  getInjuredById(id){
    {
     this._EmsService
        .getInjuredById(id)
        .subscribe(injured => {
          this.injured = injured;
          this.model.name = this.injured.name;
          this.model.age = this.injured.age;
          this.model.gender = this.injured.gender;
      } )
    }
  }


  editInjured(){
      this._EmsService
        .editInjured(this.model)
        .subscribe((result) => {
            console.log("Go back")
          this.goBack()  
          console.log(this.model)
        });
  }

  goBack(){

    this.router.navigate(['/hospital']);
  }

}
