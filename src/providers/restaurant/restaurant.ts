import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Restaurant} from "../../models/restaurant/restaurant.model";
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {

  private restaurantListRef = this.db.list<Restaurant>('users');

  constructor(private db: AngularFireDatabase) {

  }
  addRestaus(nameRestaurant:string,rating:number){
    var restau: Restaurant = {
      username: nameRestaurant,
      name: "",
      email: "",
      password: "",
      tel: "",
      address: "",
      rating: rating
    }
    this.restaurantListRef.push(restau);
  }
  getRestaurants(){
    return this.restaurantListRef.valueChanges;
  }

}
