import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { shoppingListService } from '../../services/shopping-list/shopping-list';
import { toastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private shopping: shoppingListService,
     private toast: toastService 

  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    // console.log('ionViewDidLoad EditShoppingItemPage');
  }

  saveItem(item: Item) {
    
    this.shopping.editItem(item).then(() =>
    {this.toast.show(`${item.name} !save`);this.navCtrl.setRoot('HomePage')});
  }

  removeItem(item: Item){
    this.shopping.removeItem(item).then(()=>{
      this.toast.show(`${item.name} !Deleted`);
      this.navCtrl.setRoot('HomePage')
    })
  }

}
