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

  ngOnInit() {
  }


  addNewHospital(){
    {
      this._EmsService
        .addNewHospital(this.model)
        .subscribe((result) => {
          console.log(result);
          this.goBack()  
        });
    }
  }

  goBack(){
    this.router.navigate(['/hospitals']);
  }

}
