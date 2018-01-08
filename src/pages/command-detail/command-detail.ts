import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
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
  messageConfirmation = "Envoie de la confirmation vers le client!";
  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS, public toastCtrl: ToastController,)
   {
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
    this.etatCommande = 'En cours de traitement!';

    this.sms.send(this.item.phoneClient, 'Votre commande est en cours de traitement par votre restaurant! Votre application Dish.io!.');
    let toast = this.toastCtrl.create({
      message: this.messageConfirmation,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.navCtrl.pop();
  }
}
