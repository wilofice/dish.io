import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestauIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restau-index',
  templateUrl: 'restau-index.html',
})
export class RestauIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

openPay(){
  this.navCtrl.push('PayPage');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestauIndexPage');
  }

}
