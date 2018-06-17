import { Component } from '@angular/core';
import { SharedService} from './shared-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private _sharedService: SharedService
    ) { 

      _sharedService.changeEmitted$.subscribe(admin => {
          console.log(`in app component passed ${admin}`);
          this.admin = admin;
      });
    }


  title = 'app';
  admin = false;
  adminMode(isAdmin){
    console.log(isAdmin);
    this.admin = isAdmin;

  }
}
