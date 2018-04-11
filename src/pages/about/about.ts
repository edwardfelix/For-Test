import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  alert("this is hello from about us page");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }




}
