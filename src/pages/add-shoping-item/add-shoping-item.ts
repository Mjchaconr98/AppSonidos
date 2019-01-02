import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { shoppingListService } from '../../services/shopping-list/shopping-list';
import { toastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddShopingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shoping-item',
  templateUrl: 'add-shoping-item.html',
})
export class AddShopingItemPage {

  item: Item = {
    name:'',
    quantity : undefined,
    price:undefined,
  } ;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private shopping:shoppingListService,private toast : toastService,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShopingItemPage');
  }

  addItem(item:Item){
    this.shopping.addItem(item).then(ref=>{
      this.toast.show(`${item.name} !added`)
      this.navCtrl.setRoot('HomePage',{key:ref.key})
    })
  }

  saveItem(){}

}
