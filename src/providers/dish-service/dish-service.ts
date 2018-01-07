import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Dish } from '../../models/dish/dish';

/*
  Generated class for the DishServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishServiceProvider {

  private dishesListRef = this.db.list<Dish>('dishes');;
  constructor(public db: AngularFireDatabase) {
    //console.log('Hello DishServiceProvider Provider');

  }

  query(key: string){
    
    this.dishesListRef = this.db.list<Dish>('dishes', ref => ref.orderByChild('restaurantKey').equalTo(key));
    return this.dishesListRef;
  }

  add(dish: Dish){
    this.dishesListRef.push(dish);
  }

  update(dish: Dish){
    this.dishesListRef.update(dish.key, dish);
  }

  delete(dish: Dish){
    this.dishesListRef.remove(dish.key);
  }




}
