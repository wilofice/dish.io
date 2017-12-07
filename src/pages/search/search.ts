import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateDishPage } from '../pages';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

	localisation :{ ville: string, zone: string	} = {
		ville: 'Rabat',
		zone: 'Agdal-bas (Rabat)'
	};

	myIcon: string = 'compass';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  load(event){
  	this.navCtrl.push(CreateDishPage);
  }

}
