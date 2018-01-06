
import { Injectable } from '@angular/core';
import{Restaurant} from "../../models/restaurant/restaurant.model";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from "firebase";



/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {
  public restaurants: firebase.database.Reference;
  public restaurantList : any;

  //restaurants:FirebaseListObservable<any[]>;
  private restaurantListRef ;//= this.db.list<Restaurant>('/restaurants').valueChanges();

  constructor(private db: AngularFireDatabase) {
    this.restaurants=firebase.database().ref("restaurants");
    this.restaurantListRef = this.db.list<Restaurant>('restaurants');


  }
  addRestaus(nameRestaurant:string,rating:number){
    let restau: Restaurant = {
      username: nameRestaurant,
      name: "",
      email: "",
      password: "",
      tel: "",
      address: "",
      rating: rating
    };
    this.restaurantListRef.push(restau);
    this.restaurantList=firebase.database().ref('restaurants');
  }
  getRestaurants() {

     this.restaurantListRef.valueChanges().subscribe(res => {
      this.restaurantList = res;
    });
    return this.restaurantListRef;

  }


}
