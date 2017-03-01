import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataLoad provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class DataLoad {
  local :any;
  constructor(public http: Http) {
    console.log('Hello DataLoad Provider');
  }
   getuser()
  {
    this.http.get("http://ionicpfa.000webhostapp.com/users.php")
    .map(res =>res.json())
    .subscribe(data=>{
      this.local = data;
    });
  }


}
