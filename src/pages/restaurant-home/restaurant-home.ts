import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DishServiceProvider } from '../../providers/dish-service/dish-service';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import {Dish} from './../../models/dish/dish';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the RestaurantHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-home',
  templateUrl: 'restaurant-home.html',
})
export class RestaurantHomePage {

  currentItems: Dish[];
  restaurant: any;
  
    constructor(public navCtrl: NavController, public dishesService: DishServiceProvider, public modalCtrl: ModalController, public navParam: NavParams, public translateService: TranslateService  ) {
      this.restaurant = this.navParam.get('restaurant');
      //console.log('in restaurant home');

      //console.log(this.restaurant);
      this.dishesService.query(this.restaurant.username).valueChanges().subscribe(res => {
        this.currentItems = res;
        console.log(this.currentItems);
      });
      
    }
  
    /** The view loaded, let's query our items for the list
     */

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantHomePage');
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('DishCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
      item.restaurantKey = this.restaurant.username;
        this.dishesService.add(item);
      }
    })
    addModal.present();



  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    console.log("Item " + item.key)
    this.dishesService.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Dish) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
