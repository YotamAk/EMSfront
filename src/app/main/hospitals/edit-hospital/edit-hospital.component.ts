import { Component, OnInit } from '@angular/core';
import { EmsService } from '../../../ems.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Hospital } from '../../../models/Hospital';

@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrls: ['./edit-hospital.component.css']
})
export class EditHospitalComponent implements OnInit {

  constructor(
      private _EmsService:EmsService,
      private router: Router,
      private route: ActivatedRoute
      ) { }


  hospital:any;
  model = new Hospital();
  id = this.route.snapshot.params['id'];

  ngOnInit() {
    this.getHospitalById(this.id);
    this.model.id = this.id;
  }

  getHospitalById(id){
    {
     this._EmsService
        .getHospitalById(id)
        .subscribe(hospital => {
          this.hospital = hospital;
          this.model.name = this.hospital.name;
          this.model.location = this.hospital.location;
          this.model.phone = this.hospital.phone;
          this.model.password = this.hospital.password;
      } )
    }
  }

  editHospital(){
      this._EmsService
        .editHospital(this.model)
        .subscribe(() => {
  this.goBack();
           console.log("IN FUNC");
        });
           
  }

  goBack(){
    this.router.navigate(['/hospitals']);
  }

}
