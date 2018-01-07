import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommandServiceProvider } from '../../providers/command-service/command-service';
import { CommandDetailPage } from '../pages';

/**
 * Generated class for the CommandListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-command-list',
  templateUrl: 'command-list.html',
})
export class CommandListPage {
  counter: number = 1;
  currentItems: any;
  restaurant: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public commandService: CommandServiceProvider) {
    this.restaurant = this.navParams.get('restaurant');
    this.commandService.query(this.restaurant.username, 'restaurantKey').valueChanges().subscribe(res => {
      this.currentItems = res;
      console.log(this.currentItems);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandListPage');
  }

  openItem(item){
    this.navCtrl.push(CommandDetailPage, {item: item});
  }

  deleteItem(item) {
    this.commandService.delete(item);
  }

  udpateCounter(){
    this.counter = this.counter + 1;
  }
}
