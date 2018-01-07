import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, LogonPage } from '../pages';
import { SearchPage } from '../pages';
import {RestaurantHomePage} from './../pages';
import { Observable } from 'rxjs/Observable';
import { Dish } from '../../models/dish/dish';
import { UserModel } from '../../models/user/user.model';
import { AngularFireList } from 'angularfire2/database/interfaces';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: 'wilofice1',
    password: '1234'
  };

  private result: AngularFireList<UserModel>;
  private data: any;
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
      console.log(new Date().toLocaleTimeString());
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  // Attempt to login in through our User service
  doLogin() {
    this.result = this.user.login(this.account);
    //this.user.login(this.account).valueChanges().subscribe(res => this.data = res);
    this.result.valueChanges(['child_added']).subscribe(
      x => {this.data = x; this.callback();},
      e => console.log('onError: %s', e),
      () => console.log('onCompleted')
    );
   
    
}

callback() {
  if(this.data === undefined) {
    
    let toast = this.toastCtrl.create({
      message: this.loginErrorString,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    
  } else if (this.data[0].password !== this.account.password){
    
    //this.navCtrl.setRoot(RestaurantHomePage, {restaurant: this.result});
    let toast = this.toastCtrl.create({
      message: "Votre mot de passe est incorrecte! Veulley réessayer.",
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  } else {
    console.log(this.data[0]);
    let toast = this.toastCtrl.create({
      message: "Connexion réussie!",
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.navCtrl.setRoot(RestaurantHomePage, {restaurant: this.data[0]});
  }
}

}
