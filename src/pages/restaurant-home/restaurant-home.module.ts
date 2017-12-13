import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantHomePage } from './restaurant-home';

@NgModule({
  declarations: [
    RestaurantHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantHomePage),
  ],
})
export class RestaurantHomePageModule {}
