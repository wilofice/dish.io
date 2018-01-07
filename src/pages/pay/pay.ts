import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardPage} from './../pages';
/**
 * Generated class for the PayPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  commande:any={
    phone:""
  }

 processpay(){
  
 }
 payByStipe(){
  this.navCtrl.push(CardPage);
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

}
