import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import {Command} from '../../models/command/command.model';
import { CommandServiceProvider } from '../../providers/command-service/command-service';
import { HomePage, SearchPage } from '../pages';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
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
  nom: string; 
  prenom: string;
  addresseDeLivraison: string;
  messageConfirmation = 'Votre commande a été bien enregistrée!';
  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS, public commandService: CommandServiceProvider, public toastCtrl: ToastController) {

    this.item = navParams.get('item');
    this.quantite = navParams.get('quantite');
    this.total = this.quantite * this.item.prix;
  }

  

 processpay(){
  //this.sms.send(this.restaurantPhone, 'Vous avez reçu une commande de ' + this.phone + ' sur Dish.io!.');
  this.addCommand();
  let toast = this.toastCtrl.create({
    message: this.messageConfirmation,
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
  this.navCtrl.pop();
  this.navCtrl.pop();
 }
 payByStipe(){

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  addCommand(){
   var command: Command = {
    restaurantKey: this.item.restaurantKey,
    restaurantName: this.item.restaurantName,
    dishName: this.item.name,
    dateCommand: new Date().toLocaleDateString(),
    heureCommand: new Date().toLocaleTimeString(),
    quantite: this.quantite,
    total: this.total,
    nomClient: this.nom,
    prenomClient: this.prenom,
    addresseClient: this.addresseDeLivraison,
    phoneClient: this.phone,
    status: false
   }

   this.commandService.add(command);

  }
}
