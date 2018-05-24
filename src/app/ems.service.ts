import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmsService {
  constructor(private _http:Http) { }
  checkMe:any;
  ApiUrl :string = "http://localhost:3000"
 
  getAllEvents(){
    return this._http.get(`${this.ApiUrl}/getAllEvents`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  getAllInjureds(){
    return this._http.get(`${this.ApiUrl}/getAllInjureds`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  getAllUsers(){
    return this._http.get(`${this.ApiUrl}/getAllUsers`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  getAllHospitals(){
    return this._http.get(`${this.ApiUrl}/getAllHospitals`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  notHospitalInjureds(){
    return this._http.get(`${this.ApiUrl}/notHospitalInjureds`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  getAllActiveEvents(){
    return this._http.get(`${this.ApiUrl}/getAllActiveEvents`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  getAllActiveUsers(){
    return this._http.get(`${this.ApiUrl}/getAllActiveUsers`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  getInActiveUsers(){
    return this._http.get(`${this.ApiUrl}/getInActiveUsers`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

  SetInactiveUser(id){
    return this._http.post(`${this.ApiUrl}/SetInactiveUser`,{'id':id})
      .map(res => res.json());
  }

  SetActiveUser(id){
    return this._http.post(`${this.ApiUrl}/SetActiveUser`,{'id':id})
      .map(res => res.json());
  }

getUserById(id){
    return this._http.get(`${this.ApiUrl}/getUserById/${id}`)
      .map(res => res.json());
  }


  addNewUser(model){
    console.log(model);
    return this._http.post(`${this.ApiUrl}/addNewUser`,{'UserDetails':model})
      .map(res => res);
  }

  

addNewHospital(model){
    console.log(model);
    return this._http.post(`${this.ApiUrl}/addNewHospital`,{'HospitalDetails':model})
      .map(res => res);
  }

  login(name,password){
    return this._http.get(`${this.ApiUrl}/login/${name}/${password}`)
      .map(res => res.json());
  }


}