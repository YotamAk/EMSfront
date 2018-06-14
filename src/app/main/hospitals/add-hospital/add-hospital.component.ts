import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Hospital } from '../../../models/Hospital';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

model = new Hospital();
counts:number[] = [];

  ngOnInit() {
    // this.model.location[0] = 3
    // this.model.location[1] = 4
    // this.counts.length = 2;
    console.log(this.model);
  }


  addNewHospital(){
      this._EmsService
        .addNewHospital(this.model)
        .subscribe((result) => {
          console.log(result);
          this.goBack()  
        });
  }

  goBack(){
    this.router.navigate(['/hospitals']);
  }

}
