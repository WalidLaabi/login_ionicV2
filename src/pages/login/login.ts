import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,LoadingController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  localStorage :any;
  data : any;
  fetchdata : any;
  constructor(public http : Http,public navCtrl:NavController,public navp:NavParams
  , public alert:AlertController , public loading:LoadingController) 
  {
    this.data = {};
    this.data.username = "";
    this.data.password ="";
  }
  submit()
  {
    let username = this.data.username;
    let password = this.data.password;
    let data = JSON.stringify({username,password});
    let link = "http://ionicpfa.000webhostapp.com/login.php";
    this.http.post(link,data)
    .map(res => res.json())
      .subscribe(data=>{
        let loader = this.loading.create(
          {
            content : "Authentification....",
            duration :5000

          }
        );
        loader.present();
        this.navCtrl.setRoot(Page1);
        this.localStorage = data;
        /*this.fetchdata = data;
         console.log(this.fetchdata);*/
      },error=>{
        let alert = this.alert.create(
          {
            title : "Attention",
            subTitle : "Login ou password indifinie ou incorret ! Veulliez Réesseyer encore",
            buttons :['Ok']
          }
        );
        alert.present();
        //console.log("error login passe data");
      });
  }

}
