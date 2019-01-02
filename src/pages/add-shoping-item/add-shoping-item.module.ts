import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShopingItemPage } from './add-shoping-item';

@NgModule({
  declarations: [
    AddShopingItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShopingItemPage),
  ],
})
export class AddShopingItemPageModule {}
