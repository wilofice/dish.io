import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Restau} from "../../models/Restau";


/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {


  constructor(public http: HttpClient,public restaus:Array<any>) {

  }
  addRestaus(nameRestaurant:string,rating:number){
    this.restaus.push({nom:nameRestaurant,rating:rating});
  }
  getRestaurants(){
    return this.restaus;
  }

}
