import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers}from '@angular/http';
import {Stripe} from '@ionic-native/stripe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public stripe: Stripe, public http: HttpClient) {
  }

  cardInfo: any={
    number:'',
    expMonth:'',
    expYear:'',
    cvc:''
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Card');
  }

  pay() {
      this.stripe.setPublishableKey('pk_test_bcaElprVfLsQnsXY04dNnUsZ');
      this.stripe.createCardToken(this.cardInfo).then((token) => {
        var data = 'stripetoken=' + token + '&amount=50';
        var headers = new HttpHeaders();
        headers.append('Conent-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
          if (res)
          alert('transaction Successfull!!')
        })
      })
    }
}
