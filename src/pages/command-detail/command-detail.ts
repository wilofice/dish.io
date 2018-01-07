import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommandDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-command-detail',
  templateUrl: 'command-detail.html',
})
export class CommandDetailPage {
  item: any;
  etatCommande: string;
  status: boolean;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.status = this.item.status;
    if(this.status === true){
      this.etatCommande = 'En cours de traitement!';
    } else {
      this.etatCommande = 'Pas encore traitée!';
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandDetailPage');
  }

  confirmer(){
    this.item.status = true;
    this.status = true;

  }
}
