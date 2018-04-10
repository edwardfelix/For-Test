import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ServicesPage } from '../services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test:string = "hi";
  constructor(public navCtrl: NavController) {
    // alert("this is home page");
  }

  aboutpage()
  {
    this.navCtrl.push(AboutPage);
  }
  contactpage() {
    this.navCtrl.push(ContactPage);
  }
  Servicepage()
  {
    this.navCtrl.push(ServicesPage);
  }
}
