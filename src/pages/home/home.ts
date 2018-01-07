import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Geolocation, GeolocationOptions, Geoposition, PositionError} from '@ionic-native/geolocation';
import {RestaurantProvider} from "../../providers/restaurant/restaurant";
import {Restaurant} from "../../models/restaurant/restaurant.model";
import { RestaurantHomePage } from '../pages';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  options: GeolocationOptions;
  currentPos: Geoposition;
  places: Array<any>;
  public infoWindows:Array<string>=[];
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public restaurantList: Restaurant[];


  constructor(public navCtrl: NavController, private geolocation: Geolocation, public restaurantProvider: RestaurantProvider) {

    this.restaurantProvider.getRestaurants().valueChanges().subscribe(res => {
      this.restaurantList = res;
    });
  }
  ionViewDidLoad() {
    this.getUserPosition();
   //this.restaurantList = this.restaurantProvider.getRestaurants();

}
  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      this.currentPos = pos;
      this.addMap(pos.coords.latitude, pos.coords.longitude);
    }, (err: PositionError) => {
      console.log("Error : " + err.message);
    });
  }

  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.getRestaurants(latLng).then((results: Array<any>) => {
      this.places = results;
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }, (status) => console.log(status));

    this.addMarker();
  }
  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>C'est votre position actuelle!</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  addRestaurant(name: string, rating: number, description: string, icon: string) {
    this.restaurantProvider.addRestaus(name,rating, description, icon);
  }
  getRestaurants(latLng) {
    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
      location: latLng,
      radius: 3000,
      types: ["restaurant"]
    };
    let __this=this;
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
          for (var i = 0; i < results.length; i++) {
            //__this.addRestaurant(results[i].name, results[i].rating, results[i].vicinity, results[i].icon);
            
            //this.infoWindows.push(results[i].name);
            console.log("******");
            console.log(results[i]);
          }
        } else {
          reject(status);
        }

      });
    });

  }
  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location,
      animation: google.maps.Animation.BOUNCE
    });
  }

  openItem(item) {
    this.navCtrl.push(RestaurantHomePage, {restaurant: item.name});
  }
}
