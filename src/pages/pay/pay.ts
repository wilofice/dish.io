import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
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
  item: any;
  quantite: number;
  total: number;
  phone: string;
  restaurantPhone = '00212605063978';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS) {

    this.item = navParams.get('item');
    this.quantite = navParams.get('quantite');
    this.total = this.quantite * this.item.prix;
  }

  

 processpay(){
  this.sms.send(this.restaurantPhone, 'Vous avez reçu une commande de ' + this.phone + ' sur Dish.io!.');
 }
 payByStipe(){

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

}
