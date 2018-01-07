import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { Items } from '../../providers/providers';
import {CardPage} from '../card/card';
import { PayPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  imgWidth = '100%';
  imgHeight = '100%';
  quantite: number;
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item');
  }

  processPayement(){
    this.navCtrl.push(PayPage, {item: this.item, quantite: this.quantite});
  }

}
