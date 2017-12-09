import { NgModule } from '@angular/core';
import { Ionic2RatingModule } from "ionic2-rating";
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { RestauIndexPage } from './restau-index';

@NgModule({
  declarations: [
    RestauIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(RestauIndexPage),
    TranslateModule.forChild()
  ],
})
export class RestauIndexPageModule {}
