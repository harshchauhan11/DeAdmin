import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRetailerPage } from './add-retailer';

@NgModule({
  declarations: [
    AddRetailerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRetailerPage),
  ],
})
export class AddRetailerPageModule {}
