import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";



@Injectable()
export class shoppingListService {

    private shoppinListRef = this.db.list<Item>('shopping-list')
    constructor(private db: AngularFireDatabase) {

    }

    getShoppingList() {
        return this.shoppinListRef
    }

    addItem(item: Item) {
        return this.shoppinListRef.push(item)

    }

    editItem(item: Item) {
        return this.shoppinListRef.update(item.key, item);
    }
    removeItem(item: Item) {
        return this.shoppinListRef.remove(item.key);
    }
}