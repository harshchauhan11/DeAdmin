import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddRetailerPage } from '../add-retailer/add-retailer';
import { AddStorePage } from '../add-store/add-store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addRetailerForm() {
    this.navCtrl.push(AddRetailerPage);
  }

  addStoreForm() {
    this.navCtrl.push(AddStorePage);
  }

}
