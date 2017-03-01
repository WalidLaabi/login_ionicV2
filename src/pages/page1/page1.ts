import { Component } from '@angular/core';

import { NavController ,NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import {DataLoad} from '../../providers/data-load';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoaderPage } from '../loader/loader';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  datas : any = [];
  constructor(public navCtrl: NavController,public npram:NavParams,public mydata: DataLoad
  ,public http : Http) {}
  Logout()
  {
    this.navCtrl.push(LoginPage);
  }
  load()
  {
    
    this.http.get("http://ionicpfa.000webhostapp.com/users.php")
    .map(res =>res.json())
    .subscribe(data=>{
      this.datas = data;
    });
    this.navCtrl.push(LoaderPage,this.datas);
    
  }
  ionViewDidLoad()
  {
    console.log(this.npram.data);
  }

}
