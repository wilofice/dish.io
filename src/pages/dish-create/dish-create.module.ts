import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishCreatePage } from './dish-create';

@NgModule({
  declarations: [
    DishCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(DishCreatePage),
  ],
})
export class DishCreatePageModule {}
