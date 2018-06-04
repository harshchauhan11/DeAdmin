import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddRetailerPage } from '../add-retailer/add-retailer';
import { AddStorePage } from '../add-store/add-store';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private locationAccuracy: LocationAccuracy) {

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Homepage");
    // this.enableLocation();
  }

  enableLocation() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy
          .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
          .then(
            () => alert("Request successful"),
            error =>
              alert(
                "Error requesting location permissions" + JSON.stringify(error)
              )
          );
      }
    });
  }

  addRetailerForm() {
    this.navCtrl.push(AddRetailerPage);
  }

  addStoreForm() {
    this.navCtrl.push(AddStorePage);
  }

}
