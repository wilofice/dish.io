import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, RestaurantHomePage, SignUpPage, LogonPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, nom: string, prenom: string, email: string, password: string, tel: string, address: string, type: string} = {
    username: '',
    nom: '',
    prenom: '',
    email: '',
    password: '',
    tel: '',
    address: '',
    type: 'restaurant'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).then((ref) => {
      console.log(ref);
      this.navCtrl.push(LogonPage);
    }, (err) => {

      //this.navCtrl.push(SignUpPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }


  getType() {
    return !(this.account.type === "restaurant");
  }
}
