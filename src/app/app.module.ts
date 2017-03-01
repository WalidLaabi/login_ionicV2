import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import {Myservice} from '../providers/myservice';
import {DataLoad} from '../providers/data-load';
import { LoaderPage } from '../pages/loader/loader';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    LoaderPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    LoaderPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Myservice,DataLoad]

})
export class AppModule {}
