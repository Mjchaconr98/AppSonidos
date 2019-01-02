import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { shoppingListService } from '../../services/shopping-list/shopping-list';
import { Observable } from 'rxjs/observable';

import { Item } from '../../models/item/item.model';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>
  constructor(public navCtrl: NavController,private shopping : shoppingListService) {

    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes =>
      {
        return changes.map(c => ({
          key: c.payload.key,...c.payload.val()
        }))
      }
      )
      
  }

}
